import { AlertCircle, Zap } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FileUpload from '@/components/converter/FileUpload';
import MetadataForm from '@/components/converter/MetadataForm';
import SettingsForm from '@/components/converter/SettingsForm';
import DebugPanel from '@/components/converter/DebugPanel';
import FileSummary from '@/components/converter/FileSummary';
import ConversionControl from '@/components/converter/ConversionControl';
import type { EpubMetadata, EpubSettings } from '@/types/epub';

interface ConverterWorkspaceProps {
  selectedFile: File | null;
  fileContent: string;
  chapterCount: number;
  showContentPreview: boolean;
  setShowContentPreview: React.Dispatch<React.SetStateAction<boolean>>;
  isConverting: boolean;
  generatedBlob: Blob | null;
  metadata: EpubMetadata;
  settings: EpubSettings;
  needsMetadata: boolean;
  hasFile: boolean;
  actionMessage: string | null;
  debugLogs: string[];
  performanceReport: string | null;
  conversionStage: string;
  conversionProgress: number;
  onClearDebugLogs: () => void;
  onFileSelect: (file: File, content: string) => void;
  onClearFile: () => void;
  onMetadataChange: (metadata: EpubMetadata) => void;
  onSettingsChange: (settings: EpubSettings) => void;
  onStart: () => void;
  onDownload: () => void;
  onReset: () => void;
  onRetry: () => void;
  formatFileSize: (bytes: number) => string;
}

export default function ConverterWorkspace(props: ConverterWorkspaceProps) {
  const {
    selectedFile,
    fileContent,
    chapterCount,
    showContentPreview,
    setShowContentPreview,
    isConverting,
    generatedBlob,
    metadata,
    settings,
    needsMetadata,
    hasFile,
    actionMessage,
    debugLogs,
    performanceReport,
    conversionStage,
    conversionProgress,
    onClearDebugLogs,
    onFileSelect,
    onClearFile,
    onMetadataChange,
    onSettingsChange,
    onStart,
    onDownload,
    onReset,
    onRetry,
    formatFileSize,
  } = props;

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">TXT转EPUB转换器</h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
          本地处理，不上传文件。完成上传后，按“基础信息、排版设置、开始转换”完成导出。
        </p>
        <div className="grid grid-cols-3 gap-2 max-w-xl">
          <div className="rounded-md border px-3 py-2 text-xs md:text-sm bg-muted/40">1. 上传TXT</div>
          <div className="rounded-md border px-3 py-2 text-xs md:text-sm bg-muted/40">2. 编辑信息/样式</div>
          <div className="rounded-md border px-3 py-2 text-xs md:text-sm bg-muted/40">3. 转换并下载</div>
        </div>
      </div>

      {needsMetadata && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>请先补全书名和作者，再开始转换。</AlertDescription>
        </Alert>
      )}

      {actionMessage && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{actionMessage}</AlertDescription>
        </Alert>
      )}

      {import.meta.env.DEV && <DebugPanel logs={debugLogs} onClear={onClearDebugLogs} />}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <section className="space-y-6 xl:col-span-8">
          <FileUpload
            onFileSelect={onFileSelect}
            selectedFile={selectedFile}
            onClear={onClearFile}
            disabled={isConverting}
          />

          <FileSummary
            selectedFile={selectedFile}
            fileContent={fileContent}
            chapterCount={chapterCount}
            showContentPreview={showContentPreview}
            onTogglePreview={() => setShowContentPreview(prev => !prev)}
            formatFileSize={formatFileSize}
          />

          <div className="hidden md:block xl:hidden md:sticky md:top-20">
            <ConversionControl
              generatedBlob={generatedBlob}
              title={metadata.title}
              isConverting={isConverting}
              conversionStage={conversionStage}
              conversionProgress={conversionProgress}
              hasFile={hasFile}
              needsMetadata={needsMetadata}
              actionMessage={actionMessage}
              onStart={onStart}
              onDownload={onDownload}
              onReset={onReset}
              onRetry={onRetry}
            />
          </div>

          <div className="xl:hidden">
            <Tabs defaultValue="metadata" className="w-full">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="metadata">基础信息</TabsTrigger>
                <TabsTrigger value="settings">排版设置</TabsTrigger>
              </TabsList>
              <TabsContent value="metadata" className="mt-4">
                <MetadataForm
                  onMetadataChange={onMetadataChange}
                  initialData={metadata}
                  currentFilename={selectedFile?.name}
                />
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <SettingsForm onSettingsChange={onSettingsChange} initialData={settings} defaultCollapsed={false} />
              </TabsContent>
            </Tabs>
          </div>

          {performanceReport && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>性能分析报告</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm bg-muted/50 p-4 rounded-md overflow-x-auto whitespace-pre-wrap font-mono">
                  {performanceReport}
                </pre>
              </CardContent>
            </Card>
          )}
        </section>

        <aside className="space-y-6 xl:col-span-4">
          <div className="hidden xl:block xl:sticky xl:top-20 space-y-6">
            <ConversionControl
              generatedBlob={generatedBlob}
              title={metadata.title}
              isConverting={isConverting}
              conversionStage={conversionStage}
              conversionProgress={conversionProgress}
              hasFile={hasFile}
              needsMetadata={needsMetadata}
              actionMessage={actionMessage}
              onStart={onStart}
              onDownload={onDownload}
              onReset={onReset}
              onRetry={onRetry}
            />
            <MetadataForm
              onMetadataChange={onMetadataChange}
              initialData={metadata}
              currentFilename={selectedFile?.name}
            />
            <SettingsForm onSettingsChange={onSettingsChange} initialData={settings} />
          </div>
        </aside>
      </div>

      <ConversionControl
        generatedBlob={generatedBlob}
        title={metadata.title}
        isConverting={isConverting}
        conversionStage={conversionStage}
        conversionProgress={conversionProgress}
        hasFile={hasFile}
        needsMetadata={needsMetadata}
        actionMessage={actionMessage}
        mobile
        onStart={onStart}
        onDownload={onDownload}
        onReset={onReset}
        onRetry={onRetry}
      />
    </div>
  );
}
