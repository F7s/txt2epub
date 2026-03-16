import type { EpubMetadata, EpubSettings, ChapterInfo, VolumeInfo, ChapterPattern } from '@/types/epub';
import { ZipOptimizer, ZipFileEntry } from './zipOptimizer';
import { parseChaptersFromText } from './chapterParser';
import { buildEpubStylesheet, getCustomFontFileName } from './epubStylesheetBuilder';
import { buildContentOpf, buildNavXhtml, buildTocNcx } from './epubManifestBuilder';
import { buildChapterEntries } from './epubChapterBuilder';
import { buildCoverEntries } from './epubCoverBuilder';
import { escapeXml, fixEncodingIssues, formatContent } from './epubTextUtils';
import { calculateTotalFileSize, generatePackagedEpub } from './epubPackager';
import { buildChapterPatterns, buildVolumePattern } from './chapterPatterns';

export type ProgressCallback = (stage: string, progress: number, message: string) => void;

export class EpubGenerator {
  private metadata: EpubMetadata;
  private settings: EpubSettings;
  private chapters: ChapterInfo[] = [];
  private volumes: VolumeInfo[] = [];
  private chapterPatterns!: ChapterPattern[];
  private volumePattern!: RegExp;
  private maxTitleLength: number = 35;
  private unknownTitleName: string = '章节正文';
  private zipOptimizer: ZipOptimizer;
  private fileEntries: ZipFileEntry[] = [];
  private progressCallback?: ProgressCallback;

  constructor(metadata: EpubMetadata, settings: EpubSettings, progressCallback?: ProgressCallback) {
    this.metadata = metadata;
    this.settings = settings;
    this.progressCallback = progressCallback;
    
    // 从设置中读取参数
    this.maxTitleLength = settings.maxTitleLength || 35;
    this.unknownTitleName = settings.unknownTitle || '章节正文';
    
    // 初始化ZIP优化器
    this.zipOptimizer = new ZipOptimizer({
      streamThreshold: 512 * 1024, // 512KB作为流式处理阈值
      compressionThreshold: 50, // 50字节以上才考虑压缩
      compressionEfficiencyThreshold: 0.1, // 10%压缩率阈值
      chunkSize: 8192 // 8KB分块大小
    });
    
    this.initializePatterns();
  }

  private emitProgress(stage: string, progress: number, message: string): void {
    if (this.progressCallback) {
      this.progressCallback(stage, progress, message);
    }
  }

  private initializePatterns(): void {
    this.chapterPatterns = buildChapterPatterns(this.settings);
    this.volumePattern = buildVolumePattern(this.settings);
  }

  private generateMimeType(): void {
    // 使用文件入口系统记录文件
    this.fileEntries.push({
      name: 'mimetype',
      content: 'application/epub+zip',
      store: true // EPUB规范要求mimetype不压缩
    });
  }

  private generateContainer(): void {
    const containerXml = `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`;
    
    this.fileEntries.push({
      name: 'META-INF/container.xml',
      content: containerXml,
      compress: true // XML文件压缩效果好
    });
  }

  private generateContentOpf(): void {
    console.log("[EpubGenerator] 生成content.opf，元数据:", this.metadata);
    this.fileEntries.push({
      name: 'OEBPS/content.opf',
      content: buildContentOpf(this.metadata, this.settings, this.getAllChapters()),
      compress: true
    });
  }

  private generateTocNcx(): void {
    this.fileEntries.push({
      name: 'OEBPS/toc.ncx',
      content: buildTocNcx(this.metadata, this.getAllChapters()),
      compress: true
    });
  }

  private generateNavXhtml(): void {
    this.fileEntries.push({
      name: 'OEBPS/nav.xhtml',
      content: buildNavXhtml(this.getAllChapters(), this.metadata),
      compress: true
    });
  }

  private generateStylesheet(): void {
    this.fileEntries.push({
      name: 'OEBPS/Styles/stylesheet.css',
      content: buildEpubStylesheet(this.settings),
      compress: true
    });
  }

  private async generateFontFiles(): Promise<void> {
    if (!this.settings.customFont) {
      return;
    }

    try {
      const fontBuffer = await this.settings.customFont.arrayBuffer();
      const fileName = getCustomFontFileName(this.settings.customFont);
      
      this.fileEntries.push({
        name: `OEBPS/fonts/${fileName}`,
        content: new Uint8Array(fontBuffer),
        store: true // 字体文件不压缩
      });
      
    } catch (error) {
    }
  }

