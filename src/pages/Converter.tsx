import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import EmptyState from '@/components/converter/EmptyState';
import ConverterWorkspace from '@/components/converter/ConverterWorkspace';
import FileUpload from '@/components/converter/FileUpload';

import { EpubMetadataValidator } from '@/lib/metadataValidator';
import { useConverterController } from '@/hooks/useConverterController';
import { useFileImport } from '@/hooks/useFileImport';
import type { EpubMetadata, EpubSettings } from '@/types/epub';
import { generateEpubIdentifier } from '@/lib/uuid';

export default function Converter() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState<string>('');
  const [metadata, setMetadata] = useState<EpubMetadata>({
    title: '',
    author: '',
    language: 'zh-CN',
    identifier: generateEpubIdentifier(),
    publisher: '',
    description: '',
    subject: '',
    date: new Date().toISOString().split('T')[0],
    rights: ''
  });
  const [settings, setSettings] = useState<EpubSettings>({
    // 默认设置
    fontSize: 16,
    fontFamily: 'serif',
    lineHeight: '1.5rem',
    textAlign: 'justify',
    indent: 2,
    margin: 20,
    titleAlign: 'center',
    paragraphSpacing: '1em',
    maxTitleLength: 35,
    unknownTitle: '章节正文',
    volumeMatch: '^第[0-9一二三四五六七八九十零〇百千两 ]+[卷部]',
    exclusionPattern: '^第[0-9一二三四五六七八九十零〇百千两 ]+(部门|部队|部属|部分|部件|部落|部.*：$)',
    language: 'zh-CN'
  });
  const [chapterCount, setChapterCount] = useState<number>(0);
  const [showContentPreview, setShowContentPreview] = useState(false);
  const {
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
  } = useConverterController({
    selectedFile,
    fileContent,
    metadata,
    settings,
    setChapterCount,
  });

  const handleFileSelect = useFileImport({
    metadata,
    settings,
    appendDebugLog,
    setSelectedFile,
    setChapterCount,
    setFileContent,
    setActionMessage,
    setMetadata,
  });

  const handleMetadataChange = useCallback((newMetadata: EpubMetadata) => {
    console.log('[Converter] 收到元数据更新:', newMetadata);

    // 验证元数据
    const validation = EpubMetadataValidator.validate(newMetadata);

    if (validation.warnings.length > 0) {
      validation.warnings.forEach(warning => {
        console.warn('元数据警告:', warning);
      });
    }

    // 规范化元数据
    const normalizedMetadata = EpubMetadataValidator.normalize(newMetadata);
    console.log('[Converter] 规范化后:', normalizedMetadata);
    setMetadata(normalizedMetadata);
  }, []);

  const handleSettingsChange = useCallback((newSettings: EpubSettings) => {
    setSettings(newSettings);
  }, []);

  const resetConverter = () => {
    appendDebugLog('执行重置');
    setSelectedFile(null);
    setFileContent('');
    setChapterCount(0);
    clearGeneratedOutput();
    const resetMetadata = {
      title: '',
      author: '',
      language: 'zh-CN',
      identifier: generateEpubIdentifier(),
      publisher: '',
      description: '',
      subject: '',
      date: new Date().toISOString().split('T')[0],
      rights: ''
    };
    setMetadata(resetMetadata);
  };

  const handleClearFile = useCallback(() => {
    appendDebugLog('清空已选文件');
    resetConverter();
    setActionMessage(null);
    setDebugLogs([]);
  }, [appendDebugLog]);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const needsMetadata = Boolean(selectedFile && (!metadata.title || !metadata.author));
  const hasFile = Boolean(selectedFile);
  const conversionStage =
    conversionProgress < 30
      ? '解析文本'
      : conversionProgress < 70
      ? '识别章节'
      : conversionProgress < 100
      ? '打包EPUB'
      : '完成';

  // 在移动端，当显示文件上传界面时禁用滚动
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile && !hasFile) {
      // 禁用滚动
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // 恢复滚动
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // 清理函数
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [hasFile]);

  return (
    <div className="container py-6 lg:py-8 pb-24 md:pb-8">
      <AnimatePresence mode="wait">
        {!hasFile ? (
          <motion.div
            key="upload-only"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="min-h-[calc(100vh-10rem)] flex items-center justify-center"
          >
            <EmptyState>
              <FileUpload
                onFileSelect={handleFileSelect}
                selectedFile={selectedFile}
                onClear={handleClearFile}
                disabled={isConverting}
              />
            </EmptyState>
          </motion.div>
        ) : (
          <motion.div
            key="workspace"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className=""
          >
            <ConverterWorkspace
              selectedFile={selectedFile}
              fileContent={fileContent}
              chapterCount={chapterCount}
              showContentPreview={showContentPreview}
              setShowContentPreview={setShowContentPreview}
              isConverting={isConverting}
              generatedBlob={generatedBlob}
              metadata={metadata}
              settings={settings}
              hasFile={hasFile}
              needsMetadata={needsMetadata}
              actionMessage={actionMessage}
              debugLogs={debugLogs}
              performanceReport={performanceReport}
              conversionStage={conversionStage}
              conversionProgress={conversionProgress}
              onClearDebugLogs={() => setDebugLogs([])}
              onFileSelect={handleFileSelect}
              onClearFile={handleClearFile}
              onMetadataChange={handleMetadataChange}
              onSettingsChange={handleSettingsChange}
              onStart={handleStartAction}
              onDownload={handleDownloadAction}
              onReset={resetConverter}
              onRetry={() => clearGeneratedOutput('切换为重新转换模式')}
              formatFileSize={formatFileSize}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
