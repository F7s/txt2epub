/**
 * ZIP压缩优化器
 * 参考EpubGenerator.swift的压缩优化策略
 * 实现流式压缩、智能压缩选择和性能优化
 * 
 * 注意：这是一个基础的优化器，对于真正的多线程压缩，请使用 FflateWorkerZipOptimizer
 * FflateWorkerZipOptimizer 将实际的压缩逻辑放到 Web Worker 中执行，真正利用多线程优势
 */
// 移除对 JSZip 的直接依赖
// import JSZip from 'jszip';

export interface ZipOptimizationOptions {
  streamThreshold: number; // 流式处理阈值 (字节)
  compressionThreshold: number; // 压缩阈值 (字节)
  compressionEfficiencyThreshold: number; // 压缩效率阈值 (0-1)
  chunkSize: number; // 分块大小 (字节)
}

export interface ZipFileEntry {
  name: string;
  content: string | ArrayBuffer;
  compress?: boolean;
  store?: boolean;
}

export class ZipOptimizer {
  protected options: ZipOptimizationOptions;
  // 移除性能监控器

  constructor(options?: Partial<ZipOptimizationOptions>) {
    this.options = {
      streamThreshold: 1024 * 1024, // 1MB
      compressionThreshold: 100, // 100字节
      compressionEfficiencyThreshold: 0.1, // 10%压缩率
      chunkSize: 8192, // 8KB
      ...options
    };
  }

