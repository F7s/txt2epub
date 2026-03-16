import type { ChapterInfo, ChapterPattern, EpubSettings, VolumeInfo } from '@/types/epub';

interface ParseChaptersOptions {
  content: string;
  settings: EpubSettings;
  metadataTitle: string;
  maxTitleLength: number;
  unknownTitleName: string;
  chapterPatterns: ChapterPattern[];
  volumePattern: RegExp;
}

interface TempChapter {
  title: string;
  content: string;
}

function isChapterTitle(line: string, maxTitleLength: number, chapterPatterns: ChapterPattern[]): boolean {
  if (!line || line.length > maxTitleLength) {
    return false;
  }

  const sortedPatterns = [...chapterPatterns].sort((a, b) => a.priority - b.priority);
  return sortedPatterns.some((patternConfig) => patternConfig.pattern.test(line));
}

function processVolumeStructure(
  tempChapters: TempChapter[],
  settings: EpubSettings,
  volumePattern: RegExp
): { chapters: ChapterInfo[]; volumes: VolumeInfo[] } {
  const chapters: ChapterInfo[] = [];
  const volumes: VolumeInfo[] = [];
  let currentVolume: VolumeInfo | null = null;
  let chapterOrder = 1;

  for (const chapter of tempChapters) {
    if (settings.volumeMatch !== 'false' && volumePattern.test(chapter.title)) {
      if (currentVolume) {
        volumes.push(currentVolume);
      }

      currentVolume = {
        title: chapter.title,
        chapters: [],
        id: `volume_${volumes.length + 1}`
      };

      const volumeChapter: ChapterInfo = {
        title: chapter.title,
        content: chapter.content,
        level: 0,
        id: `chapter_${chapterOrder}`,
        order: chapterOrder++
      };

      chapters.push(volumeChapter);
      currentVolume.chapters.push(volumeChapter);
      continue;
    }

    if (chapter.title.startsWith('完本感言') || chapter.title.startsWith('番外')) {
      if (currentVolume) {
        volumes.push(currentVolume);
        currentVolume = null;
      }

      chapters.push({
        title: chapter.title,
        content: chapter.content,
        level: 1,
        id: `chapter_${chapterOrder}`,
        order: chapterOrder++
      });
      continue;
    }

    const chapterInfo: ChapterInfo = {
      title: chapter.title,
      content: chapter.content,
      level: currentVolume ? 2 : 1,
      id: `chapter_${chapterOrder}`,
      order: chapterOrder++
    };

    chapters.push(chapterInfo);
    if (currentVolume) {
      currentVolume.chapters.push(chapterInfo);
    }
  }

  if (currentVolume) {
    volumes.push(currentVolume);
  }

  return { chapters, volumes };
}

export function parseChaptersFromText({
  content,
  settings,
  metadataTitle,
  maxTitleLength,
  unknownTitleName,
  chapterPatterns,
  volumePattern,
}: ParseChaptersOptions): { chapters: ChapterInfo[]; volumes: VolumeInfo[] } {
  const contentLength = content.length;
  const estimatedMemoryMB = (contentLength * 2) / (1024 * 1024);

  if (estimatedMemoryMB > 10) {
    console.log(`📊 大文件解析: ${contentLength.toLocaleString()} 字符，预计内存使用: ${estimatedMemoryMB.toFixed(2)}MB`);
  }

  const lines = content.split('\n');
  let currentChapter: TempChapter = {
    title: unknownTitleName,
    content: ''
  };
  const tempChapters: TempChapter[] = [];

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine) {
      continue;
    }

    const processedLine = trimmedLine
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    if (trimmedLine.length <= maxTitleLength) {
      const isVolume = settings.volumeMatch !== 'false' && volumePattern.test(trimmedLine);
      const isChapter = isChapterTitle(trimmedLine, maxTitleLength, chapterPatterns);
      let isExclusion = false;

      if (settings.exclusionPattern && settings.exclusionPattern.trim()) {
        try {
          const exclusionRegex = new RegExp(settings.exclusionPattern.trim());
          isExclusion = exclusionRegex.test(trimmedLine);
        } catch (error) {
          console.warn('无效的排除规则:', error);
        }
      }

      if (!isExclusion && (isVolume || isChapter)) {
        if (currentChapter.title !== unknownTitleName || currentChapter.content.trim()) {
          tempChapters.push({ ...currentChapter });
        }

        currentChapter = {
          title: processedLine,
          content: ''
        };
        continue;
      }
    }

    if (currentChapter.content) {
      currentChapter.content += '\n';
    }
    currentChapter.content += processedLine;
  }

  if (currentChapter.content.trim() !== '' || tempChapters.length === 0) {
    if (currentChapter.title === unknownTitleName && tempChapters.length > 0) {
      const lastChapter = tempChapters[tempChapters.length - 1];
      if (lastChapter) {
        lastChapter.content += '\n' + currentChapter.content;
      }
    } else {
      tempChapters.push(currentChapter);
    }
  }

  if (tempChapters.length === 0) {
    tempChapters.push({
      title: metadataTitle || '正文',
      content
    });
  }

  return processVolumeStructure(tempChapters, settings, volumePattern);
}
