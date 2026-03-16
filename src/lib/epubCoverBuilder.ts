import type { ZipFileEntry } from './zipOptimizer';
import { escapeXml } from './epubTextUtils';
import { getCoverExtension } from './epubManifestBuilder';

function fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(file);
  });
}

export async function buildCoverEntries(cover: File, title: string): Promise<ZipFileEntry[]> {
  const coverExtension = getCoverExtension(cover);
  const coverPageContent = `<?xml version="1.0" encoding="UTF-8"?>
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
    <img src="../Images/cover.${coverExtension}" alt="${escapeXml(title)} 封面" class="cover-image"/>
  </div>
</body>
</html>`;

  const coverImageBuffer = await fileToArrayBuffer(cover);
  return [
    {
      name: 'OEBPS/Text/cover.xhtml',
      content: coverPageContent,
      compress: true
    },
    {
      name: `OEBPS/Images/cover.${coverExtension}`,
      content: coverImageBuffer,
      store: true
    }
  ];
}
