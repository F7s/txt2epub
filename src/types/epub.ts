export interface EpubMetadata {
  title: string;
  author: string;
  language: string;
  identifier: string;
  publisher?: string;
  description?: string;
  subject?: string;
  date?: string;
  rights?: string;
  cover?: File; // 添加封面图片支持
}

export interface EpubSettings {
  // 基础排版设置
  fontSize: number;           // 字体大小（px）
  fontFamily: string;         // 字体系列
  lineHeight: string;         // 行高（1.5rem格式）
  textAlign: 'left' | 'center' | 'right' | 'justify'; // 文本对齐
  indent: number;             // 段落缩进字数（default: 2）
  margin: number;             // 页边距（px）
  
  // 标题设置
  titleAlign: 'left' | 'center' | 'right';  // 标题对齐方式（default: center）
  paragraphSpacing: string;   // 段落间距（bottom: default 1em）
  
  // 高级设置
  maxTitleLength: number;     // 标题最大字数（default 35）
  unknownTitle: string;       // 未知章节名称（default: "章节正文"）
  customFont?: File;          // 自定义嵌入字体文件
  
  // 章节识别设置
  chapterMatch?: string;      // 章节匹配正则表达式
  volumeMatch: string;        // 卷匹配规则（default: "^第[0-9一二三四五六七八九十零〇百千两 ]+[卷部]"）
  exclusionPattern?: string;  // 排除无效章节/卷的正则表达式
  
  // 语言设置
  language: string;           // 书籍语言（default: "zh-CN"）
}

export interface ChapterInfo {
  title: string;
  content: string;
  level: number; // 章节层级，0为卷，1为章节
  id: string;
  order: number;
}

export interface VolumeInfo {
  title: string;
  chapters: ChapterInfo[];
  id: string;
}

export interface TextEncodingResult {
  content: string;
  encoding: string;
  confidence: number;
}

export interface ChapterPattern {
  pattern: RegExp;
  description: string;
  priority: number;
}

export interface ConversionHistory {
  id: string;
  fileName: string;
  originalSize: number;
  convertedSize: number;
  timestamp: Date;
  metadata: EpubMetadata;
  settings: EpubSettings;
  status: 'success' | 'error';
  errorMessage?: string;
}

export interface ConversionProgress {
  stage: 'parsing' | 'processing' | 'generating';
  progress: number;
  message: string;
}
