import { useCallback } from 'react';
import { type BookInfo, BookInfoExtractor } from '@/lib/bookInfoExtractor';

interface ExtractionState {
  bookInfo: BookInfo | null;
  quality: 'high' | 'medium' | 'low' | null;
  issues: string[];
  suggestions: string[];
}

export function useMetadataAutofill(
  setExtractionInfo: React.Dispatch<React.SetStateAction<ExtractionState>>
) {
  return useCallback((filename: string) => {
    if (!filename || typeof filename !== 'string') {
      return null;
    }

    try {
      const bookInfo = BookInfoExtractor.extractBookInfo(filename);
      const validation = BookInfoExtractor.validateExtraction(bookInfo);
      const suggestions = BookInfoExtractor.getExtractionSuggestions(filename);

      setExtractionInfo({
        bookInfo,
        quality: validation.quality,
        issues: validation.issues,
        suggestions
      });

      return bookInfo;
    } catch (error) {
      console.error('智能提取失败:', error);
      setExtractionInfo({
        bookInfo: null,
        quality: null,
        issues: ['提取过程中发生错误'],
        suggestions: []
      });
      return null;
    }
  }, [setExtractionInfo]);
}
