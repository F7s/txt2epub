import { describe, expect, it } from 'vitest';
import { buildContentOpf, buildNavXhtml, buildTocNcx } from './epubManifestBuilder';
import type { ChapterInfo, EpubMetadata, EpubSettings } from '@/types/epub';

const metadata: EpubMetadata = {
  title: '测试书名',
  author: '测试作者',
  language: 'zh-CN',
  identifier: 'book-id-1',
};

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

const chapters: ChapterInfo[] = [
  { id: 'chapter_1', title: '第1章 开始', content: '内容1', level: 1, order: 1 },
  { id: 'chapter_2', title: '第2章 继续', content: '内容2', level: 1, order: 2 },
];

describe('epub manifest builders', () => {
  it('builds content.opf with metadata and chapter manifest', () => {
    const opf = buildContentOpf(metadata, settings, chapters);

    expect(opf).toContain('<dc:title>测试书名</dc:title>');
    expect(opf).toContain('<dc:creator>测试作者</dc:creator>');
    expect(opf).toContain('href="Text/chapter_1.xhtml"');
    expect(opf).toContain('href="Text/chapter_2.xhtml"');
  });

  it('builds navigation documents from chapter list', () => {
    const toc = buildTocNcx(metadata, chapters);
    const nav = buildNavXhtml(chapters);

    expect(toc).toContain('navPoint-chapter_1');
    expect(toc).toContain('第2章 继续');
    expect(nav).toContain('href="Text/chapter_1.xhtml"');
    expect(nav).toContain('第2章 继续');
  });
});
