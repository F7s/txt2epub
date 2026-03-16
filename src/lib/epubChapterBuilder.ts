import type { ChapterInfo } from '@/types/epub';
import type { ZipFileEntry } from './zipOptimizer';

interface BuildChapterEntriesOptions {
  chapters: ChapterInfo[];
  fixEncodingIssues: (content: string) => string;
  escapeXml: (text: string) => string;
  formatContent: (content: string) => string;
}

export function buildChapterEntries({
  chapters,
  fixEncodingIssues,
  escapeXml,
  formatContent,
}: BuildChapterEntriesOptions): {
  entries: ZipFileEntry[];
  totalContentLength: number;
  processedChapters: number;
  largeChapterCount: number;
} {
  let totalContentLength = 0;
  let processedChapters = 0;
  let largeChapterCount = 0;

  const entries = chapters.map((chapter) => {
    const titleClass = chapter.level === 0 ? 'volume-title' : 'chapter-title';
    const chapterContentLength = chapter.content.length;

    if (chapterContentLength > 100000) {
      largeChapterCount++;
      console.log(`📝 大章节检测: "${chapter.title}" (${chapterContentLength.toLocaleString()} 字符)`);
    }

    const chapterContent = fixEncodingIssues(chapter.content);
    const chapterXhtml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>${escapeXml(chapter.title)}</title>
  <link rel="stylesheet" type="text/css" href="../Styles/stylesheet.css"/>
</head>
<body>
  <div class="chapter">
    <h1 class="${titleClass}">${escapeXml(chapter.title)}</h1>
    <div class="chapter-content">
      ${formatContent(chapterContent)}
    </div>
  </div>
</body>
</html>`;

    let finalChapterXhtml = chapterXhtml || `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>${escapeXml(chapter.title || '章节')}</title>
  <link rel="stylesheet" type="text/css" href="../Styles/stylesheet.css"/>
</head>
<body>
  <div class="chapter">
    <h1 class="${titleClass}">${escapeXml(chapter.title || '章节')}</h1>
    <div class="chapter-content">
      <p class="content">章节内容为空</p>
    </div>
  </div>
</body>
</html>`;

    finalChapterXhtml = fixEncodingIssues(finalChapterXhtml);
    totalContentLength += finalChapterXhtml.length;
    processedChapters++;

    return {
      name: `OEBPS/Text/${chapter.id}.xhtml`,
      content: finalChapterXhtml,
      compress: true,
    };
  });

  return { entries, totalContentLength, processedChapters, largeChapterCount };
}
