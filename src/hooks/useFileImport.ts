import { useCallback } from 'react';
import { BookInfoExtractor } from '@/lib/bookInfoExtractor';
import { EpubGenerator } from '@/lib/epubGenerator';
import { generateEpubIdentifier } from '@/lib/uuid';
import type { EpubMetadata, EpubSettings } from '@/types/epub';

interface UseFileImportOptions {
  metadata: EpubMetadata;
  settings: EpubSettings;
  appendDebugLog: (message: string) => void;
  setSelectedFile: (file: File) => void;
  setChapterCount: (count: number) => void;
  setFileContent: (content: string) => void;
  setActionMessage: (message: string | null) => void;
  setMetadata: React.Dispatch<React.SetStateAction<EpubMetadata>>;
}

export function useFileImport({
  metadata,
  settings,
  appendDebugLog,
  setSelectedFile,
  setChapterCount,
  setFileContent,
  setActionMessage,
  setMetadata,
}: UseFileImportOptions) {
  return useCallback((file: File, content: string) => {
    setSelectedFile(file);
    setChapterCount(0);
    setFileContent('');
    appendDebugLog(`文件已选择: ${file.name} (${file.size} bytes)`);

    if (!content) {
      setActionMessage('文件已选择，正在读取内容...');
      return;
    }

    setFileContent(content);
    setActionMessage(null);
    appendDebugLog(`文件读取完成: ${file.name}, 内容长度 ${content.length}`);

    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > 20) {
      console.log(`📊 大文件内存使用预估: ${fileSizeMB.toFixed(2)}MB文本内容`);
    }

    const filenameWithoutExt = file.name.replace(/\.[^/.]+$/, '').trim();
    const extracted = BookInfoExtractor.extractBookInfo(file.name);
    setMetadata(prev => {
      const nextTitle = (extracted.title || '').trim() || filenameWithoutExt;
      const extractedAuthor = (extracted.author || '').trim();
      const nextAuthor =
        extractedAuthor && extractedAuthor !== 'Author'
          ? extractedAuthor
          : (prev.author || '').trim() === '未知作者' || (prev.author || '').trim() === 'Author'
            ? ''
            : prev.author || '';

      return {
        ...prev,
        title: nextTitle,
        author: nextAuthor,
        identifier: generateEpubIdentifier()
      };
    });

    try {
      const parseMetadata: EpubMetadata = {
        ...metadata,
        title: metadata.title || filenameWithoutExt || '未命名书籍',
        author: metadata.author || '',
        identifier: metadata.identifier || generateEpubIdentifier()
      };
      const parser = new EpubGenerator(parseMetadata, settings);
      parser.parseTextContent(content);
      const parsedCount = parser.getChapterCount();
      setChapterCount(parsedCount);
      appendDebugLog(`章节解析完成: ${parsedCount} 章`);
    } catch (error) {
      appendDebugLog(`章节解析失败: ${error instanceof Error ? error.message : String(error)}`);
      setChapterCount(0);
    }
  }, [
    appendDebugLog,
    metadata,
    setActionMessage,
    setChapterCount,
    setFileContent,
    setMetadata,
    setSelectedFile,
    settings,
  ]);
}
