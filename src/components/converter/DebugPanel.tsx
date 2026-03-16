import { Button } from '@/components/ui/button';

interface DebugPanelProps {
  logs: string[];
  onClear: () => void;
}

export default function DebugPanel({ logs, onClear }: DebugPanelProps) {
  return (
    <div className="fixed right-3 top-20 md:right-4 md:top-auto md:bottom-4 z-30 w-[min(88vw,360px)] rounded-md border bg-background/95 backdrop-blur-sm shadow-lg">
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <span className="text-xs font-semibold">转换日志</span>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-7 px-2 text-xs"
          onClick={onClear}
        >
          清空
        </Button>
      </div>
      <div className="px-3 py-2 max-h-48 overflow-y-auto text-xs leading-5 font-mono">
        {logs.length === 0 ? (
          <div className="text-muted-foreground">暂无日志，点击“开始转换”后会显示过程。</div>
        ) : (
          logs.map((line, idx) => (
            <div key={`${idx}-${line}`} className="break-all">
              {line}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
