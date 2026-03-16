import type { ChapterPattern, EpubSettings } from '@/types/epub';

export function buildChapterPatterns(settings: EpubSettings): ChapterPattern[] {
  const chapterPatterns: ChapterPattern[] = [];

  if (settings.chapterMatch && settings.chapterMatch.trim()) {
    try {
      chapterPatterns.push({
        pattern: new RegExp(settings.chapterMatch.trim()),
        description: '用户自定义规则',
        priority: 0
      });
    } catch (error) {
      console.warn('无效的章节匹配规则，使用默认规则:', error);
    }
  }

  chapterPatterns.push(
    {
      pattern: /^第[0-9一二三四五六七八九十零〇百千两 ]+[章回节集幕卷部]/,
      description: '中文数字章节',
      priority: 1
    },
    {
      pattern: /^[Ss]ection.{1,20}$/,
      description: '英文Section',
      priority: 2
    },
    {
      pattern: /^[Cc]hapter.{1,20}$/,
      description: '英文Chapter',
      priority: 2
    },
    {
      pattern: /^[Pp]age.{1,20}$/,
      description: '英文Page',
      priority: 3
    },
    {
      pattern: /^\d{1,4}$/,
      description: '纯数字',
      priority: 4
    },
    {
      pattern: /^\d+、/,
      description: '数字编号',
      priority: 3
    },
    {
      pattern: /^(引子|楔子|序章|最终章 \w{1,20}|番外\d?\w{0,20}|完本感言.{0,4})$/,
      description: '特殊章节',
      priority: 1
    },
    {
      pattern: /^(章节目录|章节)$/,
      description: '目录章节',
      priority: 5
    }
  );

  return chapterPatterns;
}

export function buildVolumePattern(settings: EpubSettings): RegExp {
  if (settings.volumeMatch && settings.volumeMatch.trim()) {
    try {
      return new RegExp(settings.volumeMatch.trim());
    } catch (error) {
      console.warn('无效的卷匹配规则，使用默认规则:', error);
    }
  }

  return /^第[0-9一二三四五六七八九十零〇百千两 ]+[卷部]/;
}
