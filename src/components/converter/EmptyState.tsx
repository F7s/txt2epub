interface EmptyStateProps {
  children: React.ReactNode;
}

export default function EmptyState({ children }: EmptyStateProps) {
  return (
    <div className="w-full max-w-3xl space-y-6">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">TXT转EPUB转换器</h1>
        <p className="text-sm md:text-base text-muted-foreground mx-auto max-w-2xl">
          本地处理，不上传文件。请先上传 TXT 文件，系统会自动解析章节并进入编辑流程。
        </p>
      </div>
      {children}
    </div>
  );
}
