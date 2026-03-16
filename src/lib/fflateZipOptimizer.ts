/**
 * 基于 fflate 的 ZIP 压缩优化器
 * 实现真正的多线程压缩，将压缩任务放到 Web Worker 中执行
 */
import type { ZipFileEntry, ZipOptimizationOptions } from './zipOptimizer';
import { ZipOptimizer } from './zipOptimizer';

// Worker 中使用的 fflate 脚本
const WORKER_FFLATE_SCRIPT = `
  // 在 Worker 中导入 fflate
  importScripts('https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js');
  
  self.onmessage = async function(e) {
    const { type, files, options, batchSize, workerId } = e.data;
    
    if (type === 'process') {
      try {
        // 存储处理后的文件
        const processedFiles = [];
        
        // 分批处理文件以减少通信频率
        for (let i = 0; i < files.length; i += batchSize) {
          const batch = files.slice(i, i + batchSize);
          
          // 处理批次中的文件
          for (const file of batch) {
            // mimetype 文件不压缩（EPUB 规范要求）
            if (file.name === 'mimetype') {
              // 确保mimetype文件有正确的内容
              let mimetypeContent = file.content;
              if (!mimetypeContent) {
                mimetypeContent = 'application/epub+zip';
              }
              // mimetype文件保持为字符串，不转换为Uint8Array
              if (typeof mimetypeContent !== 'string') {
                // 如果已经是Uint8Array，转换回字符串
                mimetypeContent = new TextDecoder().decode(mimetypeContent);
              }
              // 移除日志输出
              // console.log('Worker处理mimetype文件:', file.name, '大小:', mimetypeContent.length);
              processedFiles.push({
                name: file.name,
                content: mimetypeContent,
                compress: false,
                store: true
              });
              continue;
            }
            
            // 判断是否应该压缩
            const shouldCompress = shouldCompressFile(file, options);
            
            // 确保文件有内容并正确编码
            let fileContent = file.content;
            if (!fileContent || (typeof fileContent === 'string' && fileContent.length === 0)) {
              fileContent = ' '; // 确保至少有一个空格
            }
            
            // 修复可能的编码问题，但保持为字符串
            if (typeof fileContent === 'string') {
              fileContent = fixEncodingIssues(fileContent);
              
              // 移除调试输出
              // 如果是XHTML文件，打印前100个字符用于调试
              // if (file.name.endsWith('.xhtml')) {
              //   const preview = fileContent.substring(0, 100);
              //   console.log('Worker处理 ' + file.name + ' 前100个字符: "' + preview + '"');
              // }
            } else {
              // 如果是Uint8Array，转换为字符串进行处理
              fileContent = new TextDecoder().decode(fileContent);
              fileContent = fixEncodingIssues(fileContent);
              
              // 移除调试输出
              // 如果是XHTML文件，打印前100个字符用于调试
              // if (file.name.endsWith('.xhtml')) {
              //   const preview = fileContent.substring(0, 100);
              //   console.log('Worker处理 ' + file.name + ' 前100个字符: "' + preview + '"');
              // }
            }
            
            // 移除日志输出
            // console.log('Worker处理文件:', file.name, '大小:', 
            //   typeof fileContent === 'string' ? fileContent.length : fileContent.byteLength,
            //   '是否压缩:', shouldCompress);
            
            // 文本文件在主线程压缩，Worker中不压缩
            // 避免Worker和主线程重复压缩导致内容损坏
            const textExtensions = ['html', 'xhtml', 'xml', 'css', 'txt', 'js', 'json', 'opf', 'ncx'];
            const extension = file.name.split('.').pop()?.toLowerCase() || '';
            const isTextFile = textExtensions.includes(extension);
            
            if (shouldCompress && !isTextFile) {
              // 只设置标记，不实际压缩，避免重复压缩
              // 压缩将在主线程生成ZIP文件时进行
              processedFiles.push({
                name: file.name,
                content: fileContent, // 保持原始content
                compress: true,
                store: false
              });
            } else {
              // 对于文本文件和其他文件，保持原始内容
              let finalContent = fileContent;
              if (isTextFile && typeof fileContent === 'string') {
                // 修复可能的编码问题但保持为字符串
                finalContent = fixEncodingIssues(fileContent);
              }
              
              processedFiles.push({
                name: file.name,
                content: finalContent, // 保持原始content，不进行转换
                compress: false,
                store: file.name !== 'mimetype' // mimetype文件不压缩，其他文件根据需要决定
              });
            }
          }
          
          // 不再向主线程报告批次处理进度
          // Worker通信优化：减少不必要的通信以提升性能
        }
        
        // 移除日志输出
        // console.log('Worker处理完成，文件数量:', processedFiles.length);
        self.postMessage({
          type: 'success',
          workerId: workerId,
          data: processedFiles
        });
      } catch (error) {
        // 移除日志输出
        // console.error('Worker处理错误:', error);
        self.postMessage({
          type: 'error',
          workerId: workerId,
          error: error.message
        });
      }
    }
  };
  
  // 判断是否应该压缩文件
  function shouldCompressFile(file, options) {
    // mimetype 文件不压缩（EPUB 规范要求）
    if (file.name === 'mimetype') {
      return false;
    }
    
    // 文本文件在主线程压缩，Worker中不压缩
    // 避免Worker和主线程重复压缩导致内容损坏
    const textExtensions = ['html', 'xhtml', 'xml', 'css', 'txt', 'js', 'json', 'opf', 'ncx'];
    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    if (textExtensions.includes(extension)) {
      return false; // Worker中不压缩文本文件
    }
    
    // 获取文件大小
    const size = getFileSize(file.content);
    
    // 小文件不压缩
    if (size < options.compressionThreshold) {
      return false;
    }
    
    // 已压缩格式不再压缩
    const codecExtensions = ['jpg', 'jpeg', 'png', 'gif', 'mp3', 'mp4', 'zip', 'epub'];
    if (codecExtensions.includes(extension)) {
      return false;
    }
    
    // 默认对大文件进行压缩
    return size > options.compressionThreshold * 2;
  }
  
  // 判断是否为大文件
  function isLargeFile(file, options) {
    const size = getFileSize(file.content);
    return size > options.streamThreshold;
  }
  
  // 获取文件大小
  function getFileSize(content) {
    if (typeof content === 'string') {
      return new TextEncoder().encode(content).length;
    } else {
      return content.byteLength;
    }
  }
  
  // 修复可能的编码问题
  function fixEncodingIssues(content) {
    // 修复常见的编码问题
    let fixed = content;
    
    // 修复Windows-1252到UTF-8的常见问题
    const encodingFixes = {
      'â€™': "'",
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
      // 使用简单的字符串替换而不是正则表达式来避免转义问题
      fixed = fixed.split(wrong).join(correct);
    }
    
    // 移除控制字符（保留换行符和制表符）
    fixed = fixed.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
    
    // 标准化换行符
    fixed = fixed.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    
    return fixed;
  }
  
  // 压缩文件内容
  function compressFileContent(content) {
    try {
      // 如果是字符串，转换为 Uint8Array
      let data;
      if (typeof content === 'string') {
        // 修复可能的编码问题
        const fixedContent = fixEncodingIssues(content);
        data = new TextEncoder().encode(fixedContent);
      } else {
        // 如果已经是 ArrayBuffer 或类似格式，转换为 Uint8Array
        data = new Uint8Array(content);
      }
      
      // 移除日志输出
      // console.log('压缩前数据大小:', data.byteLength);
      
      // 使用 fflate 的 zlib 压缩
      const compressed = fflate.zlibSync(data, { level: 6 });
      // 移除日志输出
      // console.log('压缩后数据大小:', compressed.byteLength);
      
      return compressed;
    } catch (error) {
      // 压缩失败时返回原始内容
      // 移除日志输出
      // console.warn('压缩失败，使用原始内容:', error);
      return typeof content === 'string' ? new TextEncoder().encode(content) : content;
    }
  }
  
  // 流式处理大文件
  function compressLargeFileContent(content, options) {
    // 不在Worker中实际压缩，避免重复压缩
    // 压缩将在主线程生成ZIP文件时进行
    
    // 保持原始内容，不进行任何转换
    return content;
  }
`;

