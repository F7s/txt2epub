/**
 * 调试工具 - 用于验证元数据传递流程
 */

export function debugMetadataFlow(component: string, data: any) {
  const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
  console.log(`[${timestamp}] ${component}:`, JSON.stringify(data, null, 2));
}

export function debugEpubGenerator(metadata: any, settings: any) {
  console.log('=== EPUB生成器调试信息 ===');
  console.log('元数据:', {
    title: metadata.title,
    author: metadata.author,
    cover: metadata.cover ? '有封面' : '无封面',
    publisher: metadata.publisher,
    description: metadata.description ? `${metadata.description.substring(0, 50)}...` : ''
  });
  console.log('排版设置:', {
    fontSize: settings.fontSize,
    fontFamily: settings.fontFamily,
    textAlign: settings.textAlign,
    indent: settings.indent
  });
}