  /**
   * 优化的ZIP文件生成
   * 参考Swift版本的createZipArchiveOptimized方法
   */
  public async generateOptimizedZip(files: ZipFileEntry[]): Promise<Blob> {
    // 移除日志输出
    // console.log('开始生成优化的ZIP文件，文件数量:', files.length);
    
    // 使用 fflate 替代 JSZip
    const fflate = await import('fflate');
    
    // 按照EPUB规范要求，mimetype必须是第一个文件且不压缩
    const sortedFiles = this.sortFilesForEpub(files);
    // 移除日志输出
    // console.log('排序后的文件数量:', sortedFiles.length);
    
    let processedFiles = 0;
    const totalFiles = sortedFiles.length;
    
    // 创建 ZIP 文件结构
    const zipFiles: { [key: string]: Uint8Array | { data: Uint8Array, opts: { level: number } } } = {};
    
    // 特别处理 mimetype 文件
    let hasMimetype = false;
    let mimetypeContent: Uint8Array | null = null;
    
    for (const file of sortedFiles) {
      // 处理文件内容，确保正确编码
      let content: Uint8Array;
      if (typeof file.content === 'string') {
        // 确保字符串不为空，并使用UTF-8编码
        const fileString = file.content || ' ';
        // 修复可能的编码问题
        const fixedContent = this.fixEncodingIssues(fileString);
        content = new TextEncoder().encode(fixedContent);
        
        // 移除调试输出
        // 如果是XHTML文件，打印前100个字符用于调试
        // if (file.name.endsWith('.xhtml')) {
        //   const preview = fixedContent.substring(0, 100);
        //   console.log(\`📄 \${file.name} 前100个字符: "\${preview}"\`);
        // }
      } else if (file.content instanceof ArrayBuffer) {
        content = new Uint8Array(file.content);
        
        // 移除调试输出
        // 如果是XHTML文件，打印前100个字节用于调试
        // if (file.name.endsWith('.xhtml')) {
        //   try {
        //     const preview = new TextDecoder().decode(new Uint8Array(file.content, 0, Math.min(100, file.content.byteLength)));
        //     console.log(\`📄 \${file.name} 前100个字符: "\${preview}"\`);
        //   } catch (e) {
        //     console.log(\`📄 \${file.name} 前100个字符: 无法解码\`);
        //   }
        // }
      } else if ((file.content as any) instanceof Uint8Array) {
        content = file.content as Uint8Array;
        
        // 移除调试输出
        // 如果是XHTML文件，打印前100个字节用于调试
        // if (file.name.endsWith('.xhtml')) {
        //   try {
        //     const preview = new TextDecoder().decode(new Uint8Array(content.buffer, content.byteOffset, Math.min(100, content.byteLength)));
        //     console.log(\`📄 \${file.name} 前100个字符: "\${preview}"\`);
        //   } catch (e) {
        //     console.log(\`📄 \${file.name} 前100个字符: 无法解码\`);
        //   }
        // }
      } else {
        // 其他情况，转换为字符串并编码
        const fileString = String(file.content) || ' ';
        // 修复可能的编码问题
        const fixedContent = this.fixEncodingIssues(fileString);
        content = new TextEncoder().encode(fixedContent);
        
        // 移除调试输出
        // 如果是XHTML文件，打印前100个字符用于调试
        // if (file.name.endsWith('.xhtml')) {
        //   const preview = fixedContent.substring(0, 100);
        //   console.log(\`📄 \${file.name} 前100个字符: "\${preview}"\`);
        // }
      }
      
      // 移除日志输出
      // console.log('处理文件:', file.name, '大小:', content.byteLength);
      
      // 确保内容不为空且长度大于0
      if (!content || content.length === 0) {
        content = new Uint8Array([32]); // 空格字符
      }
      
      // mimetype 文件不压缩且必须是第一个
      if (file.name === 'mimetype') {
        // 确保mimetype文件有正确的内容
        if (!content || content.length === 0) {
          content = new TextEncoder().encode('application/epub+zip');
        }
        // 移除日志输出
        // console.log('处理mimetype文件，大小:', content.byteLength);
        zipFiles[file.name] = content;
        mimetypeContent = content;
        hasMimetype = true;
      } else {
        // 文本文件不应被压缩，避免重复压缩
        const textExtensions = ['html', 'xhtml', 'xml', 'css', 'txt', 'js', 'json', 'opf', 'ncx'];
        const extension = file.name.split('.').pop()?.toLowerCase() || '';
        const isTextFile = textExtensions.includes(extension);
        const shouldCompress = !isTextFile && this.shouldCompress(file);
        // 移除日志输出
        // console.log('文件:', file.name, '是否压缩:', shouldCompress, '是否为文本文件:', isTextFile);
        if (shouldCompress) {
          try {
            const compressedData = fflate.zlibSync(content, { level: 6 });
            // 移除日志输出
            // console.log('文件压缩完成:', file.name, '压缩前大小:', content.byteLength, '压缩后大小:', compressedData.byteLength);
            
            // 使用与Worker脚本一致的数据结构
            zipFiles[file.name] = {
              data: compressedData,
              opts: { level: 6 }
            };
          } catch (error) {
            // 移除日志输出
            // console.warn(\`压缩文件 \${file.name} 失败，使用原始内容:\`, error);
            zipFiles[file.name] = content;
          }
        } else {
          // 确保文件内容不为空
          if (!content || content.length === 0) {
            content = new Uint8Array([32]); // 空格字符
          }
          zipFiles[file.name] = content;
        }
      }

      processedFiles++;
      
      // 移除进度输出
      // 定期报告进度
      // if (processedFiles % 10 === 0 || processedFiles === totalFiles) {
      //   if (this.performanceMonitor) {
      //     this.performanceMonitor.logProgress('文件压缩', processedFiles, totalFiles);
      //   }
      // }

      // if (this.performanceMonitor) {
      //   this.performanceMonitor.endMetric(\`处理文件: \${file.name}\`, {
      //     processed: true,
      //     compressionUsed: this.shouldCompress(file)
      //   });
      // }
    }
    
    // 确保 mimetype 文件存在
    if (!hasMimetype) {
      // 移除日志输出
      // console.log('mimetype文件不存在，创建默认mimetype文件');
      mimetypeContent = new TextEncoder().encode('application/epub+zip');
      zipFiles['mimetype'] = mimetypeContent;
    }

    // 生成ZIP文件
    return new Promise<Blob>((resolve, reject) => {
      // 按照 EPUB 规范，创建有序的文件结构
      const finalZipFiles: any = {};
      
      // 1. 首先添加 mimetype 文件（不压缩）
      if (mimetypeContent) {
        finalZipFiles['mimetype'] = mimetypeContent;
        // 移除日志输出
        // console.log('添加mimetype文件到ZIP，大小:', mimetypeContent.byteLength);
      }
      
      // 2. 然后添加 META-INF 文件夹内容
      Object.keys(zipFiles).forEach(key => {
        if (key.startsWith('META-INF/') && key !== 'mimetype') {
          const fileData = zipFiles[key];
          const size = fileData instanceof Uint8Array ? fileData.byteLength : fileData.data.byteLength;
          finalZipFiles[key] = fileData;
          // 移除日志输出
          // console.log('添加META-INF文件到ZIP:', key, '大小:', size);
        }
      });
      
      // 3. 最后添加其他所有文件
      Object.keys(zipFiles).forEach(key => {
        if (!key.startsWith('META-INF/') && key !== 'mimetype') {
          const fileData = zipFiles[key];
          const size = fileData instanceof Uint8Array ? fileData.byteLength : fileData.data.byteLength;
          finalZipFiles[key] = fileData;
          // 移除日志输出
          // console.log('添加其他文件到ZIP:', key, '大小:', size);
        }
      });
      
      // 确保所有文件都有正确的内容
      const validatedZipFiles: { [key: string]: Uint8Array } = {};
      
      Object.keys(finalZipFiles).forEach(key => {
        const fileData = finalZipFiles[key];
        
        // 检查文件数据类型并确保正确处理
        let content: Uint8Array;
        
        if (fileData instanceof Uint8Array) {
          // 直接使用Uint8Array，确保不为空
          content = fileData;
        } else if (typeof fileData === 'object' && fileData !== null && 'data' in fileData) {
          // 压缩数据对象
          content = fileData.data instanceof Uint8Array ? fileData.data : new Uint8Array([32]);
        } else {
          // 其他情况，确保至少有一个字节
          content = new Uint8Array([32]); // 空格字符
        }
        
        // 确保内容不为空
        if (content.length === 0) {
          content = new Uint8Array([32]); // 空格字符
        }
        
        validatedZipFiles[key] = content;
        // 移除日志输出
        // console.log('验证文件:', key, '最终大小:', content.byteLength);
      });
      
      // 移除日志输出
      // console.log('开始生成最终ZIP文件，文件数量:', Object.keys(validatedZipFiles).length);
      
      fflate.zip(validatedZipFiles, {
        level: 6
      }, (err, data) => {
        if (err) {
          // 移除日志输出
          // console.error('生成ZIP文件失败:', err);
          reject(err);
        } else {
          // 移除日志输出
          // console.log('ZIP文件生成完成，大小:', data.byteLength);
          resolve(new Blob([data], { type: 'application/epub+zip' }));
        }
      });
    });
  }

