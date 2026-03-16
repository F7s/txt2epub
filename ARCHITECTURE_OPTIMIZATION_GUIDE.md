# 架构优化指南

更新时间：2026-03-17

## 当前评估

- 鲁棒性：5.8 / 10
- 可维护性：4.9 / 10

当前项目的主要问题不是功能缺失，而是核心流程靠页面内补丁堆叠维持，导致后续每次改动的回归风险持续升高。

## 优化目标

1. 恢复构建绿色，建立稳定基线。
2. 清理 `Converter` 页面中的业务耦合，收口状态流。
3. 把 EPUB 生成逻辑拆成可测试、可替换的模块。
4. 让上传、转换、下载事件回到单一触发模型。
5. 建立最小回归测试，避免交互问题反复出现。

## 热点文件

以下文件是当前架构热点，优化优先级最高：

- `src/pages/Converter.tsx`
- `src/lib/epubGenerator.ts`
- `src/components/converter/FileUpload.tsx`
- `src/components/converter/MetadataForm.tsx`
- `src/components/converter/SettingsForm.tsx`
- `src/lib/zipOptimizer.ts`
- `src/lib/errorHandler.ts`

## 阶段 0：恢复构建绿色

目标：`npm run build` 必须通过。

需要处理的文件：

- `src/components/animations/TextReveal.tsx`
  说明：修正 Framer Motion `Variants` 类型不兼容问题。
- `src/components/ui/aspect-ratio.tsx`
  说明：补齐 `@radix-ui/react-aspect-ratio` 依赖或删除未使用组件。
- `src/components/ui/map.tsx`
  说明：修正 `map` 可能为 `null` 的类型错误。
- `src/components/ui/qrcodedataurl.tsx`
  说明：补齐 `qrcode` 类型声明。
- `src/components/ui/video.tsx`
  说明：修复 `Player` 未定义和 props 类型错误。
- `src/pages/Converter.tsx`
  说明：修复 `selectedFile` 可能为空的类型错误。
- `vite.config.ts`
  说明：补齐 `miaoda-sc-plugin` 类型声明。

建议新增文件：

- `src/global.d.ts`
  说明：集中补第三方模块声明，例如 `declare module 'miaoda-sc-plugin';`

完成标准：

1. `npm run build` 通过
2. 无新增 TypeScript 错误
3. 不再依赖运行时试错确认基础稳定性

## 阶段 1：收口上传和转换状态

目标：只保留一套文件状态和一套转换触发模型。

需要修改的文件：

- `src/components/converter/FileUpload.tsx`
  问题：
  当前组件内部维护 `selectedFile`，父组件 `Converter` 也维护一份，形成双状态源。
  当前通过 `onFileSelect(file, '')` 和 `onFileSelect(file, content)` 进行两阶段隐式通信，不够清晰。
  优化：
  去掉内部 `selectedFile` 状态。
  去掉 `clearFile` 内部删除逻辑，改为由父组件传入 `onClear`。
  `onFileSelect` 改成单次成功回调，不再传空内容。

- `src/pages/Converter.tsx`
  问题：
  当前页面承担文件读取、章节解析、元数据自动填充、转换、下载、日志、动画等全部职责。
  使用 `metadataRef` 绕过 React 状态同步。
  通过 `pointerDown / touchStart / click` 和时间戳去重维持事件触发。
  优化：
  去掉 `metadataRef`。
  去掉 `lastConvertTriggerAtRef` 和 `lastDownloadTriggerAtRef`。
  上传、转换、下载恢复为单一入口函数。

建议新增文件：

- `src/hooks/useFileImport.ts`
  职责：
  负责文件选择、编码检测、内容读取、章节数量解析。
- `src/hooks/useConverterController.ts`
  职责：
  负责元数据校验、转换、下载、历史记录。

完成标准：

1. `Converter.tsx` 不再直接处理文件读取细节
2. 上传组件只负责输入，不持有业务状态
3. 转换和下载各自只有一个触发入口

## 阶段 2：拆分页面层

目标：把 `Converter.tsx` 从“大页面 + 大业务脚本”改为页面壳。

需要修改的文件：

- `src/pages/Converter.tsx`
  优化：
  只保留布局、动画和组件编排。

建议新增文件：

- `src/components/converter/ConversionControl.tsx`
  来源：
  从 `Converter.tsx` 中抽出 `ConversionControlCard` 和移动端底栏控制。

- `src/components/converter/FileSummary.tsx`
  来源：
  从 `Converter.tsx` 中抽出“文件信息”卡片。

- `src/components/converter/DebugPanel.tsx`
  来源：
  从 `Converter.tsx` 中抽出固定日志面板。
  备注：
  只在开发模式渲染，生产环境默认关闭。

- `src/components/converter/EmptyState.tsx`
  来源：
  从 `Converter.tsx` 中抽出“首屏居中上传态”。

完成标准：

1. `src/pages/Converter.tsx` 控制在 250 行以内
2. 组件职责按视图切分，而不是按临时交互补丁堆积
3. 页面内不再直接出现大量流程控制和日志逻辑