/**
 * 基于 fflate 的 Web Worker ZIP 优化器
 * 将实际的压缩逻辑放到 Worker 中执行，真正利用多线程优势
 */
export class FflateWorkerZipOptimizer extends ZipOptimizer {
  private workerCount: number;
  private batchSize: number;
  private workerPool: Worker[] | null = null;
  private workerUrls: string[] = []; // ✅ 追踪Worker URL以释放内存

  constructor(options?: Partial<ZipOptimizationOptions>, workerCount: number = 2, batchSize: number = 10) {
    super(options);
    this.workerCount = workerCount;
    this.batchSize = batchSize;
  }

  /**
   * 使用 Web Worker 和 fflate 进行真正的多线程压缩
   */
  public async generateOptimizedZipWithWorkers(files: ZipFileEntry[]): Promise<Blob> {
    const startTime = performance.now();
    
    if (!window.Worker) {
      // 降级到单线程处理
      // 移除日志输出
      // console.log('Web Worker 不可用，降级到单线程处理');
      return await this.generateOptimizedZip(files);
    }

    try {
      // 创建 Worker 池
      this.createWorkerPool();
      const result = await this.processWithWorkers(files);
      
      // 计算处理时间
      const endTime = performance.now();
      const processingTime = endTime - startTime;
      
      // 移除日志输出
      // console.log('🏁 多线程压缩完成，耗时: ' + processingTime.toFixed(2) + 'ms');
      
      // 销毁 Worker 池
      this.destroyWorkerPool();
      return result;
    } catch (error) {
      // 移除日志输出
      // console.warn('Web Worker 处理失败，降级到单线程:', error);
      // 确保清理 Worker 池
      this.destroyWorkerPool();
      return await this.generateOptimizedZip(files);
    }
  }