  /**
   * 修复可能的编码问题
   */
  protected fixEncodingIssues(content: string): string {
    // 修复常见的编码问题
    let fixed = content;
    
    // 修复Windows-1252到UTF-8的常见问题
    const encodingFixes: Record<string, string> = {
      'â€™': '\'',
      'â€œ': '"',
      'â€': '"',
      'â€¦': '…',
      'â€”': '—',
      'â€“': '–',
      'Â': '',
      'Ã¢': 'â',
      'Ã¡': 'á',
      'Ã©': 'é'
    };
    
    for (const [wrong, correct] of Object.entries(encodingFixes)) {
      // 使用字符串替换而不是正则表达式来避免转义问题
      fixed = fixed.split(wrong).join(correct);
    }
    
    // 移除控制字符（保留换行符和制表符）
    fixed = fixed.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
    
    // 标准化换行符
    fixed = fixed.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    
    return fixed;
  }

  /**
   * 智能文件排序 - 确保EPUB规范合规性
   */
  protected sortFilesForEpub(files: ZipFileEntry[]): ZipFileEntry[] {
    return files.sort((a, b) => {
      // mimetype必须是第一个文件
      if (a.name === 'mimetype') return -1;
      if (b.name === 'mimetype') return 1;
      
      // META-INF文件优先
      if (a.name.startsWith('META-INF/') && !b.name.startsWith('META-INF/')) return -1;
      if (b.name.startsWith('META-INF/') && !a.name.startsWith('META-INF/')) return 1;
      
      // 其他文件按字母顺序
      return a.name.localeCompare(b.name);
    });
  }

  /**
   * 获取文件大小的辅助方法
   */
  protected getFileSize(content: string | ArrayBuffer): number {
    if (typeof content === 'string') {
      return new TextEncoder().encode(content).length;
    } else {
      return content.byteLength;
    }
  }

  /**
   * 判断是否应该压缩文件
   */
  protected shouldCompress(file: ZipFileEntry): boolean {
    // 明确指定不压缩
    if (file.store === true || file.compress === false) {
      return false;
    }
    
    // 明确指定压缩
    if (file.compress === true) {
      return true;
    }
    
    // mimetype文件不压缩（EPUB规范要求）
    if (file.name === 'mimetype') {
      return false;
    }
    
    // 小文件不压缩
    const size = this.getFileSize(file.content);
    
    if (size < this.options.compressionThreshold) {
      return false;
    }
    
    // 根据文件类型判断
    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    const codecExtensions = ['jpg', 'jpeg', 'png', 'gif', 'mp3', 'mp4', 'zip', 'epub'];
    
    // 已压缩格式不再压缩
    if (codecExtensions.includes(extension)) {
      return false;
    }
    
    // 默认对大文件进行压缩
    return size > this.options.compressionThreshold * 2;
  }

  /**
   * 判断是否为大文件
   */
  protected isLargeFile(file: ZipFileEntry): boolean {
    const size = this.getFileSize(file.content);
    
    return size > this.options.streamThreshold;
  }

