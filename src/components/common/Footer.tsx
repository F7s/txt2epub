import { FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">TXT转EPUB工具</span>
            </div>
            <p className="text-sm text-muted-foreground">
              专业的在线文本格式转换工具，支持将TXT格式文本文件快速转换为符合EPUB3.3标准的电子书格式。
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">功能特色</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 符合EPUB3.3标准</li>
              <li>• 支持中文编码</li>
              <li>• 自动章节识别</li>
              <li>• 自定义排版设置</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">使用场景</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 个人电子书制作</li>
              <li>• 出版社内容转换</li>
              <li>• 内容创作者工具</li>
              <li>• 学术文档处理</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">技术支持</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 批量文件处理</li>
              <li>• 转换历史记录</li>
              <li>• 多种阅读器兼容</li>
              <li>• 云端安全处理</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>2025 TXT转EPUB转换工具</p>
        </div>
      </div>
    </footer>
  );
}