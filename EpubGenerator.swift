//
//  EpubGenerator.swift
//  EpubConverter
//
//  Created by AI Assistant on 2025/6/28.
//

import Foundation
import UniformTypeIdentifiers
import Compression

import zlib

class EpubGenerator {
    
    // 日志回调
    static var logCallback: ((String) -> Void)?
    
    private static func log(_ message: String) {
        print("[EpubGenerator] \(message)")
        logCallback?(message)
    }
    
    private static func getMimeType(for fileExtension: String) -> String {
        switch fileExtension.lowercased() {
        case "jpg", "jpeg":
            return "image/jpeg"
        case "png":
            return "image/png"
        case "gif":
            return "image/gif"
        case "svg":
            return "image/svg+xml"
        case "webp":
            return "image/webp"
        case "bmp":
            return "image/bmp"
        case "tiff", "tif":
            return "image/tiff"
        default:
            return "image/jpeg" // 默认类型
        }
    }
    
    static func generateEpub(from book: Book, outputURL: URL) throws {
        // outputURL应该已经包含.epub扩展名
        let epubURL = outputURL
        
        log("开始生成EPUB文件: \(epubURL.lastPathComponent)")
        
        // 创建临时目录
        let tempDir = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        log("创建临时目录: \(tempDir.path)")
        try FileManager.default.createDirectory(at: tempDir, withIntermediateDirectories: true)
        
        defer {
            log("清理临时目录: \(tempDir.path)")
            try? FileManager.default.removeItem(at: tempDir)
        }
        
        // 创建EPUB结构
        log("开始创建EPUB结构...")
        try createEpubStructure(book: book, in: tempDir)
        
        // 压缩为EPUB文件
        log("开始压缩EPUB文件...")
        try zipEpub(from: tempDir, to: epubURL)
        
        log("EPUB文件生成完成: \(epubURL.path)")
    }
    
    private static func createEpubStructure(book: Book, in tempDir: URL) throws {
        let fileManager = FileManager.default
        
        // 创建目录结构
        let metaInfDir = tempDir.appendingPathComponent("META-INF")
        let oebpsDir = tempDir.appendingPathComponent("OEBPS")
        let textDir = oebpsDir.appendingPathComponent("Text")
        let stylesDir = oebpsDir.appendingPathComponent("Styles")
        
        log("创建EPUB目录结构...")
        try fileManager.createDirectory(at: metaInfDir, withIntermediateDirectories: true)
        try fileManager.createDirectory(at: textDir, withIntermediateDirectories: true)
        try fileManager.createDirectory(at: stylesDir, withIntermediateDirectories: true)
        
        // 添加封面图片处理
        if let coverPath = book.cover, !coverPath.isEmpty {
            let coverURL = URL(fileURLWithPath: coverPath)
            let coverExtension = coverURL.pathExtension.lowercased()
            let coverFileName = "cover.\(coverExtension)"
            
            // 创建 Images 目录
            let imagesDir = oebpsDir.appendingPathComponent("Images")
            try fileManager.createDirectory(at: imagesDir, withIntermediateDirectories: true, attributes: nil)
            
            // 复制封面图片
            let destinationURL = imagesDir.appendingPathComponent(coverFileName)
            try fileManager.copyItem(at: coverURL, to: destinationURL)
            log("封面图片已复制: \(coverFileName)")
        }
        
        log("目录结构创建完成")
        
        // 创建mimetype文件
        log("创建mimetype文件...")
        let mimetypeContent = "application/epub+zip"
        try mimetypeContent.write(to: tempDir.appendingPathComponent("mimetype"), atomically: true, encoding: .utf8)
        
        // 创建container.xml
        log("创建container.xml文件...")
        let containerXML = createContainerXML()
        try containerXML.write(to: metaInfDir.appendingPathComponent("container.xml"), atomically: true, encoding: .utf8)
        
        // 创建CSS样式文件
        log("创建CSS样式文件...")
        let css = createCSS(book: book)
        try css.write(to: stylesDir.appendingPathComponent("stylesheet.css"), atomically: true, encoding: .utf8)
        
        // 创建封面页面（如果存在封面）
        if let coverPath = book.cover, !coverPath.isEmpty {
            let coverURL = URL(fileURLWithPath: coverPath)
            let coverExtension = coverURL.pathExtension.lowercased()
            let coverFileName = "cover.\(coverExtension)"
            
            let coverPageContent = """
            <?xml version="1.0" encoding="UTF-8"?>
            <!DOCTYPE html>
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
            <head>
                <title>封面</title>
                <link rel="stylesheet" type="text/css" href="../Styles/stylesheet.css"/>
                <style type="text/css">
                    body {
                        margin: 0;
                        padding: 0;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                    }
                    .cover-container {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .cover-image {
                        max-width: 100%;
                        max-height: 100vh;
                        object-fit: contain;
                    }
                </style>
            </head>
            <body>
                <div class="cover-container">
                    <img src="../Images/\(coverFileName)" alt="\(book.bookname) 封面" class="cover-image"/>
                </div>
            </body>
            </html>
            """
            
            let coverPageURL = textDir.appendingPathComponent("cover.xhtml")
            try coverPageContent.write(to: coverPageURL, atomically: true, encoding: .utf8)
            log("封面页面已创建: cover.xhtml")
        }
        
        // 创建章节HTML文件
        log("创建章节HTML文件，共\(book.sections.count)个章节...")
        for (index, section) in book.sections.enumerated() {
            let html = createChapterHTML(section: section, book: book)
            let filename = String(format: "chapter_%03d.xhtml", index + 1)
            try html.write(to: textDir.appendingPathComponent(filename), atomically: true, encoding: .utf8)
            log("创建章节文件: \(filename) - \(section.title)")
        }
        
        // 创建导航文档
        log("创建导航文档...")
        let navHTML = createNavigationHTML(book: book, sections: book.sections)
        try navHTML.write(to: oebpsDir.appendingPathComponent("nav.xhtml"), atomically: true, encoding: String.Encoding.utf8)
        
        // 创建OPF文件
        log("创建OPF文件...")
        let opf = createOPF(book: book)
        try opf.write(to: oebpsDir.appendingPathComponent("content.opf"), atomically: true, encoding: .utf8)
        
        log("EPUB结构创建完成")
    }
    
