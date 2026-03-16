/**
 * 智能书名和作者提取工具
 * 从文件名中智能提取书名和作者信息
 */

export interface BookInfo {
  title: string;
  author: string;
  originalFilename: string;
}

export class BookInfoExtractor {
  /**
   * 从文件名中提取书名和作者
   */
  public static extractBookInfo(filename: string): BookInfo {
    // 移除文件扩展名
    const nameWithoutExt = filename.replace(/\.(txt|epub|pdf|doc|docx)$/i, '');
    
    // 清理常见的无用标识
    const cleanName = this.cleanFilename(nameWithoutExt);
    
    // 尝试各种提取规则
    const extractors = [
      this.extractZhixuanFormat,    // 知轩藏书格式 - 优先级最高
      this.extractWithDash,
      this.extractWithUnderscore,
      this.extractWithParentheses,
      this.extractWithBrackets,
      this.extractWithSpace,
      this.extractWithDot,
      this.extractWithComma,
      this.extractWithColon,
      this.extractWithAt,
      this.extractChinesePattern,
      this.extractEnglishPattern
    ];

    for (const extractor of extractors) {
      const result = extractor(cleanName);
      if (result.title && result.author && result.author !== 'Author') {
        return {
          title: result.title,
          author: result.author,
          originalFilename: filename
        };
      }
    }

    // 如果所有规则都失败，使用整个文件名作为书名
    return {
      title: cleanName || filename,
      author: 'Author',
      originalFilename: filename
    };
  }

