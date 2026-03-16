import type { EpubSettings } from '@/types/epub';

interface TypographyPreviewProps {
  settings: EpubSettings;
  customFontFile: File | null;
  getLineHeightValue: (lineHeight: string) => string;
}

export default function TypographyPreview({
  settings,
  customFontFile,
  getLineHeightValue,
}: TypographyPreviewProps) {
  const fontFamily = customFontFile ? `CustomFont, ${settings.fontFamily}` : settings.fontFamily;

  const paragraphStyle = {
    fontFamily,
    fontSize: `${settings.fontSize}px`,
    lineHeight: getLineHeightValue(settings.lineHeight),
    textAlign: settings.textAlign,
    textIndent: `${settings.indent}em`,
    marginBottom: settings.paragraphSpacing,
    paddingLeft: `${settings.margin}px`,
    paddingRight: `${settings.margin}px`
  } as const;

  return (
    <div className="mt-8">
      <div className="text-base font-semibold">排版预览</div>
      <div
        className="mt-4 border rounded-lg bg-white text-black"
        style={{
          width: 'min(100%, 340px)',
          aspectRatio: '3 / 4',
          minHeight: '320px',
          maxHeight: '420px',
          height: 'auto',
          margin: '0 auto',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            flex: 1,
            padding: '24px',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'
          }}
        >
          <h3
            className="font-bold"
            style={{
              fontFamily,
              fontSize: `${Math.max(settings.fontSize * 1.2, 18)}px`,
              lineHeight: getLineHeightValue(settings.lineHeight),
              textAlign: settings.titleAlign,
              marginBottom: settings.paragraphSpacing,
              paddingLeft: `${settings.margin}px`,
              paddingRight: `${settings.margin}px`
            }}
          >
            第一章 示例章节标题
          </h3>
          <p style={paragraphStyle}>这是一个排版预览示例。您可以通过调整设置来查看不同排版效果。</p>
          <p style={paragraphStyle}>字体、字号、行间距、对齐方式和缩进的变化都会在这里实时显示。</p>
          <p style={paragraphStyle}>EPUB格式是一种开放的电子书标准，被广泛应用于各种电子阅读设备。</p>
          <p style={paragraphStyle}>通过合适的排版设置，可以为读者提供更好的阅读体验。</p>
          {customFontFile && (
            <div
              className="text-sm text-blue-600 mt-4 pt-2"
              style={{
                borderTop: '1px solid #eee',
                paddingLeft: `${settings.margin}px`,
                paddingRight: `${settings.margin}px`
              }}
            >
              ✓ 已应用自定义字体：{customFontFile.name}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-center text-xs sm:text-sm text-muted-foreground leading-6">
        当前设置：字体大小{settings.fontSize}px，行间距{settings.lineHeight}，段落缩进{settings.indent}字符
        <br />
        标题{settings.titleAlign}对齐，页边距{settings.margin}px
      </div>
    </div>
  );
}