    private static func createContainerXML() -> String {
        return """
        <?xml version="1.0" encoding="UTF-8"?>
        <container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
            <rootfiles>
                <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
            </rootfiles>
        </container>
        """
    }
    
    private static func createCSS(book: Book) -> String {
        return """
        /* 基础样式 */
        body {
            font-family: "Times New Roman", "SimSun", serif;
            margin: 1em;
            padding: 0;
            line-height: \(book.lineHeight);
            color: #000;
            background-color: #fff;
            font-size: 1em;
        }
        
        /* 章节标题样式 */
        .title, h1.title {
            text-align: \(book.align);
            font-weight: bold;
            margin: 1.5em 0 1em 0;
            font-size: 1.5em;
            color: #333;
        }
        
        /* 段落样式 */
        .content, p.content {
            margin-bottom: \(book.bottom);
            margin-top: 0;
            text-indent: \(book.indent)em;
            line-height: \(book.lineHeight);
            text-align: justify;
            orphans: 2;
            widows: 2;
        }
        
        /* 导航页面头部样式 */
        header {
            text-align: center;
            margin-bottom: 2em;
            padding-bottom: 1em;
            border-bottom: 1px solid #ddd;
        }
        
        header h1 {
            font-size: 1.8em;
            margin: 0 0 0.5em 0;
            color: #333;
        }
        
        header p {
            font-size: 1.1em;
            margin: 0;
            color: #666;
            font-style: italic;
        }
        
        /* 导航样式 */
        nav[epub\\:type~="toc"] h2,
        nav[epub\\:type~="landmarks"] h2,
        nav[epub\\:type~="page-list"] h2,
        nav[epub|type~="toc"] h2,
        nav[epub|type~="landmarks"] h2,
        nav[epub|type~="page-list"] h2 {
            font-size: 1.3em;
            margin: 1.5em 0 0.8em 0;
            color: #333;
            border-bottom: 2px solid #0066cc;
            padding-bottom: 0.3em;
        }
        
        nav[epub\\:type~="toc"] ol,
        nav[epub\\:type~="landmarks"] ol,
        nav[epub\\:type~="page-list"] ol,
        nav[epub|type~="toc"] ol,
        nav[epub|type~="landmarks"] ol,
        nav[epub|type~="page-list"] ol {
            list-style-type: none;
            padding-left: 0;
            margin: 1em 0;
        }
        
        nav[epub\\:type~="toc"] li,
        nav[epub\\:type~="landmarks"] li,
        nav[epub|type~="toc"] li,
        nav[epub|type~="landmarks"] li {
            margin: 0.8em 0;
            padding: 0.3em 0 0.3em 1em;
            border-left: 3px solid #f0f0f0;
        }
        
        nav[epub\\:type~="page-list"] li,
        nav[epub|type~="page-list"] li {
            display: inline-block;
            margin: 0.3em;
            padding: 0.3em 0.6em;
            background-color: #f8f9fa;
            border-radius: 3px;
        }
        
        nav[epub\\:type~="toc"] a,
        nav[epub\\:type~="landmarks"] a,
        nav[epub\\:type~="page-list"] a,
        nav[epub|type~="toc"] a,
        nav[epub|type~="landmarks"] a,
        nav[epub|type~="page-list"] a {
            text-decoration: none;
            color: #0066cc;
            display: block;
            padding: 0.2em 0;
        }
        
        nav[epub\\:type~="page-list"] a,
        nav[epub|type~="page-list"] a {
            display: inline;
            padding: 0;
        }
        
        nav[epub\\:type~="toc"] a:hover,
        nav[epub\\:type~="landmarks"] a:hover,
        nav[epub\\:type~="page-list"] a:hover,
        nav[epub|type~="toc"] a:hover,
        nav[epub|type~="landmarks"] a:hover,
        nav[epub|type~="page-list"] a:hover {
            text-decoration: underline;
            color: #004499;
        }
        
        nav[epub\\:type~="toc"] li:hover,
        nav[epub\\:type~="landmarks"] li:hover,
        nav[epub|type~="toc"] li:hover,
        nav[epub|type~="landmarks"] li:hover {
            border-left-color: #0066cc;
            background-color: #f8f9fa;
        }
        
        /* 辅助功能支持 */
        main[role="main"] {
            outline: none;
        }
        
        /* 屏幕阅读器专用样式 */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
        
        /* 焦点样式 */
        a:focus,
        button:focus {
            outline: 2px solid #0066cc;
            outline-offset: 2px;
        }
        
        /* 章节内容区域 */
        .chapter-content {
            margin-top: 1em;
        }
        
        /* EPUB类型语义化支持 */
        section[epub|type="chapter"] {
            margin-bottom: 2em;
        }
        
        header[epub|type="title"] {
            margin-bottom: 1.5em;
        }
        
        /* 响应式设计 */
        @media screen and (max-width: 600px) {
            body {
                margin: 0.5em;
                font-size: 0.9em;
            }
            
            .title, h1.title {
                font-size: 1.3em;
                margin: 1em 0 0.8em 0;
            }
        }
        
        /* 打印样式 */
        @media print {
            body {
                margin: 0;
                font-size: 12pt;
            }
            
            .title, h1.title {
                page-break-after: avoid;
            }
        }
        """
    }
    