  /**
   * 知轩藏书格式: "《书名》（校对版全本）作者：作者名"
   */
  private static extractZhixuanFormat(filename: string): Partial<BookInfo> {
    // 匹配知轩藏书的特殊格式：《书名》（校对版全本）作者：作者名
    const zhixuanPattern = /^《(.+?)》[（(][^）)]*校对版[^）)]*[）)]\s*作者[：:]\s*(.+)$/;
    const match = filename.match(zhixuanPattern);
    
    if (match) {
      return {
        title: match[1].trim(),
        author: match[2].trim()
      };
    }
    return {};
  }

  /**
   * 清理文件名中的无用信息
   */
  private static cleanFilename(filename: string): string {
    return filename
      // 移除常见的下载标识
      .replace(/[\(\[](?:完结|全本|精校|校对|txt|epub|pdf|下载|免费)[\)\]]/gi, '')
      // 移除版本号
      .replace(/v\d+\.\d+/gi, '')
      // 移除日期
      .replace(/\d{4}[-年]\d{1,2}[-月]\d{1,2}[日]?/g, '')
      // 移除网站标识
      .replace(/(?:www\.)?[a-z0-9]+\.(com|cn|net|org)/gi, '')
      // 移除多余的空格和特殊字符
      .replace(/[_\-\s]+/g, ' ')
      .trim();
  }

  /**
   * 使用短横线分隔的格式: "书名-作者"
   */
  private static extractWithDash(filename: string): Partial<BookInfo> {
    const patterns = [
      /^(.+?)\s*[-－—]\s*(.+)$/,           // 书名-作者
      /^(.+?)\s*[-－—]\s*作者[：:]\s*(.+)$/, // 书名-作者：xxx
      /^(.+?)\s*[-－—]\s*著[：:]\s*(.+)$/   // 书名-著：xxx
    ];

    for (const pattern of patterns) {
      const match = filename.match(pattern);
      if (match) {
        return {
          title: match[1].trim(),
          author: match[2].trim()
        };
      }
    }
    return {};
  }

  /**
   * 使用下划线分隔的格式: "书名_作者"
   */
  private static extractWithUnderscore(filename: string): Partial<BookInfo> {
    const match = filename.match(/^(.+?)_(.+)$/);
    if (match) {
      return {
        title: match[1].trim(),
        author: match[2].trim()
      };
    }
    return {};
  }

  /**
   * 使用圆括号的格式: "书名(作者)" 或 "书名（作者）"
   */
  private static extractWithParentheses(filename: string): Partial<BookInfo> {
    const patterns = [
      /^(.+?)\s*[（(](.+?)[）)]\s*$/,           // 书名(作者)
      /^(.+?)\s*[（(]作者[：:](.+?)[）)]\s*$/,  // 书名(作者：xxx)
      /^(.+?)\s*[（(]著[：:](.+?)[）)]\s*$/,    // 书名(著：xxx)
      /^(.+?)\s*[（(]by\s+(.+?)[）)]\s*$/i      // 书名(by Author)
    ];

    for (const pattern of patterns) {
      const match = filename.match(pattern);
      if (match) {
        return {
          title: match[1].trim(),
          author: match[2].trim()
        };
      }
    }
    return {};
  }

  /**
   * 使用方括号的格式: "书名[作者]"
   */
  private static extractWithBrackets(filename: string): Partial<BookInfo> {
    const patterns = [
      /^(.+?)\s*\[(.+?)\]\s*$/,              // 书名[作者]
      /^(.+?)\s*\[作者[：:](.+?)\]\s*$/,     // 书名[作者：xxx]
      /^(.+?)\s*\[著[：:](.+?)\]\s*$/        // 书名[著：xxx]
    ];

    for (const pattern of patterns) {
      const match = filename.match(pattern);
      if (match) {
        return {
          title: match[1].trim(),
          author: match[2].trim()
        };
      }
    }
    return {};
  }

  /**
   * 使用空格分隔的格式: "书名 作者"
   */
  private static extractWithSpace(filename: string): Partial<BookInfo> {
    // 如果有明确的作者标识
    const patterns = [
      /^(.+?)\s+作者[：:]\s*(.+)$/,
      /^(.+?)\s+著[：:]\s*(.+)$/,
      /^(.+?)\s+by\s+(.+)$/i
    ];

    for (const pattern of patterns) {
      const match = filename.match(pattern);
      if (match) {
        return {
          title: match[1].trim(),
          author: match[2].trim()
        };
      }
    }

    // 简单的空格分隔（最后两个词可能是作者）
    const words = filename.split(/\s+/);
    if (words.length >= 3) {
      const author = words.slice(-1).join(' ');
      const title = words.slice(0, -1).join(' ');
      
      // 简单验证：作者名不应该太长
      if (author.length <= 20 && !author.match(/\d{4}/)) {
        return { title, author };
      }
    }
    
    return {};
  }

  /**
   * 使用点分隔的格式: "书名.作者"
   */
  private static extractWithDot(filename: string): Partial<BookInfo> {
    const match = filename.match(/^(.+?)\.(.+)$/);
    if (match && !match[2].match(/^\d+$/)) { // 避免匹配版本号
      return {
        title: match[1].trim(),
        author: match[2].trim()
      };
    }
    return {};
  }

  /**
   * 使用逗号分隔的格式: "书名,作者" 或 "书名，作者"
   */
  private static extractWithComma(filename: string): Partial<BookInfo> {
    const match = filename.match(/^(.+?)[,，]\s*(.+)$/);
    if (match) {
      return {
        title: match[1].trim(),
        author: match[2].trim()
      };
    }
    return {};
  }

  /**
   * 使用冒号分隔的格式: "书名:作者" 或 "书名：作者"
   */
  private static extractWithColon(filename: string): Partial<BookInfo> {
    const match = filename.match(/^(.+?)[：:]\s*(.+)$/);
    if (match) {
      return {
        title: match[1].trim(),
        author: match[2].trim()
      };
    }
    return {};
  }

  /**
   * 使用@符号分隔的格式: "书名@作者"
   */
  private static extractWithAt(filename: string): Partial<BookInfo> {
    const match = filename.match(/^(.+?)@(.+)$/);
    if (match) {
      return {
        title: match[1].trim(),
        author: match[2].trim()
      };
    }
    return {};
  }

  /**
   * 中文模式识别
   */
  private static extractChinesePattern(filename: string): Partial<BookInfo> {
    // 常见中文模式
    const patterns = [
      /^《(.+?)》\s*(.+)$/,                  // 《书名》作者
      /^(.+?)\s*著$/,                        // 书名著 (只有书名)
      /^(.+?)\s*(.{2,4})\s*著$/,            // 书名 作者著
      /^(.+?)\s*作品集$/,                    // 作者作品集
      /^(.+?)\s*全集$/                       // 作者全集
    ];

    for (const pattern of patterns) {
      const match = filename.match(pattern);
      if (match) {
        if (pattern.source.includes('著$')) {
          // 只有书名的情况
          return {
            title: match[1].trim(),
            author: 'Author'
          };
        } else if (pattern.source.includes('作品集') || pattern.source.includes('全集')) {
          // 作者作品集
          return {
            title: match[0],
            author: match[1].trim()
          };
        } else {
          return {
            title: match[1].trim(),
            author: match[2]?.trim() || 'Author'
          };
        }
      }
    }
    return {};
  }

  /**
   * 英文模式识别
   */
  private static extractEnglishPattern(filename: string): Partial<BookInfo> {
    const patterns = [
      /^(.+?)\s+by\s+(.+)$/i,               // Title by Author
      /^(.+?)\s*-\s*(.+)$/,                 // Title - Author
      /^(.+?)\s*\|\s*(.+)$/,                // Title | Author
      /^([A-Z].+?)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)$/  // Title AuthorName
    ];

    for (const pattern of patterns) {
      const match = filename.match(pattern);
      if (match) {
        return {
          title: match[1].trim(),
          author: match[2].trim()
        };
      }
    }
    return {};
  }

  /**
   * 生成优化建议
   */
  public static getExtractionSuggestions(filename: string): string[] {
    const suggestions: string[] = [];
    
    if (filename.includes('-')) {
      suggestions.push('建议使用格式："书名-作者"');
    }
    
    if (filename.includes('(') || filename.includes('（')) {
      suggestions.push('建议使用格式："书名(作者)"');
    }
    
    if (!filename.includes(' ') && !filename.includes('-') && !filename.includes('_')) {
      suggestions.push('建议在书名和作者之间添加分隔符，如空格、短横线或下划线');
    }
    
    if (filename.match(/\d{4}/)) {
      suggestions.push('文件名包含数字，请确认是否为年份或版本号');
    }
    
    return suggestions;
  }

  /**
   * 验证提取结果的质量
   */
  public static validateExtraction(bookInfo: BookInfo): {
    quality: 'high' | 'medium' | 'low';
    issues: string[];
  } {
    const issues: string[] = [];
    let quality: 'high' | 'medium' | 'low' = 'high';

    // 检查作者是否为默认值
    if (bookInfo.author === 'Author') {
      issues.push('未能识别作者信息');
      quality = 'low';
    }

    // 检查书名长度
    if (bookInfo.title.length > 50) {
      issues.push('书名可能过长，建议检查');
      quality = quality === 'high' ? 'medium' : quality;
    }

    // 检查是否包含文件标识
    if (bookInfo.title.match(/\.(txt|epub|pdf)$/i)) {
      issues.push('书名包含文件扩展名');
      quality = 'medium';
    }

    // 检查是否包含特殊字符
    if (bookInfo.title.match(/[_\-]{2,}/)) {
      issues.push('书名包含多余的特殊字符');
      quality = quality === 'high' ? 'medium' : quality;
    }

    return { quality, issues };
  }
}