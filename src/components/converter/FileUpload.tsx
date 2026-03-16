import { AlertCircle, FileText, Upload, X } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { EpubErrorHandler } from '@/lib/errorHandler';
import { TextEncodingDetector } from '@/lib/textEncoding';

interface FileUploadProps {
  onFileSelect: (file: File, content: string) => void;
  selectedFile?: File | null;
  onClear?: () => void;
  disabled?: boolean;
}

export default function FileUpload({
  onFileSelect,
  selectedFile,
  onClear,
  disabled,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    // 检查文件类型
    if (!file.name.toLowerCase().endsWith('.txt')) {
      return '请选择TXT格式的文本文件';
    }

    // 检查文件大小 (限制为50MB)
    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
      return '文件大小不能超过50MB';
    }

    return null;
  };

  const readFileContent = async (file: File): Promise<string> => {
    try {
      // 大文件内存优化：对于超过10MB的文件，添加内存使用提示
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > 10) {
        console.log(`📄 大文件检测: ${fileSizeMB.toFixed(2)}MB，开始内存优化处理...`);
      }

      // 使用编码检测器自动检测和解码
      const result = await TextEncodingDetector.detectAndDecode(file);

      if (!result.content || result.content.trim().length === 0) {
        throw new Error('文件内容为空');
      }

      // 修复可能的编码问题
      const fixedContent = TextEncodingDetector.fixEncodingIssues(result.content);

      console.log(`检测到文件编码: ${result.encoding}, 置信度: ${result.confidence.toFixed(2)}`);

      // 如果置信度较低，给出警告
      if (result.confidence < 0.7) {
        console.warn('编码检测置信度较低，可能存在编码问题');
      }

      // 大文件优化：如果文件很大，建议用户考虑分批处理
      if (fileSizeMB > 20) {
        console.warn(`⚠️ 文件较大 (${fileSizeMB.toFixed(2)}MB)，建议考虑分批转换或优化文本结构`);
      }

      return fixedContent;
    } catch (error) {
      const epubError = EpubErrorHandler.handleFileError(error, file.name);
      EpubErrorHandler.logError(epubError);
      throw epubError;
    }
  };

  const handleFile = useCallback(async (file: File) => {
    setError(null);
    
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    // 先立即展示文件信息，提升交互反馈速度
    onFileSelect(file, '');

    try {
      const content = await readFileContent(file);
      onFileSelect(file, content);
    } catch (err) {
      const epubError = err instanceof Error ? err : EpubErrorHandler.wrapError(err, '文件处理');
      setError(epubError.message);
    }
  }, [onFileSelect]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (disabled) return;

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, [handleFile, disabled]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const clearFile = () => {
    setError(null);
    onClear?.();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      <Card 
        className={`border-2 border-dashed transition-all duration-200 ${
          dragActive 
            ? 'border-primary bg-primary/5' 
            : 'border-muted-foreground/25 hover:border-primary/50'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">上传TXT文件</h3>
              <p className="text-muted-foreground">
                拖拽文件到此处，或点击选择文件
              </p>
              <p className="text-sm text-muted-foreground">
                支持UTF-8、GBK、GB2312等编码的TXT文件，最大50MB
              </p>
              <p className="text-xs text-muted-foreground">
                如遇到编码问题，建议先将文件转换为UTF-8编码
              </p>
            </div>
            
            <div className="space-y-2">
              <Button 
                variant="outline" 
                disabled={disabled}
                onClick={() => fileInputRef.current?.click()}
              >
                选择文件
              </Button>
              
              <input
                ref={fileInputRef}
                type="file"
                accept=".txt"
                onChange={handleFileInput}
                className="hidden"
                disabled={disabled}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {selectedFile && !error && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(selectedFile.size)}
                  </p>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFile}
                disabled={disabled}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
