import { ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FileSummaryProps {
  selectedFile: File | null;
  fileContent: string;
  chapterCount: number;
  showContentPreview: boolean;
  onTogglePreview: () => void;
  formatFileSize: (bytes: number) => string;
}

export default function FileSummary({
  selectedFile,
  fileContent,
  chapterCount,
  showContentPreview,
  onTogglePreview,
  formatFileSize,
}: FileSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>文件信息</span>
          </span>
          {fileContent && (
            <Button variant="ghost" size="sm" onClick={onTogglePreview}>
              {showContentPreview ? <ChevronUp className="h-4 w-4 mr-1" /> : <ChevronDown className="h-4 w-4 mr-1" />}
              {showContentPreview ? '收起预览' : '展开预览'}
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-muted-foreground">文件名：</span>
            <span className="font-medium break-all">{selectedFile?.name ?? ''}</span>
          </div>
          <div>
            <span className="text-muted-foreground">文件大小：</span>
            <span className="font-medium">{formatFileSize(selectedFile?.size ?? 0)}</span>
          </div>
          <div>
            <span className="text-muted-foreground">字符数：</span>
            <span className="font-medium">{fileContent.length.toLocaleString()}</span>
          </div>
          {chapterCount > 0 && (
            <div>
              <span className="text-muted-foreground">检测章节：</span>
              <Badge variant="secondary">{chapterCount} 章</Badge>
            </div>
          )}
        </div>

        {fileContent && showContentPreview && (
          <div>
            <h4 className="font-medium mb-2">内容预览</h4>
            <div className="p-3 bg-muted/50 rounded text-sm max-h-40 overflow-y-auto">
              {fileContent.slice(0, 500)}
              {fileContent.length > 500 && '...'}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
