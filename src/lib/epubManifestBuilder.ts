import type { ChapterInfo, EpubMetadata, EpubSettings } from '@/types/epub';
import { getCustomFontFileName } from './epubStylesheetBuilder';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function getCoverExtension(coverFile: File): string {
  return coverFile.name.split('.').pop()?.toLowerCase() || 'jpg';
}

function getCoverMimeType(extension: string): string {
  switch (extension) {
    case 'png': return 'image/png';
    case 'gif': return 'image/gif';
    case 'webp': return 'image/webp';
    case 'svg': return 'image/svg+xml';
    default: return 'image/jpeg';
  }
}

function getFontMimeType(extension: string): string {
  switch (extension) {
    case 'woff2': return 'font/woff2';
    case 'woff': return 'font/woff';
    case 'otf': return 'font/otf';
    default: return 'font/ttf';
  }
}

export function buildContentOpf(metadata: EpubMetadata, settings: EpubSettings, chapters: ChapterInfo[]): string {
  const manifestItems = chapters.map((chapter) =>
    `    <item id="${chapter.id}" href="Text/${chapter.id}.xhtml" media-type="application/xhtml+xml"/>`
  ).join('\n');

  const spineItems = chapters.map((chapter) =>
    `    <itemref idref="${chapter.id}"/>`
  ).join('\n');

  let coverManifestItem = '';
  let coverSpineItem = '';
  if (metadata.cover) {
    const coverExtension = getCoverExtension(metadata.cover);
    const coverMimeType = getCoverMimeType(coverExtension);
    coverManifestItem = `    <item id="cover-image" href="Images/cover.${coverExtension}" media-type="${coverMimeType}" properties="cover-image"/>\n    <item id="cover" href="Text/cover.xhtml" media-type="application/xhtml+xml"/>`;
    coverSpineItem = '    <itemref idref="cover"/>\n';
  }

  let fontManifestItem = '';
  if (settings.customFont) {
    const fontFileName = getCustomFontFileName(settings.customFont);
    const fontExtension = fontFileName.split('.').pop()?.toLowerCase() || 'ttf';
    fontManifestItem = `    <item id="font-custom" href="fonts/${fontFileName}" media-type="${getFontMimeType(fontExtension)}"/>`;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookId" version="3.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
    <dc:identifier id="BookId">${metadata.identifier}</dc:identifier>
    <dc:title>${escapeXml(metadata.title)}</dc:title>
    <dc:creator>${escapeXml(metadata.author)}</dc:creator>
    <dc:language>${metadata.language}</dc:language>
    <dc:date>${metadata.date || new Date().toISOString().split('T')[0]}</dc:date>
    ${metadata.publisher ? `<dc:publisher>${escapeXml(metadata.publisher)}</dc:publisher>` : ''}
    ${metadata.description ? `<dc:description>${escapeXml(metadata.description)}</dc:description>` : ''}
    ${metadata.subject ? `<dc:subject>${escapeXml(metadata.subject)}</dc:subject>` : ''}
    ${metadata.rights ? `<dc:rights>${escapeXml(metadata.rights)}</dc:rights>` : ''}
    <meta property="dcterms:modified">${new Date().toISOString()}</meta>
    ${metadata.cover ? '<meta name="cover" content="cover-image"/>' : ''}
  </metadata>
  <manifest>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="stylesheet" href="Styles/stylesheet.css" media-type="text/css"/>
${fontManifestItem ? fontManifestItem + '\n' : ''}${coverManifestItem ? coverManifestItem + '\n' : ''}${manifestItems}
  </manifest>
  <spine toc="ncx">
    <itemref idref="nav"/>
${coverSpineItem}${spineItems}
  </spine>
</package>`;
}

export function buildTocNcx(metadata: EpubMetadata, chapters: ChapterInfo[]): string {
  const navPoints = chapters.map((chapter, index) => `
    <navPoint id="navPoint-${chapter.id}" playOrder="${index + 1}">
      <navLabel>
        <text>${escapeXml(chapter.title)}</text>
      </navLabel>
      <content src="Text/${chapter.id}.xhtml"/>
    </navPoint>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="${metadata.identifier}"/>
    <meta name="dtb:depth" content="1"/>
    <meta name="dtb:totalPageCount" content="0"/>
    <meta name="dtb:maxPageNumber" content="0"/>
  </head>
  <docTitle>
    <text>${escapeXml(metadata.title)}</text>
  </docTitle>
  <navMap>${navPoints}
  </navMap>
</ncx>`;
}

export function buildNavXhtml(chapters: ChapterInfo[]): string {
  const navItems = chapters.map((chapter) =>
    `        <li><a href="Text/${chapter.id}.xhtml">${escapeXml(chapter.title)}</a></li>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
  <title>目录</title>
  <link rel="stylesheet" type="text/css" href="Styles/stylesheet.css"/>
</head>
<body>
  <nav epub:type="toc" id="toc">
    <h1>目录</h1>
    <ol>
${navItems}
    </ol>
  </nav>
</body>
</html>`;
}
