import { CheckCircle, Download, FileText, Loader2, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { ConversionProgress as ConversionProgressType } from '@/types/epub';

interface ConversionProgressProps {
  progress: ConversionProgressType;
  generatedBlob?: Blob | null;
  bookTitle?: string;
  onDownload?: () => void;
}

export default function ConversionProgress({ progress, generatedBlob, bookTitle, onDownload }: ConversionProgressProps) {
  const getStageIcon = (stage: string, currentStage: string) => {
    const isActive = stage === currentStage;
    const isCompleted = getStageOrder(stage) < getStageOrder(currentStage);
    
    if (isCompleted) {
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    }
    
    if (isActive) {
      return <Loader2 className="h-6 w-6 text-primary animate-spin" />;
    }
    
    switch (stage) {
      case 'parsing':
        return <FileText className="h-6 w-6 text-muted-foreground" />;
      case 'processing':
        return <Settings className="h-6 w-6 text-muted-foreground" />;
      case 'generating':
        return <Zap className="h-6 w-6 text-muted-foreground" />;
      default:
        return <CheckCircle className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const getStageOrder = (stage: string): number => {
    const stages = ['parsing', 'processing', 'generating'];
    return stages.indexOf(stage);
  };

  const getStageTitle = (stage: string): string => {
    switch (stage) {
      case 'parsing':
        return '解析文本内容';
      case 'processing':
        return '处理章节结构';
      case 'generating':
        return '生成EPUB文件';
      default:
        return '未知阶段';
    }
  };

  const stages = ['parsing', 'processing', 'generating'];

  return (
    <Card>
      <CardHeader>
        <CardTitle>转换进度</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 总体进度条 */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>总体进度</span>
            <span>{Math.round(progress.progress)}%</span>
          </div>
          <Progress value={progress.progress} className="h-2" />
        </div>

        {/* 当前状态信息 */}
        <div className="p-4 bg-muted/50 rounded-lg">
          <p className="text-sm font-medium">{progress.message}</p>
        </div>

        {/* 阶段列表 */}
        <div className="space-y-4">
          {stages.map((stage, index) => {
            const isActive = stage === progress.stage;
            const isCompleted = getStageOrder(stage) < getStageOrder(progress.stage);
            
            return (
              <div
                key={stage}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  isActive 
                    ? 'bg-primary/10 border border-primary/20' 
                    : isCompleted 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-muted/30'
                }`}
              >
                <div className="flex-shrink-0">
                  {getStageIcon(stage, progress.stage)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${
                      isActive 
                        ? 'text-primary' 
                        : isCompleted 
                        ? 'text-green-700' 
                        : 'text-muted-foreground'
                    }`}>
                      {getStageTitle(stage)}
                    </span>
                    
                    <span className="text-xs text-muted-foreground">
                      步骤 {index + 1}/3
                    </span>
                  </div>
                  
                  {isActive && (
                    <div className="mt-1">
                      <Progress 
                        value={progress.progress} 
                        className="h-1" 
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 转换完成时的下载区域 */}
        {progress.stage === 'generating' && progress.progress === 100 && generatedBlob && onDownload && (
          <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg space-y-4">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
            <h3 className="text-lg font-semibold text-green-700">
              转换完成！
            </h3>
            <p className="text-sm text-green-600">
              您的EPUB文件已成功生成，可以下载使用了。
            </p>
            
            {/* 下载按钮 */}
            <div className="pt-2">
              <Button 
                onClick={onDownload}
                size="lg"
                className="w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                下载 {bookTitle || 'EPUB文件'}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}