    private static func createChapterHTML(section: Section, book: Book) -> String {
        return """
        <?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE html>
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="zh-CN" lang="zh-CN">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>\(section.title) - \(book.bookname)</title>
            <link rel="stylesheet" type="text/css" href="../Styles/stylesheet.css"/>
        </head>
        <body>
            <main role="main" aria-labelledby="chapter-title">
                <section epub:type="chapter">
                    <header>
                        <h1 id="chapter-title" class="title" epub:type="title">\(section.title)</h1>
                    </header>
                    <div class="chapter-content" epub:type="bodymatter">
                        \(section.content)
                    </div>
                </section>
            </main>
        </body>
        </html>
        """
    }
    
    private static func createPageList(sections: [Section]) -> String {
        var pageItems = ""
        for (index, _) in sections.enumerated() {
            let chapterFile = String(format: "Text/chapter_%03d.xhtml", index + 1)
            pageItems += "            <li><a href=\"\(chapterFile)\" aria-label=\"第\(index + 1)章\">\(index + 1)</a></li>\n"
        }
        return pageItems
    }
    
    private static func createNavigationHTML(book: Book, sections: [Section]) -> String {
        var tocItems = ""
        for (index, section) in sections.enumerated() {
            let chapterFile = String(format: "Text/chapter_%03d.xhtml", index + 1)
            tocItems += "            <li><a href=\"\(chapterFile)\" id=\"toc-chapter\(index + 1)\">\(section.title)</a></li>\n"
        }
        
        return """
        <?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE html>
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="zh-CN" lang="zh-CN">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>\(book.bookname) - 导航</title>
            <link rel="stylesheet" type="text/css" href="../Styles/stylesheet.css"/>
        </head>
        <body>
            <header>
                <h1>\(book.bookname)</h1>
                <p>作者：\(book.author)</p>
            </header>
            
            <nav epub:type="toc" id="toc" role="doc-toc" aria-labelledby="toc-heading">
                <h2 id="toc-heading">目录</h2>
                <ol role="list">
        \(tocItems)        </ol>
            </nav>
            
            <nav epub:type="landmarks" id="landmarks" role="doc-landmarks" aria-labelledby="landmarks-heading">
                <h2 id="landmarks-heading">导航标记</h2>
                <ol role="list">
                    <li><a epub:type="toc" href="#toc" aria-describedby="toc-desc">目录</a>
                        <span id="toc-desc" class="sr-only">书籍章节目录</span></li>
                    <li><a epub:type="bodymatter" href="Text/chapter_001.xhtml" aria-describedby="content-desc">正文开始</a>
                        <span id="content-desc" class="sr-only">书籍正文内容开始</span></li>
                    <li><a epub:type="bodymatter" href="Text/chapter_\(String(format: "%03d", sections.count)).xhtml" aria-describedby="end-desc">正文结束</a>
                        <span id="end-desc" class="sr-only">书籍正文内容结束</span></li>
                </ol>
            </nav>
            
            <nav epub:type="page-list" id="page-list" role="doc-pagelist" aria-labelledby="pagelist-heading">
                <h2 id="pagelist-heading">页面列表</h2>
                <ol role="list">
        \(createPageList(sections: sections))        </ol>
            </nav>
        </body>
        </html>
        """
    }
    
