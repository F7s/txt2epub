/**
 * EPUB元数据验证工具
 * 按照EPUB3.3规范验证和处理元数据
 */

import type { EpubMetadata } from '@/types/epub';
import { generateEpubIdentifier } from './uuid';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export class EpubMetadataValidator {
  
  /**
   * 验证EPUB元数据
   */
  public static validate(metadata: EpubMetadata): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    
    // 必填字段验证
    if (!metadata.title || metadata.title.trim().length === 0) {
      errors.push('书名是必填项');
    }
    
    if (!metadata.author || metadata.author.trim().length === 0) {
      errors.push('作者是必填项');
    }
    
    if (!metadata.language || metadata.language.trim().length === 0) {
      errors.push('语言是必填项');
    }
    
    if (!metadata.identifier || metadata.identifier.trim().length === 0) {
      errors.push('唯一标识符是必填项');
    }
    
    // 字段长度验证
    if (metadata.title && metadata.title.length > 255) {
      warnings.push('书名过长，建议不超过255个字符');
    }
    
    if (metadata.author && metadata.author.length > 255) {
      warnings.push('作者名过长，建议不超过255个字符');
    }
    
    if (metadata.description && metadata.description.length > 2000) {
      warnings.push('描述过长，建议不超过2000个字符');
    }
    
    // 语言代码验证
    if (metadata.language && !this.isValidLanguageCode(metadata.language)) {
      warnings.push('语言代码格式可能不正确，建议使用标准ISO 639语言代码');
    }
    
    // 日期格式验证
    if (metadata.date && !this.isValidDate(metadata.date)) {
      warnings.push('日期格式不正确，应使用YYYY-MM-DD格式');
    }
    
    // 标识符格式验证
    if (metadata.identifier && !this.isValidIdentifier(metadata.identifier)) {
      warnings.push('标识符格式建议使用UUID或ISBN格式');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }
  
  /**
   * 规范化元数据
   */
  public static normalize(metadata: EpubMetadata): EpubMetadata {
    const normalized = { ...metadata };
    
    // 清理空白字符
    if (normalized.title) {
      normalized.title = normalized.title.trim();
    }
    
    if (normalized.author) {
      normalized.author = normalized.author.trim();
    }
    
    if (normalized.publisher) {
      normalized.publisher = normalized.publisher.trim();
    }
    
    if (normalized.description) {
      normalized.description = normalized.description.trim();
    }
    
    if (normalized.subject) {
      normalized.subject = normalized.subject.trim();
    }
    
    if (normalized.rights) {
      normalized.rights = normalized.rights.trim();
    }
    
    // 规范化语言代码
    if (normalized.language) {
      normalized.language = this.normalizeLanguageCode(normalized.language);
    }
    
    // 规范化日期格式
    if (normalized.date) {
      normalized.date = this.normalizeDate(normalized.date);
    }
    
    // 确保标识符存在
    if (!normalized.identifier) {
      normalized.identifier = generateEpubIdentifier();
    }
    
    return normalized;
  }
  
  /**
   * 生成默认元数据
   */
  public static generateDefaults(baseTitle?: string): EpubMetadata {
    const now = new Date();
    const dateString = now.toISOString().split('T')[0];
    
    return {
      title: baseTitle || '未命名书籍',
      author: '未知作者',
      language: 'zh-CN',
      identifier: generateEpubIdentifier(),
      date: dateString,
      publisher: '',
      description: '',
      subject: '',
      rights: ''
    };
  }
  
  /**
   * 验证语言代码
   */
  private static isValidLanguageCode(code: string): boolean {
    // 简单的语言代码验证（ISO 639-1 和 BCP 47）
    const languagePattern = /^[a-z]{2,3}(-[A-Z]{2,3})*$/;
    return languagePattern.test(code);
  }
  
  /**
   * 验证日期格式
   */
  private static isValidDate(date: string): boolean {
    // YYYY-MM-DD 格式
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      return false;
    }
    
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime());
  }
  
  /**
   * 验证标识符格式
   */
  private static isValidIdentifier(identifier: string): boolean {
    // UUID格式
    const uuidPattern = /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    
    // ISBN格式
    const isbnPattern = /^(isbn:)?(97[89])?\d{9}[\dxX]$/i;
    
    // DOI格式
    const doiPattern = /^doi:10\.\d+\/.+$/i;
    
    return uuidPattern.test(identifier) || 
           isbnPattern.test(identifier) || 
           doiPattern.test(identifier) ||
           identifier.startsWith('urn:') ||
           identifier.startsWith('http://') ||
           identifier.startsWith('https://');
  }
  
  /**
   * 规范化语言代码
   */
  private static normalizeLanguageCode(code: string): string {
    const normalized = code.toLowerCase().trim();
    
    // 常见语言代码映射
    const languageMap: Record<string, string> = {
      'zh': 'zh-CN',
      'chinese': 'zh-CN',
      '中文': 'zh-CN',
      'en': 'en-US',
      'english': 'en-US',
      '英文': 'en-US',
      'ja': 'ja-JP',
      'japanese': 'ja-JP',
      '日文': 'ja-JP',
      'fr': 'fr-FR',
      'french': 'fr-FR',
      '法文': 'fr-FR',
      'de': 'de-DE',
      'german': 'de-DE',
      '德文': 'de-DE'
    };
    
    return languageMap[normalized] || normalized;
  }
  
  /**
   * 规范化日期格式
   */
  private static normalizeDate(date: string): string {
    try {
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate.toISOString().split('T')[0];
      }
    } catch (error) {
      // 解析失败，返回当前日期
    }
    
    return new Date().toISOString().split('T')[0];
  }
}