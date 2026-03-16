import { useCallback, useEffect, useRef, useState } from 'react';
import { EpubGenerator, ProgressCallback } from '@/lib/epubGenerator';
import { EpubMetadataValidator } from '@/lib/metadataValidator';
import { EpubErrorHandler } from '@/lib/errorHandler';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { ConversionHistory, EpubMetadata, EpubSettings } from '@/types/epub';
import { generateUUID } from '@/lib/uuid';
import { debugMetadataFlow, debugEpubGenerator } from '@/test/debug';

interface UseConverterControllerOptions {
  selectedFile: File | null;
  fileContent: string;
  metadata: EpubMetadata;
  settings: EpubSettings;
  setChapterCount: React.Dispatch<React.SetStateAction<number>>;
}

export function useConverterController({
  selectedFile,
  fileContent,
  metadata,
  settings,
  setChapterCount,
}: UseConverterControllerOptions) {
  const [isConverting, setIsConverting] = useState(false);
  const [generatedBlob, setGeneratedBlob] = useState<Blob | null>(null);
  const [performanceReport, setPerformanceReport] = useState<string | null>(null);
  const [conversionProgress, setConversionProgress] = useState(0);
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [debugLogs, setDebugLogs] = useState<string[]>([]);
  const [, setHistory] = useLocalStorage<ConversionHistory[]>('conversion-history', []);

  const generatedBlobUrlRef = useRef<string | null>(null);

  const appendDebugLog = useCallback((message: string) => {
    const timestamp = new Date().toLocaleTimeString('zh-CN', { hour12: false });
    setDebugLogs(prev => {
      const next = [...prev, `[${timestamp}] ${message}`];
      return next.slice(-80);
    });
  }, []);

  const clearGeneratedOutput = useCallback((message?: string) => {
    setGeneratedBlob(null);
    setPerformanceReport(null);
    if (message) {
      appendDebugLog(message);
    }
  }, [appendDebugLog]);

  const trackRealProgress = useCallback(async (generator: EpubGenerator) => {
    setChapterCount(generator.getChapterCount());
  }, [setChapterCount]);

  const handleConvert = useCallback(async () => {
    appendDebugLog('开始执行转换流程');
    setActionMessage(null);

    if (!selectedFile || !fileContent) {
      appendDebugLog('校验失败: 未上传文件');
      setActionMessage('请先上传TXT文件');
      return;
    }

    const validation = EpubMetadataValidator.validate(metadata);
    if (!validation.isValid) {
      appendDebugLog(`校验失败: ${validation.errors.join(', ')}`);
      const msg = '元数据验证失败: ' + validation.errors.join(', ');
      setActionMessage(msg);
      return;
    }
    appendDebugLog('参数校验通过');

    setIsConverting(true);
    setGeneratedBlob(null);
    setConversionProgress(0);
    setActionMessage('正在准备转换...');
    appendDebugLog('进入转换中状态');

    let generator: EpubGenerator | null = null;

    try {
      appendDebugLog('初始化 EpubGenerator');
      debugMetadataFlow('[Converter] 开始转换 - metadata', metadata);
      debugMetadataFlow('[Converter] 开始转换 - settings', settings);
      debugEpubGenerator(metadata, settings);

      // 创建进度回调函数
      const handleProgress: ProgressCallback = (stage, progress, message) => {
        setConversionProgress(progress);
        setActionMessage(message);
        appendDebugLog(`[${stage}] ${progress}% - ${message}`);
      };

      generator = new EpubGenerator(metadata, settings, handleProgress);
      appendDebugLog('解析文本内容');
      generator.parseTextContent(fileContent);

      appendDebugLog('获取章节统计');
      await trackRealProgress(generator);

      const estimatedFileCount = generator.getChapterCount() + 10;
      const shouldUseAdvancedCompression = estimatedFileCount > 50 || fileContent.length > 500000;
      const blob = shouldUseAdvancedCompression
        ? await (appendDebugLog('压缩策略: 多线程'), generator.generateEpubWithWorkers())
        : await (appendDebugLog('压缩策略: 标准'), generator.generateEpub());

      setGeneratedBlob(blob);
      setConversionProgress(100);

      const chapterCount = generator.getChapterCount();
      const finalSizeKB = (blob.size / 1024).toFixed(2);
      const avgPerChapterKB = (blob.size / chapterCount / 1024).toFixed(2);

      let reportText = 'EPUB转换完成报告\n' + '='.repeat(40) + '\n';
      reportText += '✅ 转换状态: 成功\n';
      reportText += '📊 文件信息:\n';
      reportText += '  - 最终文件大小: ' + finalSizeKB + ' KB\n';
      reportText += '  - 章节数量: ' + chapterCount + '\n';
      reportText += '  - 平均每章: ' + avgPerChapterKB + ' KB\n';
      reportText += '  - 压缩策略: ' + (shouldUseAdvancedCompression ? '高级多线程' : '标准单线程') + '\n';
      reportText += '\n📖 元数据:\n';
      reportText += '  - 书名: ' + metadata.title + '\n';
      reportText += '  - 作者: ' + metadata.author + '\n';
      reportText += '  - 封面: ' + (metadata.cover ? '已添加' : '无') + '\n';
      reportText += '\n🎨 排版设置:\n';
      reportText += '  - 字体: ' + settings.fontFamily + '\n';
      reportText += '  - 字号: ' + settings.fontSize + 'px\n';
      reportText += '  - 行高: ' + settings.lineHeight + '\n';
      reportText += '  - 对齐: ' + settings.textAlign + '\n';
      reportText += '  - 缩进: ' + settings.indent + '字符\n';

      setPerformanceReport(reportText);
      appendDebugLog(`转换成功: ${chapterCount} 章, ${(blob.size / 1024).toFixed(2)}KB`);

      const historyItem: ConversionHistory = {
        id: generateUUID(),
        fileName: selectedFile.name,
        originalSize: selectedFile.size,
        convertedSize: blob.size,
        timestamp: new Date(),
        metadata: { ...metadata },
        settings: { ...settings },
        status: 'success'
      };

      setHistory(prev => [historyItem, ...prev.slice(0, 9)]);
      setActionMessage(null);
    } catch (error) {
      console.error('转换失败:', error);
      appendDebugLog(`转换异常: ${error instanceof Error ? error.message : String(error)}`);

      setConversionProgress(0);

      const epubError = error instanceof Error
        ? EpubErrorHandler.handleGenerationError(error)
        : EpubErrorHandler.wrapError(error, '转换处理');

      EpubErrorHandler.logError(epubError);
      setActionMessage(epubError.message);

      const historyItem: ConversionHistory = {
        id: generateUUID(),
        fileName: selectedFile.name,
        originalSize: selectedFile.size,
        convertedSize: 0,
        timestamp: new Date(),
        metadata: { ...metadata },
        settings: { ...settings },
        status: 'error',
        errorMessage: epubError.message
      };

      setHistory(prev => [historyItem, ...prev.slice(0, 9)]);
    } finally {
      generator = null;
      setIsConverting(false);
      appendDebugLog('转换流程结束');
    }
  }, [
    appendDebugLog,
    fileContent,
    metadata,
    selectedFile,
    setChapterCount,
    setHistory,
    settings,
    trackRealProgress,
  ]);

  const handleDownload = useCallback(() => {
    if (!generatedBlob || !metadata.title) {
      appendDebugLog('下载失败: 无可下载文件');
      return;
    }
    appendDebugLog('开始下载文件');

    if (generatedBlobUrlRef.current) {
      URL.revokeObjectURL(generatedBlobUrlRef.current);
      generatedBlobUrlRef.current = null;
    }

    let url: string | null = null;
    let link: HTMLAnchorElement | null = null;

    try {
      url = URL.createObjectURL(generatedBlob);
      generatedBlobUrlRef.current = url;

      link = document.createElement('a');
      link.href = url;
      link.download = `${metadata.title}.epub`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();

      appendDebugLog('下载已触发');
    } catch (error) {
      console.error('下载失败:', error);
      appendDebugLog(`下载异常: ${error instanceof Error ? error.message : String(error)}`);

      if (url) {
        URL.revokeObjectURL(url);
        if (generatedBlobUrlRef.current === url) {
          generatedBlobUrlRef.current = null;
        }
      }
    } finally {
      if (link && document.body.contains(link)) {
        document.body.removeChild(link);
      }

      setTimeout(() => {
        if (url) {
          URL.revokeObjectURL(url);
          if (generatedBlobUrlRef.current === url) {
            generatedBlobUrlRef.current = null;
          }
        }
      }, 1000);
    }
  }, [appendDebugLog, generatedBlob, metadata.title]);

  const handleStartAction = useCallback(() => {
    appendDebugLog('触发转换');
    setActionMessage('按钮已点击，正在校验参数...');
    void handleConvert();
  }, [appendDebugLog, handleConvert]);

  const handleDownloadAction = useCallback(() => {
    appendDebugLog('触发下载');
    handleDownload();
  }, [appendDebugLog, handleDownload]);

  useEffect(() => {
    return () => {
      if (generatedBlobUrlRef.current) {
        URL.revokeObjectURL(generatedBlobUrlRef.current);
      }
    };
  }, []);

  return {
    isConverting,
    generatedBlob,
    performanceReport,
    conversionProgress,
    actionMessage,
    debugLogs,
    appendDebugLog,
    setActionMessage,
    setDebugLogs,
    clearGeneratedOutput,
    handleStartAction,
    handleDownloadAction,
  };
}
