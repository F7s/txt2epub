import { describe, expect, it } from 'vitest';
import { parseChaptersFromText } from './chapterParser';
import { buildChapterPatterns, buildVolumePattern } from './chapterPatterns';
import type { EpubSettings } from '@/types/epub';

const settings: EpubSettings = {
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
};

describe('parseChaptersFromText', () => {
  it('parses volumes and chapters into ordered structures', () => {
    const content = [
      '第一卷 起始',
      '第1章 开始',
      '这是第一章的正文内容，用来验证正文不会被当成章节标题。',
      '第2章 继续',
      '这是第二章的正文内容，同样不应该被识别为新的章节标题。',
      '番外',
      '这是一段番外正文内容。',
    ].join('\n');

    const result = parseChaptersFromText({
      content,
      settings,
      metadataTitle: '示例小说',
      maxTitleLength: settings.maxTitleLength,
      unknownTitleName: settings.unknownTitle,
      chapterPatterns: buildChapterPatterns(settings),
      volumePattern: buildVolumePattern(settings),
    });

    expect(result.chapters).toHaveLength(4);
    expect(result.volumes).toHaveLength(1);
    expect(result.chapters.map((chapter) => chapter.title)).toEqual([
      '第一卷 起始',
      '第1章 开始',
      '第2章 继续',
      '番外',
    ]);
    expect(result.volumes[0]?.chapters).toHaveLength(3);
  });
});
