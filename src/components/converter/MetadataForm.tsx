import { AlertCircle, BookOpen, CheckCircle, Image, Info, RefreshCw, Upload, X } from 'lucide-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useMetadataAutofill } from '@/hooks/useMetadataAutofill';
import type { BookInfo } from '@/lib/bookInfoExtractor';
import { generateEpubIdentifier } from '@/lib/uuid';
import type { EpubMetadata } from '@/types/epub';

interface MetadataFormProps {
  onMetadataChange: (metadata: EpubMetadata) => void;
  initialData?: Partial<EpubMetadata>;
  currentFilename?: string; // 添加文件名参数
}

export default function MetadataForm({ onMetadataChange, initialData, currentFilename }: MetadataFormProps) {
  const [extractionInfo, setExtractionInfo] = useState<{
    bookInfo: BookInfo | null;
    quality: 'high' | 'medium' | 'low' | null;
    issues: string[];
    suggestions: string[];
  }>({ bookInfo: null, quality: null, issues: [], suggestions: [] });

  const [coverFile, setCoverFile] = useState<File | null>(initialData?.cover || null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const lastEmittedRef = useRef('');

  const form = useForm<EpubMetadata>({
    defaultValues: {
      title: initialData?.title || '',
      author: initialData?.author || '',
      language: initialData?.language || 'zh-CN',
      identifier: initialData?.identifier || generateEpubIdentifier(),
      publisher: initialData?.publisher || '',
      description: initialData?.description || '',
      subject: initialData?.subject || '',
      date: initialData?.date || new Date().toISOString().split('T')[0],
      rights: initialData?.rights || '',
      cover: initialData?.cover
    }
  });

  const watchedValues = form.watch();
  const watchedValuesString = useMemo(() => {
    const { cover, ...rest } = watchedValues;
    return JSON.stringify(rest);
  }, [watchedValues]);
  const extractBookInfo = useMetadataAutofill(setExtractionInfo);

  // 监听表单变化并通知父组件
  useEffect(() => {
    const metadataWithCover = {
      ...watchedValues,
      cover: coverFile || undefined
    };
    const nextSerialized = JSON.stringify(metadataWithCover);

    if (lastEmittedRef.current === nextSerialized) {
      return;
    }

    lastEmittedRef.current = nextSerialized;
    onMetadataChange(metadataWithCover);
  }, [watchedValuesString, coverFile, onMetadataChange, watchedValues]);

  // 处理父组件传来的initialData变化（仅用于封面和规范化差异）
  useEffect(() => {
    if (!initialData) return;

    // 只处理封面变化
    if (initialData.cover !== coverFile) {
      setCoverFile(initialData.cover || null);
    }

    // 检查规范化导致的差异（如语言代码大小写）
    // 如果父组件的值与表单值仅在规范化方面不同，不触发更新
    const currentTitle = form.getValues('title');
    const currentAuthor = form.getValues('author');
    const currentLanguage = form.getValues('language');

    const parentAuthor = (initialData.author || '').trim();
    const isPlaceholderAuthor = parentAuthor === '未知作者' || parentAuthor === 'Author';
    const hasMeaningfulCurrentAuthor =
      currentAuthor.trim().length > 0 && currentAuthor !== '未知作者' && currentAuthor !== 'Author';

    const shouldUpdateTitle = !!initialData.title && initialData.title !== currentTitle;
    const shouldUpdateAuthor =
      !!initialData.author &&
      initialData.author !== currentAuthor &&
      !(isPlaceholderAuthor && hasMeaningfulCurrentAuthor);

    if (shouldUpdateTitle || shouldUpdateAuthor) {
      if (shouldUpdateTitle) form.setValue('title', initialData.title as string);
      if (shouldUpdateAuthor) form.setValue('author', initialData.author as string);
    }
  }, [initialData?.title, initialData?.author, initialData?.cover]); // 只监听关键字段

  // 当文件名变化时自动提取书名和作者
  useEffect(() => {
    console.log('[MetadataForm] 文件名变化:', currentFilename, '当前title:', form.getValues('title'));
    if (!currentFilename) return;

    const currentTitle = (form.getValues('title') || '').trim();
    const currentAuthor = (form.getValues('author') || '').trim();
    const needsAutoExtraction =
      !currentTitle || !currentAuthor || currentAuthor === '未知作者' || currentAuthor === 'Author';

    if (needsAutoExtraction) {
      handleSmartExtraction(currentFilename, false);
    }
  }, [currentFilename]);

  // 处理封面图片预览
  React.useEffect(() => {
    if (coverFile) {
      const reader = new FileReader();
      const handleLoad = (e: ProgressEvent<FileReader>) => {
        setCoverPreview(e.target?.result as string);
      };
      const handleError = () => {
        console.error('封面图片读取失败');
        setCoverPreview(null);
      };

      reader.onload = handleLoad;
      reader.onerror = handleError;
      reader.readAsDataURL(coverFile);

      // 清理函数
      return () => {
        reader.onload = null;
        reader.onerror = null;
        // 注意：FileReader无法中止读取，但清理事件监听器可以防止内存泄漏
      };
    } else {
      setCoverPreview(null);
    }
  }, [coverFile]);

  // 智能提取书名和作者
  const handleSmartExtraction = (filename: string, forceUpdate = false) => {
    try {
      const bookInfo = extractBookInfo(filename);
      if (!bookInfo) return;

      // 更新表单值
      const currentTitle = (form.getValues('title') || '').trim();
      const currentAuthor = (form.getValues('author') || '').trim();

      // 书名：自动模式只补空，手动模式可覆盖
      if (bookInfo.title && bookInfo.title.trim() && (forceUpdate || !currentTitle)) {
        form.setValue('title', bookInfo.title);
      }

      // 作者：自动模式补空和占位值，手动模式可覆盖
      const canFillAuthor =
        forceUpdate || !currentAuthor || currentAuthor === '未知作者' || currentAuthor === 'Author';
      if (bookInfo.author && bookInfo.author.trim() && canFillAuthor) {
        form.setValue('author', bookInfo.author);
      }
    } catch (error) {
      console.error('智能提取失败:', error);
    }
  };

  // 处理封面上传
  const handleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      // 验证图片类型
      if (!file.type.startsWith('image/')) {
        alert('请选择图片文件');
        return;
      }

      // 验证文件大小（5MB限制）
      if (file.size > 5 * 1024 * 1024) {
        alert('图片文件大小不能超过5MB');
        return;
      }

      // 验证文件完整性
      if (file.size === 0) {
        alert('图片文件为空');
        return;
      }

      setCoverFile(file);
    } catch (error) {
      console.error('封面上传处理失败:', error);
      alert('封面上传失败，请重试');
    } finally {
      // 清空input，允许重复选择同一文件
      if (event.target) {
        event.target.value = '';
      }
    }
  };

  // 移除封面
  const removeCover = () => {
    setCoverFile(null);
    if (coverInputRef.current) {
      coverInputRef.current.value = '';
    }
  };

  // 获取质量徽章颜色
  const getQualityBadgeVariant = (quality: string | null) => {
    switch (quality) {
      case 'high': return 'default';
      case 'medium': return 'secondary';
      case 'low': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5" />
            <span>电子书信息</span>
          </div>
          {currentFilename && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSmartExtraction(currentFilename, true)}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              重新提取
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 提取信息显示 */}
        {extractionInfo.bookInfo && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span>从文件名提取的信息:</span>
                  <Badge variant={getQualityBadgeVariant(extractionInfo.quality)}>
                    {extractionInfo.quality === 'high' && '高质量'}
                    {extractionInfo.quality === 'medium' && '中等质量'}
                    {extractionInfo.quality === 'low' && '低质量'}
                  </Badge>
                </div>
                {extractionInfo.issues.length > 0 && (
                  <div className="text-sm text-muted-foreground">
                    <strong>问题:</strong> {extractionInfo.issues.join(', ')}
                  </div>
                )}
                {extractionInfo.suggestions.length > 0 && (
                  <div className="text-sm text-muted-foreground">
                    <strong>建议:</strong> {extractionInfo.suggestions.join(', ')}
                  </div>
                )}
              </div>
            </AlertDescription>
          </Alert>
        )}
        <Form {...form}>
          <form className="space-y-6">
            {/* 封面上传 */}
            <div className="space-y-4">
              <FormLabel>书籍封面</FormLabel>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {coverPreview ? (
                  <div className="relative">
                    <img 
                      src={coverPreview} 
                      alt="封面预览" 
                      className="w-24 h-32 object-cover rounded border"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                      onClick={removeCover}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ) : (
                  <div className="w-24 h-32 border-2 border-dashed border-muted-foreground/25 rounded flex items-center justify-center">
                    <Image className="h-8 w-8 text-muted-foreground/50" />
                  </div>
                )}
                <div className="flex-1 space-y-2">
                  <input
                    ref={coverInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleCoverUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => coverInputRef.current?.click()}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {coverFile ? '更换封面' : '上传封面'}
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    支持 JPG、PNG、GIF 等格式，文件大小不超过 5MB
                  </p>
                  {coverFile && (
                    <p className="text-sm text-green-600">
                      <CheckCircle className="inline h-4 w-4 mr-1" />
                      已选择: {coverFile.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* 基本信息 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                rules={{ required: '请输入书名' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>书名 *</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入电子书标题" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="author"
                rules={{ required: '请输入作者' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>作者 *</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入作者姓名" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 高级选项切换 */}
            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="p-0 h-auto font-normal"
              >
                {showAdvanced ? '隐藏' : '显示'}高级选项
              </Button>
            </div>

            {/* 高级选项 */}
            {showAdvanced && (
              <div className="space-y-6 pt-4 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>语言</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="选择语言" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="zh-CN">中文（简体）</SelectItem>
                            <SelectItem value="zh-TW">中文（繁体）</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="ja">日本語</SelectItem>
                            <SelectItem value="ko">한국어</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>出版日期</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="publisher"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>出版社</FormLabel>
                        <FormControl>
                          <Input placeholder="请输入出版社名称" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>主题分类</FormLabel>
                        <FormControl>
                          <Input placeholder="如：小说、科技、历史等" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>内容简介</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="请输入电子书的内容简介或摘要"
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rights"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>版权信息</FormLabel>
                      <FormControl>
                        <Input placeholder="如：© 2025 作者姓名，保留所有权利" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="identifier"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>唯一标识符</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="自动生成的UUID标识符"
                          readOnly
                          className="bg-muted"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
