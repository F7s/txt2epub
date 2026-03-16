import type { TextEncodingResult } from '@/types/epub';

/**
 * 文本编码检测工具类
 * 支持多种中文编码格式的编码检测工具
 */
export class TextEncodingDetector {
  
  /**
   * 检测文本编码并返回解码后的内容
   */
  public static async detectAndDecode(file: File): Promise<TextEncodingResult> {
    const buffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(buffer);
    
    // 检测BOM
    const bomResult = this.detectBOM(uint8Array);
    if (bomResult) {
      return bomResult;
    }
    
    // 尝试不同的编码格式
    const encodings = ['UTF-8', 'GBK', 'GB2312', 'Big5', 'UTF-16LE', 'UTF-16BE'];
    
    for (const encoding of encodings) {
      try {
        const result = this.tryDecode(uint8Array, encoding);
        if (result.confidence > 0.8) {
          return result;
        }
      } catch (error) {
        // 继续尝试下一个编码
        continue;
      }
    }
    
    // 如果所有编码都失败，使用UTF-8作为fallback
    return this.tryDecode(uint8Array, 'UTF-8');
  }
  
  /**
   * 检测BOM (Byte Order Mark)
   */
  private static detectBOM(bytes: Uint8Array): TextEncodingResult | null {
    // UTF-8 BOM: EF BB BF
    if (bytes.length >= 3 && 
        bytes[0] === 0xEF && bytes[1] === 0xBB && bytes[2] === 0xBF) {
      const decoder = new TextDecoder('UTF-8');
      const content = decoder.decode(bytes.slice(3));
      return {
        content,
        encoding: 'UTF-8',
        confidence: 1.0
      };
    }
    
    // UTF-16 LE BOM: FF FE
    if (bytes.length >= 2 && bytes[0] === 0xFF && bytes[1] === 0xFE) {
      const decoder = new TextDecoder('UTF-16LE');
      const content = decoder.decode(bytes.slice(2));
      return {
        content,
        encoding: 'UTF-16LE',
        confidence: 1.0
      };
    }
    
    // UTF-16 BE BOM: FE FF
    if (bytes.length >= 2 && bytes[0] === 0xFE && bytes[1] === 0xFF) {
      const decoder = new TextDecoder('UTF-16BE');
      const content = decoder.decode(bytes.slice(2));
      return {
        content,
        encoding: 'UTF-16BE',
        confidence: 1.0
      };
    }
    
    return null;
  }
  
  /**
   * 尝试使用指定编码解码
   */
  private static tryDecode(bytes: Uint8Array, encoding: string): TextEncodingResult {
    let decoder: TextDecoder;
    
    try {
      decoder = new TextDecoder(encoding, { fatal: true });
    } catch (error) {
      // 如果浏览器不支持该编码，使用polyfill或fallback
      decoder = new TextDecoder('UTF-8', { fatal: false });
    }
    
    const content = decoder.decode(bytes);
    const confidence = this.calculateConfidence(content, encoding);
    
    return {
      content,
      encoding,
      confidence
    };
  }
  
  /**
   * 计算编码置信度
   */
  private static calculateConfidence(content: string, encoding: string): number {
    let score = 0;
    
    // 检查是否包含乱码字符
    const invalidChars = /[\uFFFD\u0000-\u0008\u000B\u000C\u000E-\u001F]/g;
    const invalidCount = (content.match(invalidChars) || []).length;
    
    if (invalidCount === 0) {
      score += 0.5;
    } else {
      score -= invalidCount / content.length;
    }
    
    // 检查中文字符比例（对于中文文本）
    const chineseChars = /[\u4e00-\u9fff]/g;
    const chineseCount = (content.match(chineseChars) || []).length;
    const chineseRatio = chineseCount / content.length;
    
    if (chineseRatio > 0.1) {
      score += 0.3;
    }
    
    // 检查常见中文标点
    const chinesePunctuation = /[，。！？；：""''（）【】《》]/g;
    const punctuationCount = (content.match(chinesePunctuation) || []).length;
    
    if (punctuationCount > 0) {
      score += 0.2;
    }
    
    // 编码特定的置信度调整
    if (encoding === 'UTF-8') {
      score += 0.1; // UTF-8 优先
    }
    
    if (encoding === 'GBK' && chineseRatio > 0.3) {
      score += 0.1; // 中文内容优先GBK
    }
    
    return Math.max(0, Math.min(1, score));
  }
  
  /**
   * 简单的编码检测（用于客户端快速检测）
   */
  public static detectEncodingFromText(text: string): string {
    // 检查是否包含UTF-8特征
    try {
      const encoded = new TextEncoder().encode(text);
      const decoded = new TextDecoder('UTF-8').decode(encoded);
      if (decoded === text) {
        return 'UTF-8';
      }
    } catch (error) {
      // UTF-8解码失败
    }
    
    // 检查中文字符分布
    const chineseChars = /[\u4e00-\u9fff]/g;
    const chineseCount = (text.match(chineseChars) || []).length;
    
    if (chineseCount > text.length * 0.1) {
      return 'GBK'; // 可能是GBK编码
    }
    
    return 'UTF-8'; // 默认UTF-8
  }
  
  /**
   * 修复可能的编码问题
   */
  public static fixEncodingIssues(content: string): string {
    // 修复常见的编码问题
    let fixed = content;
    
    // 修复Windows-1252到UTF-8的常见问题
    const encodingFixes: Record<string, string> = {
      'â€™': '\'',
      'â€œ': '"',
      'â€': '"',
      'â€¦': '…',
      'â€”': '—',
      'â€“': '–',
      'Â': '',
      'Ã¢': 'â',
      'Ã¡': 'á',
      'Ã©': 'é'
    };
    
    for (const [wrong, correct] of Object.entries(encodingFixes)) {
      // 使用字符串替换而不是正则表达式来避免转义问题
      fixed = fixed.split(wrong).join(correct);
    }
    
    // 移除控制字符（保留换行符和制表符）
    fixed = fixed.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
    
    // 标准化换行符
    fixed = fixed.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    
    return fixed;
  }
}