    private static func createOPF(book: Book) -> String {
        let uuid = UUID().uuidString
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss'Z'"
        let modifiedDate = dateFormatter.string(from: Date())
        
        var manifestItems = ""
        var spineItems = ""
        
        // 添加封面到 manifest（如果存在）
        if let coverPath = book.cover, !coverPath.isEmpty {
            let coverURL = URL(fileURLWithPath: coverPath)
            let coverExtension = coverURL.pathExtension.lowercased()
            let coverFileName = "cover.\(coverExtension)"
            
            // 确定 MIME 类型
            let mimeType = getMimeType(for: coverExtension)
            
            // 添加封面图片到 manifest（EPUB 3.3 标准方式）
            manifestItems += "                <item id=\"cover-image\" href=\"Images/\(coverFileName)\" media-type=\"\(mimeType)\" properties=\"cover-image\"/>\n"
            
            // 添加封面页面到 manifest
            manifestItems += "                <item id=\"cover\" href=\"Text/cover.xhtml\" media-type=\"application/xhtml+xml\"/>\n"
            
            // 在 spine 的开头添加封面页面
            spineItems += "                <itemref idref=\"cover\"/>\n"
        }
        
        // 添加导航文档
        manifestItems += "                <item id=\"nav\" href=\"nav.xhtml\" media-type=\"application/xhtml+xml\" properties=\"nav\"/>\n"
        
        // 添加CSS
        manifestItems += "                <item id=\"css\" href=\"Styles/stylesheet.css\" media-type=\"text/css\"/>\n"
        
        // 添加章节
        for (index, _) in book.sections.enumerated() {
            let filename = String(format: "chapter_%03d.xhtml", index + 1)
            let id = String(format: "chapter_%03d", index + 1)
            manifestItems += "                <item id=\"\(id)\" href=\"Text/\(filename)\" media-type=\"application/xhtml+xml\"/>\n"
            spineItems += "                <itemref idref=\"\(id)\"/>\n"
        }
        
        let opfContent = """
        <?xml version="1.0" encoding="UTF-8"?>
        <package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="BookId" 
                 prefix="rendition: http://www.idpf.org/vocab/rendition/# 
                         schema: http://schema.org/ 
                         ibooks: http://vocabulary.itunes.apple.com/rdf/ibooks/vocabulary-extensions-1.0/ 
                         a11y: http://www.idpf.org/epub/vocab/package/a11y/# 
                         dcterms: http://purl.org/dc/terms/">
            <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
                <!-- 基本标识信息 -->
                <dc:identifier id="BookId">urn:uuid:\(uuid)</dc:identifier>
                <dc:title id="title">\(book.bookname)</dc:title>
                <dc:creator id="creator">\(book.author)</dc:creator>
                <dc:language>zh-CN</dc:language>
                <dc:publisher id="publisher">EpubConverter</dc:publisher>
                <dc:type>Text</dc:type>
                <dc:date>\(modifiedDate.prefix(10))</dc:date>
                <dc:rights>All rights reserved</dc:rights>
                
                <!-- 修改时间 -->
                <meta property="dcterms:modified">\(modifiedDate)</meta>
                
                \(book.cover != nil ? "                <!-- 封面信息（EPUB 2 兼容） -->\n                <meta name=\"cover\" content=\"cover-image\"/>\n                \n" : "")                <!-- 标题和作者角色信息 -->
                <meta refines="#title" property="title-type">main</meta>
                <meta refines="#title" property="display-seq">1</meta>
                <meta refines="#creator" property="role" scheme="marc:relators">aut</meta>
                <meta refines="#creator" property="display-seq">1</meta>
                <meta refines="#publisher" property="role" scheme="marc:relators">pbl</meta>
                
                <!-- 辅助功能元数据 -->
                <meta property="schema:accessibilityFeature">structuralNavigation</meta>
                <meta property="schema:accessibilityFeature">tableOfContents</meta>
                <meta property="schema:accessibilityFeature">readingOrder</meta>
                <meta property="schema:accessibilityFeature">printPageNumbers</meta>
                <meta property="schema:accessibilityFeature">displayTransformability</meta>
                <meta property="schema:accessibilityHazard">none</meta>
                <meta property="schema:accessibilityHazard">noFlashingHazard</meta>
                <meta property="schema:accessibilityHazard">noSoundHazard</meta>
                <meta property="schema:accessibilityHazard">noMotionSimulationHazard</meta>
                <meta property="schema:accessMode">textual</meta>
                <meta property="schema:accessMode">visual</meta>
                <meta property="schema:accessModeSufficient">textual</meta>
                <meta property="schema:accessModeSufficient">textual,visual</meta>
                <meta property="schema:accessibilitySummary">This publication conforms to EPUB Accessibility 1.1 - WCAG 2.1 Level AA. The publication is screen reader friendly and contains structured navigation.</meta>
                
                <!-- EPUB 3.3 推荐的额外元数据 -->
                <meta property="rendition:layout">reflowable</meta>
                <meta property="rendition:orientation">auto</meta>
                <meta property="rendition:spread">auto</meta>
                
                <!-- 生成工具信息 -->
                <meta property="dcterms:creator">EpubConverter v1.0</meta>
            </metadata>
            <manifest>
        \(manifestItems)            </manifest>
            <spine>
        \(spineItems)            </spine>
        </package>
        """
        
        return opfContent
    }
    