  /**
   * 获取最优ZIP选项
   */
  protected getOptimalZipOptions(): any {
    return {
      type: 'blob',
      mimeType: 'application/epub+zip',
      compression: 'DEFLATE',
      compressionOptions: { 
        level: 6 // 平衡压缩率和速度
      },
      streamFiles: true, // 启用流式处理
      platform: 'UNIX' // 确保跨平台兼容性
    };
  }

  /**
   * 预估压缩效果
   */
  public estimateCompressionRatio(content: string): number {
    // 简单的压缩率估算算法
    const charFreq = new Map<string, number>();
    for (const char of content) {
      charFreq.set(char, (charFreq.get(char) || 0) + 1);
    }
    
    let entropy = 0;
    const length = content.length;
    for (const freq of charFreq.values()) {
      const probability = freq / length;
      entropy -= probability * Math.log2(probability);
    }
    
    // 基于信息熵估算压缩率
    const maxEntropy = Math.log2(256); // 8位最大熵
    const compressionRatio = 1 - (entropy / maxEntropy);
    
    return Math.max(0, Math.min(1, compressionRatio));
  }

  /**
   * 获取优化建议
   */
  public getOptimizationRecommendations(files: ZipFileEntry[]): string[] {
    const recommendations: string[] = [];
    
    let totalSize = 0;
    let compressibleSize = 0;
    let largeFiles = 0;
    
    for (const file of files) {
      const size = this.getFileSize(file.content);
      
      totalSize += size;
      
      if (this.shouldCompress(file)) {
        compressibleSize += size;
      }
      
      if (this.isLargeFile(file)) {
        largeFiles++;
      }
    }
    
    const compressionRatio = compressibleSize / totalSize;
    
    if (compressionRatio > 0.8) {
      recommendations.push('大部分文件都可以压缩，建议使用较高的压缩级别');
    }
    
    if (largeFiles > 5) {
      recommendations.push('检测到' + largeFiles + '个大文件，建议考虑分批处理或流式压缩');
    }
    
    if (totalSize > 50 * 1024 * 1024) { // 50MB
      recommendations.push('文件总大小较大，建议启用流式处理以减少内存使用');
    }
    
    const textFiles = files.filter(f => 
      f.name.endsWith('.html') || f.name.endsWith('.xhtml') || 
      f.name.endsWith('.xml') || f.name.endsWith('.css')
    ).length;
    
    if (textFiles / files.length > 0.7) {
      recommendations.push('大部分为文本文件，压缩效果预计较好');
    }
    
    return recommendations;
  }
}

/**
 * Web Worker压缩实现（浏览器多线程支持）
 * 参考记忆中的Web Worker多线程处理方案
 */
export class WebWorkerZipOptimizer extends ZipOptimizer {
  private workerCount: number;
  private workerPool: Worker[] = []; // ✅ Worker池
  private workerUrls: string[] = []; // ✅ 追踪URL以释放内存

  constructor(options?: Partial<ZipOptimizationOptions>, workerCount: number = 2) {
    super(options);
    this.workerCount = workerCount;
  }

  /**
   * 使用Web Worker进行多线程压缩
   */
  public async generateOptimizedZipWithWorkers(files: ZipFileEntry[]): Promise<Blob> {
    if (!window.Worker) {
      // 降级到单线程处理
      // 移除日志输出
      // console.log('Web Worker不可用，降级到单线程处理');
      return await this.generateOptimizedZip(files);
    }

    try {
      const result = await this.processWithWorkers(files);
      // 确保清理资源
      this.destroyWorkerPool();
      return result;
    } catch (error) {
      // 移除日志输出
      // console.warn('Web Worker处理失败，降级到单线程:', error);
      // 出错时也要清理资源
      this.destroyWorkerPool();
      return await this.generateOptimizedZip(files);
    }
  }

