import { AlertCircle, BookOpen, Download, Zap } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ConversionControlProps {
  generatedBlob: Blob | null;
  title: string;
  isConverting: boolean;
  conversionStage: string;
  conversionProgress: number;
  hasFile: boolean;
  needsMetadata: boolean;
  actionMessage: string | null;
  mobile?: boolean;
  onStart: () => void;
  onDownload: () => void;
  onReset: () => void;
  onRetry: () => void;
}

function PrimaryAction({
  generatedBlob,
  title,
  isConverting,
  conversionStage,
  conversionProgress,
  mobile,
  onStart,
  onDownload,
}: Pick<
  ConversionControlProps,
  | 'generatedBlob'
  | 'title'
  | 'isConverting'
  | 'conversionStage'
  | 'conversionProgress'
  | 'mobile'
  | 'onStart'
  | 'onDownload'
>) {
  const handleKeyboardAction = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    action: () => void
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  if (generatedBlob && title) {
    return (
      <button
        type="button"
        onPointerDown={onDownload}
        onKeyDown={(event) => handleKeyboardAction(event, onDownload)}
        className={`inline-flex w-full items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 ${
          mobile ? 'h-11 px-4' : 'h-10 px-8 gap-2'
        }`}
      >
        <Download className="mr-2 h-4 w-4" />
        下载《{title}》
      </button>
    );
  }

  return (
    <button
      type="button"
      onPointerDown={onStart}
      onKeyDown={(event) => handleKeyboardAction(event, onStart)}
      disabled={isConverting}
      className={`inline-flex w-full items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 ${
        mobile ? 'h-11 px-4' : 'h-10 px-8 gap-2'
      }`}
    >
      {isConverting ? (
        mobile ? (
          `${conversionStage} ${conversionProgress}%`
        ) : (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
            转换中...
          </>
        )
      ) : (
        <>
          <BookOpen className="mr-2 h-4 w-4" />
          开始转换
        </>
      )}
    </button>
  );
}

export default function ConversionControl(props: ConversionControlProps) {
  const {
    generatedBlob,
    title,
    isConverting,
    conversionStage,
    conversionProgress,
    hasFile,
    needsMetadata,
    actionMessage,
    mobile,
    onStart,
    onDownload,
    onReset,
    onRetry,
  } = props;

  if (mobile) {
    return (
      <div
        className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur-sm p-3 md:hidden z-40"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <div className="container space-y-2">
          <PrimaryAction
            generatedBlob={generatedBlob}
            title={title}
            isConverting={isConverting}
            conversionStage={conversionStage}
            conversionProgress={conversionProgress}
            mobile
            onStart={onStart}
            onDownload={onDownload}
          />
          <Button type="button" onClick={onReset} variant="ghost" className="w-full h-10" disabled={isConverting}>
            重置
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Zap className="h-5 w-5" />
          <span>转换控制</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
          <PrimaryAction
            generatedBlob={generatedBlob}
            title={title}
            isConverting={isConverting}
            conversionStage={conversionStage}
            conversionProgress={conversionProgress}
            onStart={onStart}
            onDownload={onDownload}
          />
          <Button
            type="button"
            onClick={generatedBlob ? onRetry : onReset}
            variant={generatedBlob ? 'outline' : 'ghost'}
            size="lg"
            disabled={isConverting}
          >
            {generatedBlob ? '重新转换' : '重置'}
          </Button>
        </div>

        {isConverting && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{conversionStage}</span>
              <span>{conversionProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${conversionProgress}%` }}
              />
            </div>
          </div>
        )}

        {!hasFile && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>请先上传TXT文件才能开始转换</AlertDescription>
          </Alert>
        )}

        {needsMetadata && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>请填写完整的书名和作者信息</AlertDescription>
          </Alert>
        )}

        {actionMessage && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{actionMessage}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