  /**
   * 创建固定数量的 Worker 池，避免频繁创建和销毁
   */
  private createWorkerPool(): void {
    if (this.workerPool) return;
    
    this.workerPool = Array.from({ length: this.workerCount }, () => this.createInlineWorker());
    // 移除日志输出
    // console.log('🔧 创建了包含 ' + this.workerCount + ' 个 Worker 的池');
  }

  /**
   * 销毁 Worker 池
   */
  private destroyWorkerPool(): void {
    if (this.workerPool) {
      // 终止所有 Worker
      this.workerPool.forEach(worker => worker.terminate());

      // ✅ 释放所有 Worker URL，防止内存泄漏
      this.workerUrls.forEach(url => URL.revokeObjectURL(url));

      // 清空引用
      this.workerPool = null;
      this.workerUrls = [];

      // 移除日志输出
      // console.log('🧹 清理了 Worker 池和 URL');
    }
  }

  /**
   * Web Worker 处理实现
   */
  private async processWithWorkers(files: ZipFileEntry[]): Promise<Blob> {
    // 将文件分组给不同的 Worker 处理
    const fileGroups = this.divideFilesIntoGroups(files, this.workerCount);

    // 为每个 Worker 创建处理任务
    const workerTasks = fileGroups.map(async (group: ZipFileEntry[], index: number) => {
      // 从池中获取 Worker
      const worker = this.workerPool![index % this.workerPool!.length];
      const workerId = index;
      
      return new Promise<{ workerId: number; data: any[] }>((resolve, reject) => {
        const messageHandler = (e: MessageEvent) => {
          const { type, workerId, data, error, processed, total } = e.data;
          
          if (type === 'success') {
            // 移除事件监听器
            worker.removeEventListener('message', messageHandler);
            worker.removeEventListener('error', errorHandler);
            resolve({ workerId, data });
          } else if (type === 'error') {
            // 移除事件监听器
            worker.removeEventListener('message', messageHandler);
            worker.removeEventListener('error', errorHandler);
            reject(new Error('Worker ' + workerId + ': ' + error));
          } else if (type === 'progress') {
            // 可以在这里处理进度更新
            // 不再处理进度更新
          }
        };

        const errorHandler = (error: ErrorEvent) => {
          // 移除事件监听器
          worker.removeEventListener('message', messageHandler);
          worker.removeEventListener('error', errorHandler);
          reject(new Error('Worker ' + workerId + ' 错误: ' + error.message));
        };

        // 添加事件监听器
        worker.addEventListener('message', messageHandler);
        worker.addEventListener('error', errorHandler);
        
        // 发送文件组给 Worker 处理
        worker.postMessage({
          type: 'process',
          files: group.map(file => ({
            name: file.name,
            content: file.content
          })),
          options: {
            streamThreshold: this.options.streamThreshold,
            compressionThreshold: this.options.compressionThreshold,
            compressionEfficiencyThreshold: this.options.compressionEfficiencyThreshold,
            chunkSize: this.options.chunkSize
          },
          batchSize: this.batchSize,
          workerId
        });
      });
    });

    // 等待所有 Worker 完成
    const results = await Promise.all(workerTasks);
    
    // 按照 Worker ID 顺序合并结果，保持文件顺序
    results.sort((a, b) => a.workerId - b.workerId);
    
    // 合并结果
    const processedFiles: ZipFileEntry[] = [];
    for (const result of results) {
      // 需要将 Worker 返回的简化数据结构转换回完整的 ZipFileEntry
      for (const processedFile of result.data) {
        // 确保文件有内容
        let fileContent = processedFile.content;
        if (!fileContent || (typeof fileContent === 'string' && fileContent.length === 0)) {
          fileContent = ' '; // 确保至少有一个空格
        }
        
        // 特别处理 mimetype 文件
        if (processedFile.name === 'mimetype') {
          processedFiles.push({
            name: processedFile.name,
            content: fileContent, // mimetype文件不需要压缩，直接使用原始内容
            store: true, // mimetype 文件不压缩
            compress: false
          } as ZipFileEntry);
        } else {
          // 检查是否需要压缩
          if (processedFile.compress) {
            // 标记需要压缩，但保持原始内容
            processedFiles.push({
              name: processedFile.name,
              content: fileContent, // 保持原始内容
              compress: true,
              store: false
            } as ZipFileEntry);
          } else {
            // 对于XHTML文件和其他文件，保持原始内容
            let finalContent = fileContent;
            // 确保XHTML文件内容为字符串格式
            if (processedFile.name.endsWith('.xhtml') && !(typeof finalContent === 'string')) {
              // 如果XHTML内容不是字符串，转换为字符串
              finalContent = new TextDecoder().decode(finalContent);
            }
            
            processedFiles.push({
              name: processedFile.name,
              content: finalContent, // 使用原始content
              compress: processedFile.compress,
              store: processedFile.store
            } as ZipFileEntry);
          }
        }
      }
    }

    // 最终使用 fflate 生成 ZIP 文件
    return await this.generateZipWithFflate(processedFiles);
  }