    private static func zipEpub(from sourceDir: URL, to destinationURL: URL) throws {
        // 统一使用自定义ZIP压缩实现，支持所有平台
        try createZipArchiveOptimized(sourceDirectory: sourceDir, destinationURL: destinationURL)
    }
    
    private static func createZipArchiveOptimized(sourceDirectory: URL, destinationURL: URL) throws {
        let fileManager = FileManager.default
        
        // Get all files in the source directory recursively
        guard let enumerator = fileManager.enumerator(at: sourceDirectory, includingPropertiesForKeys: [.isRegularFileKey, .fileSizeKey], options: [.skipsHiddenFiles]) else {
            throw EpubGeneratorError.zipFailed("Failed to enumerate source directory")
        }
        
        // Collect all files first
        var allFiles: [(url: URL, relativePath: String, size: Int)] = []
        for case let fileURL as URL in enumerator {
            let resourceValues = try fileURL.resourceValues(forKeys: [.isRegularFileKey, .fileSizeKey])
            guard resourceValues.isRegularFile == true else { continue }
            
            let relativePath = String(fileURL.path.dropFirst(sourceDirectory.path.count + 1))
            let fileSize = resourceValues.fileSize ?? 0
            allFiles.append((url: fileURL, relativePath: relativePath, size: fileSize))
        }
        
        // Sort files to ensure mimetype is first
        allFiles.sort { first, second in
            if first.relativePath == "mimetype" { return true }
            if second.relativePath == "mimetype" { return false }
            return first.relativePath < second.relativePath
        }
        
        // Create output stream for better memory management
        guard let outputStream = OutputStream(url: destinationURL, append: false) else {
            throw EpubGeneratorError.zipFailed("Failed to create output stream")
        }
        outputStream.open()
        defer { outputStream.close() }
        
        var currentOffset: UInt32 = 0
        var fileEntries: [(name: String, localHeaderOffset: UInt32, crc32: UInt32, compressedSize: UInt32, uncompressedSize: UInt32)] = []
        
        // Process files with streaming approach
        for file in allFiles {
            let localHeaderOffset = currentOffset
            
            // Read file data in chunks for large files
            let fileData: Data
            if file.size > 1024 * 1024 { // 1MB threshold
                fileData = try readFileInChunks(url: file.url)
            } else {
                fileData = try Data(contentsOf: file.url)
            }
            
            let crc32 = calculateCRC32Fast(data: fileData)
            
            // Add file to ZIP with streaming
            let (compressedSize, uncompressedSize) = try addFileToZipStream(
                outputStream: outputStream,
                fileName: file.relativePath,
                fileData: fileData,
                crc32: crc32,
                offset: &currentOffset
            )
            
            // Store file entry info for central directory
            fileEntries.append((
                name: file.relativePath,
                localHeaderOffset: localHeaderOffset,
                crc32: crc32,
                compressedSize: compressedSize,
                uncompressedSize: uncompressedSize
            ))
        }
        
        // Write central directory
        let centralDirectoryOffset = currentOffset
        var centralDirectorySize: UInt32 = 0
        
        for entry in fileEntries {
            let entryData = try createCentralDirectoryEntry(
                fileName: entry.name,
                localHeaderOffset: entry.localHeaderOffset,
                crc32: entry.crc32,
                compressedSize: entry.compressedSize,
                uncompressedSize: entry.uncompressedSize
            )
            
            try writeDataToStream(outputStream, data: entryData)
            centralDirectorySize += UInt32(entryData.count)
            currentOffset += UInt32(entryData.count)
        }
        
        // Write end of central directory record
        let endRecord = try createEndOfCentralDirectory(
            centralDirectoryOffset: centralDirectoryOffset,
            centralDirectorySize: centralDirectorySize,
            totalEntries: UInt16(fileEntries.count)
        )
        try writeDataToStream(outputStream, data: endRecord)
    }
    
