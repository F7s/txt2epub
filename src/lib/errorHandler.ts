/**
 * EPUB转换错误处理类
 */

export enum EpubErrorType {
  FILE_READING_ERROR = 'FILE_READING_ERROR',
  ENCODING_ERROR = 'ENCODING_ERROR',
  PARSING_ERROR = 'PARSING_ERROR',
  METADATA_ERROR = 'METADATA_ERROR',
  GENERATION_ERROR = 'GENERATION_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

export interface EpubErrorInfo {
  type: EpubErrorType;
  message: string;
  details?: string;
  suggestions?: string[];
  fileName?: string;
  stage?: string;
}

export class EpubError extends Error {
  public readonly type: EpubErrorType;
  public readonly details?: string;
  public readonly suggestions: string[];
  public readonly fileName?: string;
  public readonly stage?: string;

  constructor(info: EpubErrorInfo) {
    super(info.message);
    this.name = 'EpubError';
    this.type = info.type;
    this.details = info.details;
    this.suggestions = info.suggestions || [];
    this.fileName = info.fileName;
    this.stage = info.stage;
  }

  public toUserMessage(): string {
    let message = this.message;
    
    if (this.fileName) {
      message = `文件 "${this.fileName}": ${message}`;
    }
    
    if (this.stage) {
      message = `${this.stage}阶段: ${message}`;
    }
    
    if (this.suggestions.length > 0) {
      message += '\n\n建议：\n' + this.suggestions.map(s => `• ${s}`).join('\n');
    }
    
    return message;
  }
}

export class EpubErrorHandler {
  
  /**
   * 处理文件读取错误
   */
  public static handleFileError(error: any, fileName?: string): EpubError {
    let message = '文件读取失败';
    const suggestions: string[] = [];
    
    if (error instanceof Error) {
      if (error.message.includes('decode') || error.message.includes('TextDecoder') || error.message.includes('编码')) {
        message = '文件编码格式不支持或文件损坏';
        suggestions.push('请尝试将文件另存为UTF-8编码格式');
        suggestions.push('如果是GB2312或GBK编码，请使用记事本等工具转换为UTF-8');
        suggestions.push('检查文件是否完整，没有损坏');
        suggestions.push('尝试使用其他文本编辑器重新保存文件');
        return new EpubError({
          type: EpubErrorType.ENCODING_ERROR,
          message,
          details: error.message,
          suggestions,
          fileName,
          stage: '文件读取'
        });
      }
      
      if (error.message.includes('size') || error.message.includes('大小')) {
        message = '文件过大';
        suggestions.push('请选择小于50MB的文件');
        suggestions.push('可以将大文件分割成多个小文件');
      } else if (error.message.includes('empty') || error.message.includes('空')) {
        message = '文件内容为空';
        suggestions.push('请检查文件是否包含有效内容');
        suggestions.push('确保文件不是损坏的');
      } else {
        message = error.message || '文件读取失败';
        suggestions.push('请检查文件是否损坏');
        suggestions.push('尝试重新选择文件');
      }
    }
    
    return new EpubError({
      type: EpubErrorType.FILE_READING_ERROR,
      message,
      details: error?.message,
      suggestions,
      fileName,
      stage: '文件读取'
    });
  }
  
  /**
   * 处理文本解析错误
   */
  public static handleParsingError(error: any, fileName?: string): EpubError {
    let message = '文本解析失败';
    const suggestions: string[] = [];
    
    if (error instanceof Error) {
      if (error.message.includes('章节') || error.message.includes('chapter')) {
        message = '章节识别失败';
        suggestions.push('检查文本是否包含明确的章节标题');
        suggestions.push('章节标题应独占一行且字数不超过35个字符');
        suggestions.push('可以手动调整章节标题格式');
      } else if (error.message.includes('格式') || error.message.includes('format')) {
        message = '文本格式错误';
        suggestions.push('确保文本文件格式正确');
        suggestions.push('移除特殊字符或格式标记');
      } else {
        message = error.message || '文本解析失败';
        suggestions.push('检查文本内容是否有效');
        suggestions.push('尝试重新整理文本格式');
      }
    }
    
    return new EpubError({
      type: EpubErrorType.PARSING_ERROR,
      message,
      details: error?.message,
      suggestions,
      fileName,
      stage: '文本解析'
    });
  }
  
  /**
   * 处理元数据验证错误
   */
  public static handleMetadataError(errors: string[], warnings: string[]): EpubError {
    const message = `元数据验证失败：${errors.join(', ')}`;
    const suggestions: string[] = [
      '请检查并填写所有必填的元数据字段',
      '确保书名和作者信息准确无误',
      '检查日期格式是否正确（YYYY-MM-DD）'
    ];
    
    if (warnings.length > 0) {
      suggestions.push('注意警告信息：' + warnings.join(', '));
    }
    
    return new EpubError({
      type: EpubErrorType.METADATA_ERROR,
      message,
      details: `错误：${errors.join('，')}${warnings.length > 0 ? `；警告：${warnings.join('，')}` : ''}`,
      suggestions,
      stage: '元数据验证'
    });
  }
  
  /**
   * 处理EPUB生成错误
   */
  public static handleGenerationError(error: any, stage?: string): EpubError {
    let message = 'EPUB文件生成失败';
    const suggestions: string[] = [];
    
    if (error instanceof Error) {
      if (error.message.includes('memory') || error.message.includes('内存')) {
        message = '内存不足，无法生成EPUB文件';
        suggestions.push('尝试减少文本内容或分割成多个文件');
        suggestions.push('关闭其他占用内存的程序');
      } else if (error.message.includes('zip') || error.message.includes('压缩')) {
        message = 'EPUB文件压缩失败';
        suggestions.push('检查浏览器是否支持文件压缩');
        suggestions.push('尝试刷新页面重新生成');
      } else if (error.message.includes('xml') || error.message.includes('XML')) {
        message = 'EPUB结构文件生成失败';
        suggestions.push('检查文本内容是否包含无效字符');
        suggestions.push('移除特殊符号或格式字符');
      } else {
        message = error.message || 'EPUB文件生成失败';
        suggestions.push('请尝试重新生成');
        suggestions.push('如果问题持续，请刷新页面');
      }
    }
    
    return new EpubError({
      type: EpubErrorType.GENERATION_ERROR,
      message,
      details: error?.message,
      suggestions,
      stage: stage || 'EPUB生成'
    });
  }
  
  /**
   * 包装通用错误
   */
  public static wrapError(error: any, context?: string): EpubError {
    if (error instanceof EpubError) {
      return error;
    }
    
    let message = '发生未知错误';
    const suggestions: string[] = ['请刷新页面重试', '如果问题持续，请联系技术支持'];
    
    if (error instanceof Error) {
      message = error.message || message;
    } else if (typeof error === 'string') {
      message = error;
    }
    
    return new EpubError({
      type: EpubErrorType.UNKNOWN_ERROR,
      message,
      details: error?.stack || String(error),
      suggestions,
      stage: context
    });
  }
  
  /**
   * 记录错误信息
   */
  public static logError(error: EpubError): void {
    console.group(`EPUB错误 [${error.type}]`);
    console.error('消息:', error.message);
    
    if (error.fileName) {
      console.error('文件:', error.fileName);
    }
    
    if (error.stage) {
      console.error('阶段:', error.stage);
    }
    
    if (error.details) {
      console.error('详情:', error.details);
    }
    
    if (error.suggestions.length > 0) {
      console.error('建议:', error.suggestions);
    }
    
    console.groupEnd();
  }
}