## 阶段 3：拆分 EPUB 领域逻辑

目标：把 900+ 行 `EpubGenerator` 拆为多个职责单一模块。

需要修改的文件：

- `src/lib/epubGenerator.ts`
  问题：
  章节解析、卷结构处理、样式生成、OPF/NCX/Nav、章节 XHTML、打包策略全在一个类里。
  优化：
  最终只保留 orchestration。

建议新增文件：

- `src/lib/chapterParser.ts`
  来源：
  迁出 `parseTextContent`、`processVolumeStructure`、章节识别规则。

- `src/lib/epubStylesheetBuilder.ts`
  来源：
  迁出 `generateStylesheet` 和字体相关 CSS 逻辑。

- `src/lib/epubManifestBuilder.ts`
  来源：
  迁出 `generateContentOpf`、`generateTocNcx`、`generateNavXhtml`。

- `src/lib/epubChapterBuilder.ts`
  来源：
  迁出 `generateChapters`、`formatContent`、章节 XHTML 模板。

- `src/lib/epubPackager.ts`
  来源：
  封装 `ZipOptimizer`、`FflateWorkerZipOptimizer` 调用。

完成标准：

1. `src/lib/epubGenerator.ts` 控制在 250 行以内
2. 章节解析、打包、样式能独立测试
3. 不改页面代码也能替换打包策略

## 阶段 4：清理表单副作用和废弃字段

目标：让表单组件只做输入，不做复杂业务推断。

需要修改的文件：

- `src/components/converter/MetadataForm.tsx`
  问题：
  依赖 `watch + useEffect + JSON.stringify` 回传父组件。
  文件名提取逻辑、封面预览逻辑、父组件同步逻辑混在一起。
  优化：
  父组件只传入值和更新函数。
  智能提取逻辑迁出到 hook 或 service。

- `src/components/converter/SettingsForm.tsx`
  问题：
  `styleId` 已被屏蔽，但默认值和回传中仍保留。
  预览区过大，和设置表单耦合过深。
  优化：
  彻底移除 `styleId`。
  排版预览单独抽组件。

- `src/types/epub.ts`
  优化：
  删除过期字段 `styleId`，避免半废弃接口继续扩散。

建议新增文件：

- `src/hooks/useMetadataAutofill.ts`
  职责：
  负责文件名书名/作者提取。

- `src/components/converter/TypographyPreview.tsx`
  职责：
  负责排版预览展示。

完成标准：

1. 表单只做输入和展示
2. 智能提取不再嵌在表单内部
3. 类型定义与实际功能一致

## 阶段 5：建立最低限度测试

目标：保证主链路可回归。

建议新增文件：

- `src/lib/__tests__/chapterParser.test.ts`
- `src/lib/__tests__/epubManifestBuilder.test.ts`
- `src/lib/__tests__/epubPackager.test.ts`
- `src/hooks/__tests__/useConverterController.test.ts`
- `src/pages/__tests__/Converter.smoke.test.tsx`

建议覆盖场景：

1. 上传 TXT 后立即显示文件信息
2. 上传完成后显示章节数量
3. 元数据不完整时不能转换，并有明确提示
4. 转换成功后能生成 Blob
5. 下载按钮和开始转换按钮不会被覆盖层阻断

## 建议的文件演进路线

第一批必须修改：

- `src/pages/Converter.tsx`
- `src/components/converter/FileUpload.tsx`
- `src/lib/epubGenerator.ts`
- `src/components/converter/MetadataForm.tsx`
- `src/components/converter/SettingsForm.tsx`
- `src/types/epub.ts`

第一批建议新增：

- `src/hooks/useFileImport.ts`
- `src/hooks/useConverterController.ts`
- `src/components/converter/ConversionControl.tsx`
- `src/components/converter/FileSummary.tsx`
- `src/components/converter/DebugPanel.tsx`
- `src/components/converter/EmptyState.tsx`
- `src/lib/chapterParser.ts`
- `src/lib/epubStylesheetBuilder.ts`
- `src/lib/epubManifestBuilder.ts`
- `src/lib/epubChapterBuilder.ts`
- `src/lib/epubPackager.ts`

## 里程碑验收

### 里程碑 A

- `npm run build` 通过
- 页面主链路不依赖事件补丁

### 里程碑 B

- `Converter.tsx` 低于 250 行
- `EpubGenerator.ts` 低于 250 行

### 里程碑 C

- 上传、转换、下载逻辑都能独立测试
- 主流程 smoke test 通过

## 不要继续做的事

- 不要再往 `src/pages/Converter.tsx` 里叠新状态和新补丁
- 不要继续保留双状态源
- 不要继续通过 `ref + 时间戳 + 多事件监听` 解决交互问题
- 不要让废弃字段继续留在类型和默认值里

## 下一步建议

如果要开始落地，按下面顺序执行：

1. 阶段 0：恢复构建绿色
2. 阶段 1：收口上传和转换状态
3. 阶段 2：拆分页面层
4. 阶段 3：拆分 EPUB 领域逻辑
5. 阶段 4：清理表单副作用
6. 阶段 5：补最小测试