    // 数据压缩方法
    @available(iOS 13.0, *)
    private static func compressData(_ data: Data) throws -> Data {
        return try data.withUnsafeBytes { bytes in
            let buffer = UnsafeMutablePointer<UInt8>.allocate(capacity: data.count)
            defer { buffer.deallocate() }
            
            let compressedSize = compression_encode_buffer(
                buffer, data.count,
                bytes.bindMemory(to: UInt8.self).baseAddress!, data.count,
                nil, COMPRESSION_ZLIB
            )
            
            guard compressedSize > 0 else {
                throw EpubGeneratorError.zipFailed("Compression failed")
            }
            
            return Data(bytes: buffer, count: compressedSize)
        }
    }
    
    // 优化的文件读取方法
    private static func readFileInChunks(url: URL) throws -> Data {
        guard let inputStream = InputStream(url: url) else {
            throw EpubGeneratorError.fileNotFound(url.path)
        }
        
        inputStream.open()
        defer { inputStream.close() }
        
        var data = Data()
        let bufferSize = 8192
        let buffer = UnsafeMutablePointer<UInt8>.allocate(capacity: bufferSize)
        defer { buffer.deallocate() }
        
        while inputStream.hasBytesAvailable {
            let bytesRead = inputStream.read(buffer, maxLength: bufferSize)
            if bytesRead > 0 {
                data.append(buffer, count: bytesRead)
            } else if bytesRead < 0 {
                throw EpubGeneratorError.zipFailed("Failed to read file: \(url.path)")
            }
        }
        
        return data
    }
    
    // 流式ZIP文件写入方法
    private static func addFileToZipStream(
        outputStream: OutputStream,
        fileName: String,
        fileData: Data,
        crc32: UInt32,
        offset: inout UInt32
    ) throws -> (compressedSize: UInt32, uncompressedSize: UInt32) {
        let fileNameData = fileName.data(using: .utf8) ?? Data()
        let uncompressedSize = UInt32(fileData.count)
        
        // 对于mimetype文件，不压缩以符合EPUB规范
        let shouldCompress = fileName != "mimetype" && fileData.count > 100
        let (compressedData, compressionMethod): (Data, UInt16) = {
            if shouldCompress {
                // 使用系统压缩API
                if #available(iOS 13.0, *) {
                    do {
                        let compressed = try compressData(fileData)
                        // 只有在压缩效果明显时才使用压缩
                        if compressed.count < fileData.count * 9 / 10 {
                            return (compressed, 8) // deflate
                        }
                    } catch {
                        // 压缩失败，使用原始数据
                    }
                }
            }
            return (fileData, 0) // stored
        }()
        
        let compressedSize = UInt32(compressedData.count)
        
        // 创建本地文件头
        var header = Data()
        
        // Local file header signature
        header.append(contentsOf: [0x50, 0x4B, 0x03, 0x04]) // "PK\003\004"
        
        // Version needed to extract (2.0)
        header.append(contentsOf: [0x14, 0x00])
        
        // General purpose bit flag
        header.append(contentsOf: [0x00, 0x00])
        
        // Compression method
        header.append(contentsOf: withUnsafeBytes(of: compressionMethod.littleEndian) { Array($0) })
        
        // Last mod file time & date
        header.append(contentsOf: [0x00, 0x00, 0x00, 0x00])
        
        // CRC-32
        header.append(contentsOf: withUnsafeBytes(of: crc32.littleEndian) { Array($0) })
        
        // Compressed size
        header.append(contentsOf: withUnsafeBytes(of: compressedSize.littleEndian) { Array($0) })
        
        // Uncompressed size
        header.append(contentsOf: withUnsafeBytes(of: uncompressedSize.littleEndian) { Array($0) })
        
        // File name length
        header.append(contentsOf: withUnsafeBytes(of: UInt16(fileNameData.count).littleEndian) { Array($0) })
        
        // Extra field length
        header.append(contentsOf: [0x00, 0x00])
        
        // File name
        header.append(fileNameData)
        
        // 写入头部
        try writeDataToStream(outputStream, data: header)
        offset += UInt32(header.count)
        
        // 写入文件数据
        try writeDataToStream(outputStream, data: compressedData)
        offset += compressedSize
        
