import { 
  BookOpen, 
  Calendar,
  CheckCircle,
  Download, 
  FileText, 
  Filter,
  History as HistoryIcon, 
  Search, 
  Trash2, 
  User,
  XCircle
} from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { ConversionHistory } from '@/types/epub';

export default function History() {
  const [history, setHistory] = useLocalStorage<ConversionHistory[]>('conversion-history', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'success' | 'error'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'size'>('date');

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredHistory = history
    .filter(item => {
      const matchesSearch = item.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.metadata.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.metadata.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        case 'name':
          return a.fileName.localeCompare(b.fileName);
        case 'size':
          return b.originalSize - a.originalSize;
        default:
          return 0;
      }
    });

  const clearHistory = () => {
    setHistory([]);
    toast.success('历史记录已清空');
  };

  const deleteItem = (id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
    toast.success('记录已删除');
  };

  const downloadAgain = (item: ConversionHistory) => {
    // 这里应该重新生成EPUB文件，但为了简化，我们只显示提示
    toast.info('请重新转换文件以下载EPUB');
  };

  return (
    <div className="container py-8 space-y-8">
      {/* 页面标题 */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold flex items-center justify-center space-x-3">
          <HistoryIcon className="h-8 w-8" />
          <span>转换历史</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          查看您的文件转换历史记录，管理已转换的电子书
        </p>
      </div>

      {/* 统计信息 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary">{history.length}</div>
            <div className="text-sm text-muted-foreground">总转换次数</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600">
              {history.filter(item => item.status === 'success').length}
            </div>
            <div className="text-sm text-muted-foreground">成功转换</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-red-600">
              {history.filter(item => item.status === 'error').length}
            </div>
            <div className="text-sm text-muted-foreground">转换失败</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {formatFileSize(history.reduce((total, item) => total + item.originalSize, 0))}
            </div>
            <div className="text-sm text-muted-foreground">总处理大小</div>
          </CardContent>
        </Card>
      </div>

      {/* 搜索和筛选 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>搜索和筛选</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="搜索文件名、书名或作者..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={(value: 'all' | 'success' | 'error') => setStatusFilter(value)}>
              <SelectTrigger>
                <SelectValue placeholder="状态筛选" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部状态</SelectItem>
                <SelectItem value="success">转换成功</SelectItem>
                <SelectItem value="error">转换失败</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={(value: 'date' | 'name' | 'size') => setSortBy(value)}>
              <SelectTrigger>
                <SelectValue placeholder="排序方式" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">按时间排序</SelectItem>
                <SelectItem value="name">按文件名排序</SelectItem>
                <SelectItem value="size">按文件大小排序</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              onClick={clearHistory}
              disabled={history.length === 0}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              清空历史
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 历史记录列表 */}
      {filteredHistory.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">暂无转换记录</h3>
            <p className="text-muted-foreground">
              {history.length === 0 
                ? '您还没有进行过任何文件转换' 
                : '没有找到符合条件的记录'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredHistory.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-3">
                    {/* 文件信息 */}
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">{item.fileName}</h3>
                        <p className="text-sm text-muted-foreground">
                          {formatFileSize(item.originalSize)} → {formatFileSize(item.convertedSize)}
                        </p>
                      </div>
                      <Badge variant={item.status === 'success' ? 'default' : 'destructive'}>
                        {item.status === 'success' ? (
                          <>
                            <CheckCircle className="mr-1 h-3 w-3" />
                            成功
                          </>
                        ) : (
                          <>
                            <XCircle className="mr-1 h-3 w-3" />
                            失败
                          </>
                        )}
                      </Badge>
                    </div>

                    {/* 电子书信息 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">书名：</span>
                        <span className="font-medium">{item.metadata.title}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">作者：</span>
                        <span className="font-medium">{item.metadata.author}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">转换时间：</span>
                        <span className="font-medium">{formatDate(item.timestamp)}</span>
                      </div>
                    </div>

                    {/* 错误信息 */}
                    {item.status === 'error' && item.errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                        <strong>错误信息：</strong> {item.errorMessage}
                      </div>
                    )}

                    {/* 排版设置 */}
                    <div className="text-xs text-muted-foreground">
                      <span>排版设置：</span>
                      <span className="ml-2">
                        字体 {item.settings.fontFamily} | 
                        字号 {item.settings.fontSize}px | 
                        行距 {item.settings.lineHeight} | 
                        对齐 {item.settings.textAlign}
                      </span>
                    </div>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex space-x-2 ml-4">
                    {item.status === 'success' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => downloadAgain(item)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}