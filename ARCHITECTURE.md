# txt2epub 项目架构文档

## 项目概述

**txt2epub** 是一个将文本文件（TXT）转换为 EPUB 电子书格式的 Web 应用程序。基于现代前端技术栈构建的单页应用（SPA）。

---

## 技术栈

| 层级 | 技术 | 版本 |
|------|------|------|
| 框架 | React | 18.x |
| 语言 | TypeScript | 5.7.x |
| 构建工具 | Vite | 5.x |
| 路由 | React Router | 6.x |
| UI 组件库 | Radix UI | - |
| 样式 | Tailwind CSS | 3.x |
| 动画 | Framer Motion | 11.x |
| 表单处理 | React Hook Form + Zod | - |
| ZIP 压缩 | fflate | - |
| HTTP 客户端 | Axios, Ky | - |
| 测试 | Vitest, Testing Library | - |

---

## 目录结构

```
txt2epub-master/
├── src/                          # 源代码目录
│   ├── components/               # React 组件
│   │   ├── converter/            # 转换功能核心组件
│   │   │   ├── ConverterWorkspace.tsx    # 转换工作区
│   │   │   ├── FileUpload.tsx            # 文件上传
│   │   │   ├── MetadataForm.tsx          # 元数据表单
│   │   │   ├── SettingsForm.tsx          # 设置表单
│   │   │   ├── ConversionControl.tsx     # 转换控制
│   │   │   ├── ConversionProgress.tsx    # 转换进度
│   │   │   └── TypographyPreview.tsx     # 排版预览
│   │   ├── ui/                   # 基础 UI 组件库（40+ 组件）
│   │   └── animations/           # 动画组件
│   │       ├── AnimatedBackground.tsx
│   │       ├── Book3D.tsx
│   │       └── ...
│   ├── pages/                    # 页面组件
│   │   ├── Home.tsx              # 首页
│   │   ├── Converter.tsx         # 转换主页面
│   │   ├── History.tsx           # 转换历史
│   │   └── NotFound.tsx          # 404 页面
│   ├── hooks/                    # 自定义 React Hooks
│   │   ├── useConverterController.ts     # 转换控制器
│   │   ├── useFileImport.ts              # 文件导入
│   │   ├── useMetadataAutofill.ts        # 元数据自动填充
│   │   ├── useLocalStorage.ts            # 本地存储
│   │   └── use-toast.tsx                 # Toast 通知
│   ├── lib/                      # 核心业务逻辑
│   │   ├── epubGenerator.ts              # EPUB 生成器核心
│   │   ├── chapterParser.ts              # 章节解析器
│   │   ├── chapterPatterns.ts            # 章节匹配模式
│   │   ├── epubChapterBuilder.ts         # 章节构建器
│   │   ├── epubCoverBuilder.ts           # 封面构建器
│   │   ├── epubManifestBuilder.ts        # 清单构建器
│   │   ├── epubPackager.ts               # EPUB 打包器
│   │   ├── epubStylesheetBuilder.ts      # 样式表构建器
│   │   ├── bookInfoExtractor.ts          # 书籍信息提取
│   │   ├── textEncoding.ts               # 文本编码处理
│   │   ├── textEncodingDetector.ts       # 编码检测
│   │   ├── zipOptimizer.ts               # ZIP 优化
│   │   ├── metadataValidator.ts          # 元数据验证
│   │   └── errorHandler.ts               # 错误处理
│   ├── types/                    # TypeScript 类型定义
│   │   └── epub.ts               # EPUB 相关类型
│   ├── services/                 # 服务层（预留）
│   ├── assets/                   # 静态资源
│   ├── test/                     # 测试文件
│   ├── main.tsx                  # 应用入口
│   ├── App.tsx                   # 根组件
│   └── routes.tsx                # 路由配置
├── public/                       # 公共静态资源
├── dist/                         # 构建输出目录
├── cache/                        # 缓存目录
├── rules/                        # 规则配置
├── index.html                    # HTML 入口
├── vite.config.ts                # Vite 构建配置
├── tsconfig.json                 # TypeScript 配置
├── tailwind.config.js            # Tailwind CSS 配置
├── postcss.config.js             # PostCSS 配置
├── biome.json                    # Biome 代码检查配置
├── components.json               # 组件库配置
├── package.json                  # npm 依赖配置
├── Dockerfile                    # Docker 配置
└── nginx.conf                    # Nginx 配置
```

