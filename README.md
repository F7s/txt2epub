# txt2epub

将 TXT 文件转换为 EPUB 电子书的现代化 Web 应用。

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Vite](https://img.shields.io/badge/Vite-5-646cff)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ 功能特性

- 📄 **TXT 转 EPUB** - 支持将文本文件转换为符合 EPUB 3.3 标准的电子书
- 🎨 **自定义排版** - 支持字体、字号、行距、对齐方式等排版设置
- 📑 **智能章节识别** - 自动识别章节标题，支持自定义匹配规则
- 🖼️ **封面支持** - 支持上传封面图片
- 🌐 **多编码支持** - 自动检测文件编码，支持 GBK、GB2312、BIG5、UTF-8 等
- 📊 **转换历史** - 记录转换历史，方便查看和重新下载
- 🌓 **主题切换** - 支持明暗主题
- ⚡ **性能优化** - 支持标准/多线程压缩策略，大文件处理更高效

## 🚀 快速开始

### 环境要求

- Node.js ≥ 20
- npm ≥ 10

### 安装

```bash
# 克隆项目
git clone <repository-url>
cd txt2epub

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:5173

## 📦 构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🏗️ 项目结构

```
txt2epub/
├── src/
│   ├── components/          # React 组件
│   │   ├── converter/      # 转换功能组件
│   │   ├── ui/             # 基础 UI 组件
│   │   └── animations/     # 动画组件
│   ├── pages/              # 页面组件
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 核心业务逻辑
│   │   ├── epubGenerator.ts       # EPUB 生成器
│   │   ├── chapterParser.ts       # 章节解析器
│   │   ├── epubPackager.ts        # 打包器
│   │   └── ...
│   ├── types/              # TypeScript 类型定义
│   └── main.tsx            # 应用入口
├── public/                 # 静态资源
├── dist/                   # 构建输出
├── Dockerfile              # Docker 配置
└── nginx.conf              # Nginx 配置
```

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 18 + TypeScript |
| 构建 | Vite 5 |
| 路由 | React Router |
| UI | Radix UI + Tailwind CSS |
| 动画 | Framer Motion |
| 表单 | React Hook Form + Zod |
| ZIP | fflate |

## 📝 使用说明

1. **上传文件** - 选择或拖拽 TXT 文件
2. **设置元数据** - 填写书名、作者、封面等信息
3. **配置排版** - 调整字体、字号、行距等
4. **章节识别** - 配置章节匹配规则（可选）
5. **转换** - 点击转换按钮生成 EPUB
6. **下载** - 下载生成的电子书

## 🐳 Docker 部署

```bash
# 构建镜像
docker build -t txt2epub .

# 运行容器
docker run -d -p 80:80 txt2epub
```

## 🌐 静态部署

将 `dist/` 目录部署到任意静态服务器（Nginx、Apache、Vercel、Netlify 等）。

**Nginx 配置示例：**
```nginx
server {
    listen 80;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 📄 许可证

MIT License

## 🙏 致谢

- [EPUB 3.3 规范](https://www.w3.org/publishing/epub3/epub33.html)
- [fflate](https://github.com/101arrowz/fflate) - 高性能 ZIP 压缩库
- [Radix UI](https://www.radix-ui.com/) - 无障碍 UI 组件