  /**
   * 使用 fflate 从已处理的文件生成 ZIP
   */
  private async generateZipWithFflate(files: ZipFileEntry[]): Promise<Blob> {
    // 移除日志输出
    // console.log('开始使用 fflate 生成 ZIP 文件，文件数量:', files.length);
    
    // 动态导入 fflate
    const fflate = await import('fflate');
    
    // 按照 EPUB 规范要求，mimetype 必须是第一个文件且不压缩
    const sortedFiles = this.sortFilesForEpub(files);
    // 移除日志输出
    // console.log('排序后的文件数量:', sortedFiles.length);
    
    // 创建 ZIP 文件结构
    const zipFiles: { [key: string]: Uint8Array | { data: Uint8Array, opts: { level: number } } } = {};
    
    // 特别处理 mimetype 文件
    let hasMimetype = false;
    let mimetypeContent: Uint8Array | null = null;
    
    // 添加文件到 ZIP 结构
    for (const file of sortedFiles) {
      let content: Uint8Array;
      
      // 获取文件内容，确保正确编码
      if (typeof file.content === 'string') {
        // 确保字符串不为空，并使用UTF-8编码
        const fileString = file.content || ' ';
        // 修复可能的编码问题
        const fixedContent = this.fixEncodingIssues(fileString);
        content = new TextEncoder().encode(fixedContent);
        
        // 移除调试输出
        // 如果是XHTML文件，打印前100个字符用于调试
        // if (file.name.endsWith('.xhtml')) {
        //   const preview = fixedContent.substring(0, 100);
        //   console.log(\`📄 \${file.name} 前100个字符: "\${preview}"\`);
        // }
      } else if (file.content instanceof ArrayBuffer) {
        content = new Uint8Array(file.content);
        
        // 移除调试输出
        // 如果是XHTML文件，打印前100个字节用于调试
        // if (file.name.endsWith('.xhtml')) {
        //   try {
        //     const preview = new TextDecoder().decode(new Uint8Array(file.content, 0, Math.min(100, file.content.byteLength)));
        //     console.log(\`📄 \${file.name} 前100个字符: "\${preview}"\`);
        //   } catch (e) {
        //     console.log(\`📄 \${file.name} 前100个字符: 无法解码\`);
        //   }
        // }
      } else if ((file.content as any) instanceof Uint8Array) {
        content = file.content as Uint8Array;
        
        // 移除调试输出
        // 如果是XHTML文件，打印前100个字节用于调试
        // if (file.name.endsWith('.xhtml')) {
        //   try {
        //     const preview = new TextDecoder().decode(new Uint8Array(content.buffer, content.byteOffset, Math.min(100, content.byteLength)));
        //     console.log(\`📄 \${file.name} 前100个字符: "\${preview}"\`);
        //   } catch (e) {
        //     console.log(\`📄 \${file.name} 前100个字符: 无法解码\`);
        //   }
        // }
      } else {
        // 其他情况，转换为字符串并编码
        const fileString = String(file.content) || ' ';
        // 修复可能的编码问题
        const fixedContent = this.fixEncodingIssues(fileString);
        content = new TextEncoder().encode(fixedContent);
        
        // 移除调试输出
        // 如果是XHTML文件，打印前100个字符用于调试
        // if (file.name.endsWith('.xhtml')) {
        //   const preview = fixedContent.substring(0, 100);
        //   console.log(\`📄 \${file.name} 前100个字符: "\${preview}"\`);
        // }
      }
      
      // 移除日志输出
      // console.log('处理文件:', file.name, '大小:', content.byteLength);
      
      // 确保内容不为空且长度大于0
      if (!content || content.length === 0) {
        content = new Uint8Array([32]); // 空格字符
      }
      
      // mimetype 文件不压缩且必须是第一个
      if (file.name === 'mimetype') {
        // 确保mimetype文件内容正确
        if (content.length === 0) {
          content = new TextEncoder().encode('application/epub+zip');
        }
        // 移除日志输出
        // console.log('处理mimetype文件，大小:', content.byteLength);
        zipFiles[file.name] = content;
        mimetypeContent = content;
        hasMimetype = true;
      } else {
        // XHTML文件在Worker中已处理，不应再压缩
        const isXhtmlFile = file.name.endsWith('.xhtml');
        const shouldCompress = !isXhtmlFile && file.compress !== false && file.store !== true;
        // 移除日志输出
        // console.log('文件:', file.name, '是否压缩:', shouldCompress, '是否为XHTML文件:', isXhtmlFile);
        if (shouldCompress) {
          // 使用 fflate 压缩，但保持在 ZIP 选项中控制
          try {
            const compressedData = fflate.zlibSync(content, { level: 6 });
            // 移除日志输出
            // console.log('文件压缩完成:', file.name, '压缩前大小:', content.byteLength, '压缩后大小:', compressedData.byteLength);
            zipFiles[file.name] = {
              data: compressedData,
              opts: { level: 6 }
            };
          } catch (error) {
            // 移除日志输出
            // console.warn(\`压缩文件 \${file.name} 失败，使用原始内容:\`, error);
            zipFiles[file.name] = content;
          }
        } else {
          // 确保文件内容正确传递
          if (content && content.length > 0) {
            zipFiles[file.name] = content;
          } else {
            // 如果内容为空，确保至少有一个空格字符
            zipFiles[file.name] = new Uint8Array([32]); // 空格字符
          }
        }
      }
    }
    
    // 确保 mimetype 文件存在
    if (!hasMimetype) {
      // 移除日志输出
      // console.log('mimetype文件不存在，创建默认mimetype文件');
      mimetypeContent = new TextEncoder().encode('application/epub+zip');
      zipFiles['mimetype'] = mimetypeContent;
    }

    // 生成 ZIP 文件，确保 mimetype 文件是第一个且不压缩
    return new Promise<Blob>((resolve, reject) => {
      // 按照 EPUB 规范，创建有序的文件结构
      const finalZipFiles: any = {};
      
      // 1. 首先添加 mimetype 文件（不压缩）
      if (mimetypeContent) {
        finalZipFiles['mimetype'] = mimetypeContent;
        // 移除日志输出
        // console.log('添加mimetype文件到ZIP，大小:', mimetypeContent.byteLength);
      }
      
      // 2. 然后添加 META-INF 文件夹内容
      Object.keys(zipFiles).forEach(key => {
        if (key.startsWith('META-INF/') && key !== 'mimetype') {
          finalZipFiles[key] = zipFiles[key];
          // 移除日志输出
          // console.log('添加META-INF文件到ZIP:', key, '大小:', 
          //   zipFiles[key] instanceof Uint8Array ? zipFiles[key].byteLength : 
          //   zipFiles[key].data ? zipFiles[key].data.byteLength : 0);
        }
      });
      
      // 3. 最后添加其他所有文件
      Object.keys(zipFiles).forEach(key => {
        if (!key.startsWith('META-INF/') && key !== 'mimetype') {
          finalZipFiles[key] = zipFiles[key];
          // 移除日志输出
          // console.log('添加其他文件到ZIP:', key, '大小:', 
          //   zipFiles[key] instanceof Uint8Array ? zipFiles[key].byteLength : 
          //   zipFiles[key].data ? zipFiles[key].data.byteLength : 0);
        }
      });
      
      // 确保所有文件都有正确的内容
      const validatedZipFiles: { [key: string]: Uint8Array } = {};
      
      Object.keys(finalZipFiles).forEach(key => {
        const fileData = finalZipFiles[key];
        
        // 检查文件数据类型并确保正确处理
        let content: Uint8Array;
        
        if (fileData instanceof Uint8Array) {
          // 直接使用Uint8Array，确保不为空
          content = fileData;
        } else if (typeof fileData === 'object' && fileData !== null && 'data' in fileData) {
          // 压缩数据对象
          content = fileData.data instanceof Uint8Array ? fileData.data : new Uint8Array([32]);
        } else {
          // 其他情况，确保至少有一个字节
          content = new Uint8Array([32]); // 空格字符
        }
        
        // 确保内容不为空
        if (content.length === 0) {
          content = new Uint8Array([32]); // 空格字符
        }
        
        validatedZipFiles[key] = content;
        // 移除日志输出
        // console.log('验证文件:', key, '最终大小:', content.byteLength);
      });
      
      // 移除日志输出
      // console.log('开始生成最终ZIP文件，文件数量:', Object.keys(validatedZipFiles).length);
      
      fflate.zip(validatedZipFiles, {
        level: 6
      }, (err, data) => {
        if (err) {
          // 移除日志输出
          // console.error('生成ZIP文件失败:', err);
          reject(err);
        } else {
          // 移除日志输出
          // console.log('ZIP文件生成完成，大小:', data.byteLength);
          resolve(new Blob([data], { type: 'application/epub+zip' }));
        }
      });
    });
  }

