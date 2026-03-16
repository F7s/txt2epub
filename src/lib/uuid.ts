/**
 * 生成UUID的兼容函数
 * 支持现代浏览器的crypto.randomUUID()和传统浏览器的fallback方法
 */

/**
 * 生成兼容的UUID v4
 * @returns 标准格式的UUID字符串
 */
export function generateUUID(): string {
  // 优先使用原生crypto.randomUUID()（如果支持）
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    try {
      return crypto.randomUUID();
    } catch (error) {
      console.warn('crypto.randomUUID() failed, falling back to manual generation');
    }
  }

  // 兼容性方案：手动生成UUID v4
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * 生成用于EPUB的标识符
 * @returns 格式为 urn:uuid:xxxxx 的标识符
 */
export function generateEpubIdentifier(): string {
  return `urn:uuid:${generateUUID()}`;
}