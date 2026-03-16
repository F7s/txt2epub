import type { EpubSettings } from '@/types/epub';

export function getCustomFontFileName(fontFile: File): string {
  const extension = fontFile.name.split('.').pop()?.toLowerCase();
  if (extension === 'woff') return 'custom.woff';
  if (extension === 'woff2') return 'custom.woff2';
  if (extension === 'otf') return 'custom.otf';
  return 'custom.ttf';
}

function getCustomFontCss(settings: EpubSettings): string {
  if (!settings.customFont) {
    return '';
  }

  const fileName = getCustomFontFileName(settings.customFont);
  const extension = fileName.split('.').pop()?.toLowerCase() || 'ttf';
  const format = extension === 'woff2'
    ? 'woff2'
    : extension === 'woff'
      ? 'woff'
      : extension === 'otf'
        ? 'opentype'
        : 'truetype';

  return `@font-face {
  font-family: 'CustomFont';
  src: url('../fonts/${fileName}') format('${format}');
  font-weight: normal;
  font-style: normal;
}`;
}

export function buildEpubStylesheet(settings: EpubSettings): string {
  const customFontCss = getCustomFontCss(settings);
  const fontFamily = settings.customFont ? `'CustomFont', ${settings.fontFamily}` : settings.fontFamily;

  return `@charset "utf-8";

${customFontCss ? `${customFontCss}\n\n` : ''}body {
  font-family: ${fontFamily};
  font-size: ${settings.fontSize}px;
  line-height: ${settings.lineHeight};
  text-align: ${settings.textAlign};
  margin: ${settings.margin}px;
  padding: 20px;
}

.chapter {
  margin: 0 auto;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  text-align: ${settings.titleAlign};
}

h1 { font-size: 1.8em; }
h2 { font-size: 1.5em; }
h3 { font-size: 1.3em; }

p {
  margin-bottom: ${settings.paragraphSpacing};
  text-indent: ${settings.indent}em;
}

.chapter-title {
  text-align: ${settings.titleAlign};
  font-size: 1.5em;
  font-weight: bold;
  margin: 2em 0;
  break-before: page;
  page-break-before: always;
}

.volume-title {
  text-align: ${settings.titleAlign};
  font-size: 2em;
  font-weight: bold;
  margin: 3em 0;
  break-before: page;
  page-break-before: always;
  color: #333;
}

.toc h1 {
  text-align: ${settings.titleAlign};
  margin-bottom: 2em;
}

.toc ol {
  list-style-type: none;
  padding-left: 0;
}

.toc li {
  margin-bottom: 0.5em;
  padding-left: 1em;
}

.toc a {
  text-decoration: none;
  color: #333;
}

.toc a:hover {
  text-decoration: underline;
}

.chapter-content {
  font-size: 1em;
  line-height: ${settings.lineHeight};
  text-align: ${settings.textAlign};
}

.content {
  line-height: ${settings.lineHeight};
  text-indent: ${settings.indent}em;
  margin-bottom: ${settings.paragraphSpacing};
}
`;
}