        return (compressedSize, uncompressedSize)
    }
    
    // 辅助方法：向流写入数据
    private static func writeDataToStream(_ outputStream: OutputStream, data: Data) throws {
        try data.withUnsafeBytes { bytes in
            let buffer = bytes.bindMemory(to: UInt8.self)
            var totalWritten = 0
            
            while totalWritten < data.count {
                let bytesWritten = outputStream.write(
                    buffer.baseAddress!.advanced(by: totalWritten),
                    maxLength: data.count - totalWritten
                )
                
                if bytesWritten < 0 {
                    throw EpubGeneratorError.zipFailed("Failed to write to output stream")
                }
                
                totalWritten += bytesWritten
            }
        }
    }
    
    // 保留原始方法作为备用
    private static func addFileToZip(data: inout Data, fileName: String, fileData: Data, crc32: UInt32) throws {
        let fileNameData = fileName.data(using: .utf8) ?? Data()
        
        // Local file header signature
        data.append(contentsOf: [0x50, 0x4B, 0x03, 0x04]) // "PK\003\004"
        
        // Version needed to extract (2.0)
        data.append(contentsOf: [0x14, 0x00])
        
        // General purpose bit flag
        data.append(contentsOf: [0x00, 0x00])
        
        // Compression method (0 = stored)
        data.append(contentsOf: [0x00, 0x00])
        
        // Last mod file time & date
        data.append(contentsOf: [0x00, 0x00, 0x00, 0x00])
        
        // CRC-32
        data.append(contentsOf: withUnsafeBytes(of: crc32.littleEndian) { Array($0) })
        
        // Compressed size
        data.append(contentsOf: withUnsafeBytes(of: UInt32(fileData.count).littleEndian) { Array($0) })
        
        // Uncompressed size
        data.append(contentsOf: withUnsafeBytes(of: UInt32(fileData.count).littleEndian) { Array($0) })
        
        // File name length
        data.append(contentsOf: withUnsafeBytes(of: UInt16(fileNameData.count).littleEndian) { Array($0) })
        
        // Extra field length
        data.append(contentsOf: [0x00, 0x00])
        
        // File name
        data.append(fileNameData)
        
        // File data
        data.append(fileData)
    }
    
    // 创建中央目录条目数据
    private static func createCentralDirectoryEntry(
        fileName: String,
        localHeaderOffset: UInt32,
        crc32: UInt32,
        compressedSize: UInt32,
        uncompressedSize: UInt32
    ) throws -> Data {
        let fileNameData = fileName.data(using: .utf8) ?? Data()
        var data = Data()
        
        // 确定压缩方法
        let compressionMethod: UInt16 = (compressedSize == uncompressedSize) ? 0 : 8
        
        // Central directory file header signature
        data.append(contentsOf: [0x50, 0x4B, 0x01, 0x02]) // "PK\001\002"
        
        // Version made by
        data.append(contentsOf: [0x14, 0x00])
        
        // Version needed to extract
        data.append(contentsOf: [0x14, 0x00])
        
        // General purpose bit flag
        data.append(contentsOf: [0x00, 0x00])
        
        // Compression method
        data.append(contentsOf: withUnsafeBytes(of: compressionMethod.littleEndian) { Array($0) })
        
        // Last mod file time & date
        data.append(contentsOf: [0x00, 0x00, 0x00, 0x00])
        
        // CRC-32
        data.append(contentsOf: withUnsafeBytes(of: crc32.littleEndian) { Array($0) })
        
        // Compressed size
        data.append(contentsOf: withUnsafeBytes(of: compressedSize.littleEndian) { Array($0) })
        
        // Uncompressed size
        data.append(contentsOf: withUnsafeBytes(of: uncompressedSize.littleEndian) { Array($0) })
        
        // File name length
        data.append(contentsOf: withUnsafeBytes(of: UInt16(fileNameData.count).littleEndian) { Array($0) })
        
        // Extra field length
        data.append(contentsOf: [0x00, 0x00])
        
        // File comment length
        data.append(contentsOf: [0x00, 0x00])
        
        // Disk number start
        data.append(contentsOf: [0x00, 0x00])
        
        // Internal file attributes
        data.append(contentsOf: [0x00, 0x00])
        
        // External file attributes
        data.append(contentsOf: [0x00, 0x00, 0x00, 0x00])
        
        // Relative offset of local header
        data.append(contentsOf: withUnsafeBytes(of: localHeaderOffset.littleEndian) { Array($0) })
        
        // File name
        data.append(fileNameData)
        
        return data
    }
    
    // 保留原始方法作为备用
    private static func addCentralDirectoryEntry(data: inout Data, fileName: String, localHeaderOffset: UInt32, crc32: UInt32, size: UInt32) throws {
        let fileNameData = fileName.data(using: .utf8) ?? Data()
        
        // Central directory file header signature
        data.append(contentsOf: [0x50, 0x4B, 0x01, 0x02]) // "PK\001\002"
        
        // Version made by
        data.append(contentsOf: [0x14, 0x00])
        
        // Version needed to extract
        data.append(contentsOf: [0x14, 0x00])
        
        // General purpose bit flag
        data.append(contentsOf: [0x00, 0x00])
        
        // Compression method (0 = stored)
        data.append(contentsOf: [0x00, 0x00])
        
        // Last mod file time & date
        data.append(contentsOf: [0x00, 0x00, 0x00, 0x00])
        
        // CRC-32
        data.append(contentsOf: withUnsafeBytes(of: crc32.littleEndian) { Array($0) })
        
        // Compressed size
        data.append(contentsOf: withUnsafeBytes(of: size.littleEndian) { Array($0) })
        
        // Uncompressed size
        data.append(contentsOf: withUnsafeBytes(of: size.littleEndian) { Array($0) })
        
        // File name length
        data.append(contentsOf: withUnsafeBytes(of: UInt16(fileNameData.count).littleEndian) { Array($0) })
        
        // Extra field length
        data.append(contentsOf: [0x00, 0x00])
        
        // File comment length
        data.append(contentsOf: [0x00, 0x00])
        
        // Disk number start
        data.append(contentsOf: [0x00, 0x00])
        
        // Internal file attributes
        data.append(contentsOf: [0x00, 0x00])
        
        // External file attributes
        data.append(contentsOf: [0x00, 0x00, 0x00, 0x00])
        
        // Relative offset of local header
        data.append(contentsOf: withUnsafeBytes(of: localHeaderOffset.littleEndian) { Array($0) })
        
        // File name
        data.append(fileNameData)
    }
    
    // 创建结束目录记录数据
    private static func createEndOfCentralDirectory(
        centralDirectoryOffset: UInt32,
        centralDirectorySize: UInt32,
        totalEntries: UInt16
    ) throws -> Data {
        var data = Data()
        
        // End of central directory record
        data.append(contentsOf: [0x50, 0x4B, 0x05, 0x06]) // "PK\005\006"
        
        // Number of this disk
        data.append(contentsOf: [0x00, 0x00])
        
        // Disk where central directory starts
        data.append(contentsOf: [0x00, 0x00])
        
        // Number of central directory records on this disk
        data.append(contentsOf: withUnsafeBytes(of: totalEntries.littleEndian) { Array($0) })
        
        // Total number of central directory records
        data.append(contentsOf: withUnsafeBytes(of: totalEntries.littleEndian) { Array($0) })
        
        // Size of central directory
        data.append(contentsOf: withUnsafeBytes(of: centralDirectorySize.littleEndian) { Array($0) })
        
        // Offset of start of central directory
        data.append(contentsOf: withUnsafeBytes(of: centralDirectoryOffset.littleEndian) { Array($0) })
        
        // ZIP file comment length
        data.append(contentsOf: [0x00, 0x00])
        
        return data
    }
    
    // 保留原始方法作为备用
    private static func addEndOfCentralDirectory(data: inout Data, centralDirectoryOffset: UInt32, centralDirectorySize: UInt32, totalEntries: UInt16) throws {
        // End of central directory record
        data.append(contentsOf: [0x50, 0x4B, 0x05, 0x06]) // "PK\005\006"
        
        // Number of this disk
        data.append(contentsOf: [0x00, 0x00])
        
        // Disk where central directory starts
        data.append(contentsOf: [0x00, 0x00])
        
        // Number of central directory records on this disk
        data.append(contentsOf: withUnsafeBytes(of: totalEntries.littleEndian) { Array($0) })
        
        // Total number of central directory records
        data.append(contentsOf: withUnsafeBytes(of: totalEntries.littleEndian) { Array($0) })
        
        // Size of central directory
        data.append(contentsOf: withUnsafeBytes(of: centralDirectorySize.littleEndian) { Array($0) })
        
        // Offset of start of central directory
        data.append(contentsOf: withUnsafeBytes(of: centralDirectoryOffset.littleEndian) { Array($0) })
        
        // ZIP file comment length
        data.append(contentsOf: [0x00, 0x00])
    }
    
    // 优化的CRC32计算 - 使用系统API
    private static func calculateCRC32Fast(data: Data) -> UInt32 {
        return data.withUnsafeBytes { bytes in
            let crc = crc32(0, bytes.bindMemory(to: UInt8.self).baseAddress, UInt32(data.count))
            return UInt32(crc)
        }
    }
    
    // 保留原始方法作为备用
    private static func calculateCRC32(data: Data) -> UInt32 {
        var crc: UInt32 = 0xFFFFFFFF
        let polynomial: UInt32 = 0xEDB88320
        
        for byte in data {
            crc ^= UInt32(byte)
            for _ in 0..<8 {
                if crc & 1 != 0 {
                    crc = (crc >> 1) ^ polynomial
                } else {
                    crc >>= 1
                }
            }
        }
        
        return ~crc
    }
    
    // Error type for EPUB generation
    enum EpubGeneratorError: Error {
        case zipFailed(String)
        case fileNotFound(String)
        case invalidPath(String)
        
        var localizedDescription: String {
            switch self {
            case .zipFailed(let message):
                return "ZIP creation failed: \(message)"
            case .fileNotFound(let path):
                return "File not found: \(path)"
            case .invalidPath(let path):
                return "Invalid path: \(path)"
            }
        }
    }
}