  private generateChapters(): void {
    const { entries, totalContentLength, processedChapters, largeChapterCount } = buildChapterEntries({
      chapters: this.getAllChapters(),
      fixEncodingIssues,
      escapeXml,
      formatContent,
    });
    this.fileEntries.push(...entries);

    // 大文件优化报告
    if (largeChapterCount > 0 || totalContentLength > 1000000) {
      console.log(`📊 章节生成统计: 处理${processedChapters}章，其中大章节${largeChapterCount}章，总内容${(totalContentLength / 1024).toFixed(2)}KB`);
    }
  }

  // 改进的章节识别算法
  public parseTextContent(content: string): void {
    const parsed = parseChaptersFromText({
      content,
      settings: this.settings,
      metadataTitle: this.metadata.title,
      maxTitleLength: this.maxTitleLength,
      unknownTitleName: this.unknownTitleName,
      chapterPatterns: this.chapterPatterns,
      volumePattern: this.volumePattern,
    });
    this.chapters = parsed.chapters;
    this.volumes = parsed.volumes;
  }

  private getAllChapters(): ChapterInfo[] {
    return this.chapters;
  }

  public async generateEpub(): Promise<Blob> {
    console.log('\\n⚡ 开始标准EPUB生成...');

    // 清空文件入口数组
    this.fileEntries = [];

    // 生成所有系统文件
    this.emitProgress('generating', 5, '生成 mimetype...');
    this.generateMimeType();
    
    this.emitProgress('generating', 10, '生成容器配置...');
    this.generateContainer();
    
    this.emitProgress('generating', 15, '生成内容清单...');
    this.generateContentOpf();
    
    this.emitProgress('generating', 20, '生成目录文件...');
    this.generateTocNcx();
    
    this.emitProgress('generating', 25, '生成导航文件...');
    this.generateNavXhtml();
    
    this.emitProgress('generating', 30, '生成样式表...');
    this.generateStylesheet();

    // 生成字体文件（如果有）
    if (this.settings.customFont) {
      this.emitProgress('generating', 35, '处理自定义字体...');
      await this.generateFontFiles();
    }

    // 生成封面（如果有）
    if (this.metadata.cover) {
      this.emitProgress('generating', 40, '生成封面页面...');
      await this.generateCoverPage();
    }

    // 生成章节内容
    this.emitProgress('generating', 50, '生成章节内容...');
    this.generateChapters();
    
    this.emitProgress('generating', 70, '准备压缩...');

    // 计算总文件大小用于内存监控
    const totalSize = calculateTotalFileSize(this.fileEntries);
    if (totalSize > 2 * 1024 * 1024) { // 超过2MB
      console.log(`📊 文件生成统计: ${this.fileEntries.length}个文件，总大小 ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
    }

    // 使用优化的ZIP压缩
    this.emitProgress('compressing', 80, '压缩文件...');
    const blob = await this.zipOptimizer.generateOptimizedZip(this.fileEntries);

    this.emitProgress('complete', 100, '生成完成');
    console.log('🏁 标准压缩完成！');
    return blob;
  }


  public getChapterCount(): number {
    return this.chapters.length;
  }

  public getChapters(): ChapterInfo[] {
    return [...this.chapters];
  }

  public getVolumes(): VolumeInfo[] {
    return [...this.volumes];
  }

  /**
   * 生成封面页面
   */
  private async generateCoverPage(): Promise<void> {
    if (!this.metadata.cover) return;
    const entries = await buildCoverEntries(this.metadata.cover, this.metadata.title);
    this.fileEntries.push(...entries);
  }

  /**
   * 使用Web Worker进行多线程优化压缩
   * 只在文件数量较大或总大小较大时使用
   */
  public async generateEpubWithWorkers(): Promise<Blob> {
    console.log('\n🚀 开始多线程生成EPUB文件...');
    
    // 先生成所有文件入口
    await this.generateAllFileEntries();
    return generatePackagedEpub(
      this.fileEntries,
      this.getChapterCount(),
      () => this.generateEpub()
    );
  }

  /**
   * 生成所有文件入口的辅助方法
   */
  private async generateAllFileEntries(): Promise<void> {
    this.fileEntries = [];

    this.generateMimeType();
    this.generateContainer();
    this.generateContentOpf();
    this.generateTocNcx();
    this.generateNavXhtml();
    this.generateStylesheet();

    // 生成字体文件（如果有）
    if (this.settings.customFont) {
      await this.generateFontFiles();
    }

    // 生成封面（如果有）
    if (this.metadata.cover) {
      await this.generateCoverPage();
    }

    this.generateChapters();
  }
}
