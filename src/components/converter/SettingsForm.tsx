import { AlignCenter, ChevronDown, ChevronUp, FileText, RotateCcw, Settings, Upload } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import TypographyPreview from '@/components/converter/TypographyPreview';
import type { EpubSettings } from '@/types/epub';

interface SettingsFormProps {
  onSettingsChange: (settings: EpubSettings) => void;
  initialData?: Partial<EpubSettings>;
  defaultCollapsed?: boolean;
}

// 默认设置
const DEFAULT_SETTINGS: EpubSettings = {
  // 基础排版设置
  fontSize: 16,
  fontFamily: 'serif',
  lineHeight: '1.5rem',
  textAlign: 'justify',
  indent: 2,
  margin: 20,

  // 标题设置
  titleAlign: 'center',
  paragraphSpacing: '1em',
  
  // 高级设置
  maxTitleLength: 35,
  unknownTitle: '章节正文',
  
  // 章节识别设置
  volumeMatch: '^第[0-9一二三四五六七八九十零〇百千两 ]+[卷部]',
  exclusionPattern: '^第[0-9一二三四五六七八九十零〇百千两 ]+(部门|部队|部属|部分|部件|部落|部.*：$)',
  
  // 语言设置
  language: 'zh-CN'
};

export default function SettingsForm({ onSettingsChange, initialData, defaultCollapsed = false }: SettingsFormProps) {
  const [customFontFile, setCustomFontFile] = useState<File | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  
  const form = useForm<EpubSettings>({
    defaultValues: {
      ...DEFAULT_SETTINGS,
      ...initialData
    }
  });

  const watchedValues = form.watch();

  // 监听表单变化并通知父组件
  React.useEffect(() => {
    const settingsWithFont = { ...watchedValues };
    if (customFontFile) {
      settingsWithFont.customFont = customFontFile;
    }
    onSettingsChange(settingsWithFont);
  }, [watchedValues, customFontFile, onSettingsChange]);

  // 重置为默认设置
  const resetToDefaults = () => {
    form.reset(DEFAULT_SETTINGS);
    setCustomFontFile(null);
  };

  // 处理字体文件上传
  const handleFontUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.name.endsWith('.woff') || file.name.endsWith('.woff2') || file.name.endsWith('.ttf') || file.name.endsWith('.otf'))) {
      setCustomFontFile(file);
    }
  };

  // 解析lineHeight为数字用于Slider
  const parseLineHeight = (value: string): number => {
    const num = parseFloat(value.replace(/[^\d.]/g, ''));
    return isNaN(num) ? 1.5 : num;
  };

  // 格式化lineHeight为字符串
  const formatLineHeight = (value: number): string => {
    return `${value}rem`;
  };

  // 获取行间距的CSS值
  const getLineHeightValue = (lineHeight: string): string => {
    const num = parseLineHeight(lineHeight);
    return `${num}`; // 使用数值，让浏览器根据字体大小计算
  };

  return (
    <Card>
      <Collapsible open={!isCollapsed} onOpenChange={(open) => setIsCollapsed(!open)}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>排版设置</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); resetToDefaults(); }}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  重置默认
                </Button>
                {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              </div>
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent>
        <Form {...form}>
          <form className="space-y-6">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3 text-xs sm:text-sm">
                <TabsTrigger value="basic">
                  <FileText className="h-4 w-4 mr-1" />
                  基础
                </TabsTrigger>
                <TabsTrigger value="layout">
                  <AlignCenter className="h-4 w-4 mr-1" />
                  布局
                </TabsTrigger>
                <TabsTrigger value="advanced">
                  <Settings className="h-4 w-4 mr-1" />
                  高级
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fontFamily"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>字体系列</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="选择字体" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="serif">衬线字体 (Serif)</SelectItem>
                            <SelectItem value="sans-serif">无衬线字体 (Sans-serif)</SelectItem>
                            <SelectItem value="monospace">等宽字体 (Monospace)</SelectItem>
                            <SelectItem value="'Microsoft YaHei', sans-serif">微软雅黑</SelectItem>
                            <SelectItem value="'SimSun', serif">宋体</SelectItem>
                            <SelectItem value="'KaiTi', serif">楷体</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="textAlign"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>文本对齐</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="选择对齐方式" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="left">左对齐</SelectItem>
                            <SelectItem value="center">居中对齐</SelectItem>
                            <SelectItem value="right">右对齐</SelectItem>
                            <SelectItem value="justify">两端对齐</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="fontSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>字体大小: {field.value}px</FormLabel>
                      <FormControl>
                        <div className="px-3">
                          <Slider
                            min={12}
                            max={24}
                            step={1}
                            value={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="w-full"
                          />
                        </div>
                      </FormControl>
                      <div className="flex justify-between text-xs text-muted-foreground px-3">
                        <span>12px</span>
                        <span>24px</span>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lineHeight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>行间距: {field.value}</FormLabel>
                      <FormControl>
                        <div className="px-3">
                          <Slider
                            min={1.2}
                            max={2.5}
                            step={0.1}
                            value={[parseLineHeight(field.value)]}
                            onValueChange={(value) => field.onChange(formatLineHeight(value[0]))}
                            className="w-full"
                          />
                        </div>
                      </FormControl>
                      <div className="flex justify-between text-xs text-muted-foreground px-3">
                        <span>1.2rem</span>
                        <span>2.5rem</span>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="margin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>页边距: {field.value}px</FormLabel>
                      <FormControl>
                        <div className="px-3">
                          <Slider
                            min={10}
                            max={50}
                            step={5}
                            value={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="w-full"
                          />
                        </div>
                      </FormControl>
                      <div className="flex justify-between text-xs text-muted-foreground px-3">
                        <span>10px</span>
                        <span>50px</span>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              <TabsContent value="layout" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-md border bg-muted/40 p-3 text-sm text-muted-foreground">
                    主题样式已固定为兼容模式，避免阅读器对主题 CSS 识别不一致。
                  </div>

                  <FormField
                    control={form.control}
                    name="titleAlign"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>标题对齐方式</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="选择标题对齐方式" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="left">左对齐</SelectItem>
                            <SelectItem value="center">居中对齐</SelectItem>
                            <SelectItem value="right">右对齐</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>书籍语言</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="选择语言" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="zh-CN">中文简体</SelectItem>
                            <SelectItem value="zh-TW">中文繁体</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="ja">日本語</SelectItem>
                            <SelectItem value="ko">한국어</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="indent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>段落缩进: {field.value}字符</FormLabel>
                      <FormControl>
                        <div className="px-3">
                          <Slider
                            min={0}
                            max={6}
                            step={1}
                            value={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="w-full"
                          />
                        </div>
                      </FormControl>
                      <div className="flex justify-between text-xs text-muted-foreground px-3">
                        <span>无缩进</span>
                        <span>6字符</span>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="paragraphSpacing"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>段落间距</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="例如: 1em, 16px"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              <TabsContent value="advanced" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="maxTitleLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>标题最大字数</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={10}
                            max={100}
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="unknownTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>未知章节名称</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="章节正文"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="chapterMatch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>章节匹配规则（正则表达式）</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="例如: 第.{1,8}章"
                          {...field}
                        />
                      </FormControl>
                      <div className="text-xs text-muted-foreground">
                        留空则自动识别章节
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="volumeMatch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>卷匹配规则（正则表达式）</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="^第[0-9一二三四五六七八九十零〇百千两 ]+[卷部]"
                          className="min-h-[60px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="exclusionPattern"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>排除规则（正则表达式）</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="^第[0-9一二三四五六七八九十零〇百千两 ]+(部门|部队|部属|部分|部件|部落|部.*：$)"
                          className="min-h-[60px]"
                          {...field}
                        />
                      </FormControl>
                      <div className="text-xs text-muted-foreground">
                        用于排除无效章节/卷的正则表达式
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <FormLabel className="text-base font-semibold">字体设置</FormLabel>
                  
                  <div className="space-y-2">
                    <FormLabel htmlFor="font-upload" className="text-sm">自定义字体文件</FormLabel>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="font-upload"
                        type="file"
                        accept=".woff,.woff2,.ttf,.otf"
                        onChange={handleFontUpload}
                        className="file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:bg-violet-50 file:text-violet-700"
                      />
                      {customFontFile && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setCustomFontFile(null)}
                        >
                          清除
                        </Button>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      支持 .woff, .woff2, .ttf, .otf 格式
                    </div>
                    {customFontFile && (
                      <div className="text-sm text-green-600">
                        ✓ 已选择字体：{customFontFile.name}
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <TypographyPreview
              settings={watchedValues}
              customFontFile={customFontFile}
              getLineHeightValue={getLineHeightValue}
            />
          </form>
        </Form>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