  /**
   * Web Worker处理实现（使用Worker池）
   */
  private async processWithWorkers(files: ZipFileEntry[]): Promise<Blob> {
    // 将文件分组给不同的Worker处理
    const fileGroups = this.divideFilesIntoGroups(files, this.workerCount);
    const processedGroups: ZipFileEntry[] = [];

    // ✅ 创建 Worker 池（如果还没有）
    if (this.workerPool.length === 0) {
      this.workerPool = Array.from({ length: this.workerCount }, () =>
        this.createInlineWorker()
      );
    }

    const workerPromises = fileGroups.map(async (group: ZipFileEntry[], index: number) => {
      // ✅ 从池中获取 Worker
      const worker = this.workerPool[index % this.workerPool.length];

      return new Promise<ZipFileEntry[]>((resolve, reject) => {
        // ✅ 使用 addEventListener 以便后续移除
        const messageHandler = (e: MessageEvent) => {
          const { type, data, error } = e.data;

          if (type === 'success') {
            worker.removeEventListener('message', messageHandler);
            worker.removeEventListener('error', errorHandler);
            resolve(data);
          } else if (type === 'error') {
            worker.removeEventListener('message', messageHandler);
            worker.removeEventListener('error', errorHandler);
            reject(new Error(error));
          }
        };

        const errorHandler = (error: ErrorEvent) => {
          worker.removeEventListener('message', messageHandler);
          worker.removeEventListener('error', errorHandler);
          reject(error);
        };

        worker.addEventListener('message', messageHandler);
        worker.addEventListener('error', errorHandler);

        // 发送文件组给Worker处理
        worker.postMessage({
          type: 'process',
          files: group,
          options: {
            streamThreshold: this.options.streamThreshold,
            compressionThreshold: this.options.compressionThreshold,
            compressionEfficiencyThreshold: this.options.compressionEfficiencyThreshold,
            chunkSize: this.options.chunkSize
          }
        });
      });
    });

    // 等待所有Worker完成
    const results = await Promise.all(workerPromises);

    // 合并结果
    for (const result of results) {
      processedGroups.push(...result);
    }

    // 最终使用主线程的fflate合并
    return await this.generateOptimizedZip(processedGroups);
  }

  /**
   * 创建内联Web Worker
   */
  private createInlineWorker(): Worker {
    const workerScript = 
      '// Web Worker中的文件处理逻辑\n' +
      'self.onmessage = function(e) {\n' +
      '  const { type, files, options } = e.data;\n' +
      '  \n' +
      '  if (type === \'process\') {\n' +
      '    try {\n' +
      '      // 在Worker中处理文件内容格式化\n' +
      '      const processedFiles = files.map(file => {\n' +
      '        // mimetype 文件不压缩（EPUB 规范要求）\n' +
      '        if (file.name === \'mimetype\') {\n' +
      '          return {\n' +
      '            ...file,\n' +
      '            compress: false,\n' +
      '            store: true\n' +
      '          };\n' +
      '        }\n' +
      '        \n' +
      '        // 这里可以进行CPU密集型的内容处理\n' +
      '        // 比如XHTML格式化、内容清理等\n' +
      '        return {\n' +
      '          ...file,\n' +
      '          content: file.content, // 实际处理逻辑\n' +
      '          processed: true\n' +
      '        };\n' +
      '      });\n' +
      '      \n' +
      '      self.postMessage({\n' +
      '        type: \'success\',\n' +
      '        data: processedFiles\n' +
      '      });\n' +
      '    } catch (error) {\n' +
      '      self.postMessage({\n' +
      '        type: \'error\',\n' +
      '        error: error.message\n' +
      '      });\n' +
      '    }\n' +
      '  }\n' +
      '};';

    const blob = new Blob([workerScript], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    // ✅ 保存URL以便后续释放
    this.workerUrls.push(url);
    return new Worker(url);
  }

  /**
   * 销毁 Worker 池
   */
  private destroyWorkerPool(): void {
    if (this.workerPool.length > 0) {
      // 终止所有 Worker
      this.workerPool.forEach(worker => worker.terminate());

      // ✅ 释放所有 Worker URL，防止内存泄漏
      this.workerUrls.forEach(url => URL.revokeObjectURL(url));

      // 清空引用
      this.workerPool = [];
      this.workerUrls = [];
    }
  }

  /**
   * 将文件分组给不同Worker处理
   */
  private divideFilesIntoGroups(files: ZipFileEntry[], groupCount: number): ZipFileEntry[][] {
    const groups: ZipFileEntry[][] = Array.from({ length: groupCount }, () => []);
    
    // 确保mimetype文件在第一组
    const mimetypeFile = files.find(f => f.name === 'mimetype');
    const otherFiles = files.filter(f => f.name !== 'mimetype');
    
    if (mimetypeFile) {
      groups[0].push(mimetypeFile);
    }
    
    // 按大小平均分配其他文件
    otherFiles.sort((a, b) => {
      const sizeA = this.getFileSize(a.content);
      const sizeB = this.getFileSize(b.content);
      return sizeB - sizeA; // 大文件优先
    });
    
    let currentGroup = 0;
    for (const file of otherFiles) {
      groups[currentGroup].push(file);
      currentGroup = (currentGroup + 1) % groupCount;
    }
    
    return groups.filter(group => group.length > 0);
  }
}
