import type { TextEncodingResult } from '@/types/epub';

export class TextEncodingDetector {
  
  public static async detectAndDecode(file: File): Promise<TextEncodingResult> {
    const buffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(buffer);
    
    // 首先检查BOM
    const bomResult = this.detectBOM(uint8Array);
    if (bomResult) {
      return bomResult;
    }
    
    // 尝试不同的编码格式，按优先级排序
    const encodingStrategies = [
      // 首先尝试UTF-8
      { encoding: 'UTF-8', fallbackOnError: false },
      // 然后尝试GBK（包含GB2312）
      { encoding: 'GBK', fallbackOnError: true },
      // 最后使用UTF-8但允许错误
      { encoding: 'UTF-8', fallbackOnError: true }
    ];
    
    for (const strategy of encodingStrategies) {
      try {
        const result = this.tryDecodeWithStrategy(uint8Array, strategy);
        if (result.confidence > 0.6) {
          return result;
        }
      } catch (error) {
        // UTF-8/GBK 探测阶段的失败是预期分支，不输出控制台噪音
        continue;
      }
    }
    
    // 如果所有策略都失败，尝试简单的字符编码检测
    return this.fallbackDecode(uint8Array);
  }
  
  private static detectBOM(bytes: Uint8Array): TextEncodingResult | null {
    // UTF-8 BOM: EF BB BF
    if (bytes.length >= 3 && 
        bytes[0] === 0xEF && bytes[1] === 0xBB && bytes[2] === 0xBF) {
      const decoder = new TextDecoder('UTF-8');
      const content = decoder.decode(bytes.slice(3));
      return { content, encoding: 'UTF-8', confidence: 1.0 };
    }
    
    // UTF-16 LE BOM: FF FE
    if (bytes.length >= 2 && bytes[0] === 0xFF && bytes[1] === 0xFE) {
      const decoder = new TextDecoder('UTF-16LE');
      const content = decoder.decode(bytes.slice(2));
      return { content, encoding: 'UTF-16LE', confidence: 1.0 };
    }
    
    // UTF-16 BE BOM: FE FF
    if (bytes.length >= 2 && bytes[0] === 0xFE && bytes[1] === 0xFF) {
      const decoder = new TextDecoder('UTF-16BE');
      const content = decoder.decode(bytes.slice(2));
      return { content, encoding: 'UTF-16BE', confidence: 1.0 };
    }
    
    return null;
  }
  
  private static tryDecode(bytes: Uint8Array, encoding: string): TextEncodingResult {
    let decoder: TextDecoder;
    
    try {
      decoder = new TextDecoder(encoding, { fatal: true });
    } catch (error) {
      decoder = new TextDecoder('UTF-8', { fatal: false });
    }
    
    const content = decoder.decode(bytes);
    const confidence = this.calculateConfidence(content, encoding);
    
    return { content, encoding, confidence };
  }
  
  private static tryDecodeWithStrategy(bytes: Uint8Array, strategy: { encoding: string; fallbackOnError: boolean }): TextEncodingResult {
    let decoder: TextDecoder;
    
    try {
      // 对于GB2312和GBK，使用更容错的方式
      if (strategy.encoding === 'GBK' || strategy.encoding === 'GB2312') {
        // 尝试使用GBK编码，如果失败则使用UTF-8
        try {
          decoder = new TextDecoder('GBK', { fatal: !strategy.fallbackOnError });
        } catch {
          decoder = new TextDecoder('UTF-8', { fatal: false });
        }
      } else {
        decoder = new TextDecoder(strategy.encoding, { fatal: !strategy.fallbackOnError });
      }
      
      const content = decoder.decode(bytes);
      const confidence = this.calculateConfidence(content, strategy.encoding);
      
      return { content, encoding: strategy.encoding, confidence };
    } catch (error) {
      if (strategy.fallbackOnError) {
        // fallback到UTF-8
        const fallbackDecoder = new TextDecoder('UTF-8', { fatal: false });
        const content = fallbackDecoder.decode(bytes);
        return { 
          content, 
          encoding: 'UTF-8 (fallback)', 
          confidence: 0.3 
        };
      }
      throw error;
    }
  }
  
  private static fallbackDecode(bytes: Uint8Array): TextEncodingResult {
    // 简单的字符编码检测和处理
    let content = '';
    
    for (let i = 0; i < bytes.length; i++) {
      const byte = bytes[i];
      
      if (byte < 128) {
        // ASCII字符
        content += String.fromCharCode(byte);
      } else if (byte >= 0xA1 && byte <= 0xFE && i + 1 < bytes.length) {
        // 可能是GB2312/GBK编码的双字节字符
        const nextByte = bytes[i + 1];
        if (nextByte >= 0xA1 && nextByte <= 0xFE) {
          // 尝试解码为中文字符
          const char = this.decodeGB2312Char(byte, nextByte);
          content += char || '?';
          i++; // 跳过下一个字节
        } else {
          content += '?';
        }
      } else {
        content += '?';
      }
    }
    
    return {
      content,
      encoding: 'GB2312 (manual decode)',
      confidence: 0.5
    };
  }
  
  private static decodeGB2312Char(byte1: number, byte2: number): string {
    // 简单的GB2312字符解码（仅作为fallback）
    try {
      // 这里可以实现更复杂的GB2312解码逻辑
      // 目前简单返回一个占位符
      const codePoint = ((byte1 - 0xA1) * 94) + (byte2 - 0xA1);
      if (codePoint >= 0 && codePoint < 6763) {
        // 这里应该有一个GB2312到Unicode的映射表
        // 但由于复杂性，这里只返回一个通用字符
        return String.fromCharCode(0x4E00 + (codePoint % 0x9FFF));
      }
    } catch {
      // 忽略错误
    }
    return '?';
  }
  
  private static calculateConfidence(content: string, encoding: string): number {
    let score = 0;
    
    const invalidChars = /[\uFFFD\u0000-\u0008\u000B\u000C\u000E-\u001F]/g;
    const invalidCount = (content.match(invalidChars) || []).length;
    
    if (invalidCount === 0) {
      score += 0.5;
    } else {
      score -= invalidCount / content.length;
    }
    
    const chineseChars = /[\u4e00-\u9fff]/g;
    const chineseCount = (content.match(chineseChars) || []).length;
    const chineseRatio = chineseCount / content.length;
    
    if (chineseRatio > 0.1) {
      score += 0.3;
    }
    
    if (encoding === 'UTF-8') {
      score += 0.1;
    }
    
    return Math.max(0, Math.min(1, score));
  }
  
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