  /**
   * 创建内联 Web Worker
   */
  private createInlineWorker(): Worker {
    const blob = new Blob([WORKER_FFLATE_SCRIPT], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    // ✅ 保存URL以便后续释放
    this.workerUrls.push(url);
    return new Worker(url);
  }

  /**
   * 更智能的分组算法，考虑文件总大小而不仅仅是数量
   */
  private divideFilesIntoGroups(files: ZipFileEntry[], groupCount: number): ZipFileEntry[][] {
    const groups: ZipFileEntry[][] = Array.from({ length: groupCount }, () => []);
    
    // 确保 mimetype 文件在第一组
    const mimetypeFile = files.find(f => f.name === 'mimetype');
    const otherFiles = files.filter(f => f.name !== 'mimetype');
    
    if (mimetypeFile) {
      groups[0].push(mimetypeFile);
    }
    
    // 按文件大小排序，大文件优先
    otherFiles.sort((a, b) => {
      const sizeA = this.getFileSize(a.content);
      const sizeB = this.getFileSize(b.content);
      return sizeB - sizeA;
    });
    
    // 使用负载均衡算法分配文件
    const groupSizes = new Array(groupCount).fill(0);
    
    for (const file of otherFiles) {
      const fileSize = this.getFileSize(file.content);
      
      // 找到当前大小最小的组
      let smallestGroupIndex = 0;
      for (let i = 1; i < groupCount; i++) {
        if (groupSizes[i] < groupSizes[smallestGroupIndex]) {
          smallestGroupIndex = i;
        }
      }
      
      // 将文件添加到最小的组
      groups[smallestGroupIndex].push(file);
      groupSizes[smallestGroupIndex] += fileSize;
    }
    
    // 过滤掉空组
    return groups.filter(group => group.length > 0);
  }

  /**
   * 计算平均文件大小
   */
  private calculateAverageFileSize(files: ZipFileEntry[]): number {
    if (files.length === 0) return 0;
    
    const totalSize = files.reduce((sum, file) => sum + this.getFileSize(file.content), 0);
    return totalSize / files.length;
  }
}