---

## 架构模式

### 1. 组件化架构

UI 拆分为可复用的组件，遵循单一职责原则：

- **页面组件** (`pages/`) - 路由级别的页面
- **功能组件** (`components/converter/`) - 业务功能组件
- **基础组件** (`components/ui/`) - 通用 UI 组件
- **动画组件** (`components/animations/`) - 动画效果组件

### 2. 关注点分离

| 层级 | 目录 | 职责 |
|------|------|------|
| UI 层 | `components/` | 界面渲染和用户交互 |
| 业务逻辑层 | `lib/` | 核心业务逻辑处理 |
| 状态管理层 | `hooks/` | 组件状态和副作用管理 |
| 类型定义层 | `types/` | TypeScript 类型约束 |

### 3. 路由驱动

使用 React Router 实现页面导航，支持懒加载：

```typescript
// routes.tsx
const routes = [
  { path: '/', element: <Home /> },
  { path: '/converter', element: <Converter /> },
  { path: '/history', element: <History /> },
]
```

### 4. 主题支持

支持明暗主题切换，基于 CSS 变量实现。

---

## 核心功能流程

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  TXT 文件   │───▶│  章节解析   │───▶│  元数据设置 │
│   上传      │    │             │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
                                            │
                                            ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   下载      │◀───│  EPUB 生成  │◀───│  排版配置   │
│   EPUB      │    │             │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

### 详细流程

1. **文件上传** - 用户上传 TXT 文件，自动检测编码
2. **章节解析** - 根据规则识别章节标题和内容
3. **元数据设置** - 设置书名、作者、封面等
4. **排版配置** - 配置字体、行距、边距等样式
5. **EPUB 生成** - 生成符合 EPUB 3.3 标准的电子书
6. **下载** - 用户下载生成的 EPUB 文件

---

## 核心模块说明

### EPUB 生成器 (`lib/epubGenerator.ts`)

核心生成器，协调各构建器完成 EPUB 文件的生成：

- 调用章节构建器生成 XHTML 内容
- 调用封面构建器生成封面图片
- 调用清单构建器生成 OPF 文件
- 调用样式表构建器生成 CSS
- 调用打包器生成最终 EPUB 文件

### 章节解析器 (`lib/chapterParser.ts`)

解析 TXT 文件内容，识别章节结构：

- 支持多种章节标题格式
- 支持自定义正则表达式
- 支持智能识别

### 文本编码处理 (`lib/textEncoding.ts`)

处理不同编码的文本文件：

- 自动检测文件编码
- 支持常见中文编码（GBK、GB2312、BIG5）
- 支持 UTF-8、UTF-16 等编码

---

## 配置文件说明

| 文件 | 说明 |
|------|------|
| `vite.config.ts` | Vite 构建配置，包括别名、插件等 |
| `tsconfig.json` | TypeScript 编译选项 |
| `tailwind.config.js` | Tailwind CSS 主题和扩展配置 |
| `biome.json` | Biome 代码检查和格式化配置 |
| `components.json` | shadcn/ui 组件库配置 |
| `.env` | 环境变量 |

---

## 部署方式

### Docker 部署

```bash
docker build -t txt2epub .
docker run -p 80:80 txt2epub
```

### 静态部署

```bash
npm run build
# 将 dist/ 目录部署到任意静态服务器
```

---

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 运行测试

```bash
npm run test
```

---

## 扩展阅读

- `epub3.3规范.md` - EPUB 3.3 规范文档
- `api_list.md` - API 列表文档
- `ARCHITECTURE_OPTIMIZATION_GUIDE.md` - 架构优化指南
- `INTELLIGENT_EXTRACTION.md` - 智能提取文档
