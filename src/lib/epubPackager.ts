import type { ZipFileEntry } from './zipOptimizer';

export function calculateTotalFileSize(files: ZipFileEntry[]): number {
  return files.reduce((sum, file) => {
    if (typeof file.content === 'string') {
      return sum + new TextEncoder().encode(file.content).length;
    }
    return sum + file.content.byteLength;
  }, 0);
}

function calculateAverageFileSize(files: ZipFileEntry[]): number {
  if (files.length === 0) return 0;
  return calculateTotalFileSize(files) / files.length;
}

export async function generatePackagedEpub(
  fileEntries: ZipFileEntry[],
  chapterCount: number,
  generateStandardZip: () => Promise<Blob>
): Promise<Blob> {
  const totalSize = calculateTotalFileSize(fileEntries);
  const avgFileSize = calculateAverageFileSize(fileEntries);

  const shouldUseWorkers =
    fileEntries.length > 50 ||
    chapterCount > 100 ||
    totalSize > 5 * 1024 * 1024 ||
    avgFileSize > 50 * 1024;

  if (!shouldUseWorkers) {
    console.log('📊 资源优化: 文件规模较小，使用单线程优化压缩');
    console.log(`   - 文件数量: ${fileEntries.length}, 章节数量: ${chapterCount}`);
    console.log(`   - 总大小: ${(totalSize / 1024).toFixed(2)}KB, 平均: ${(avgFileSize / 1024).toFixed(2)}KB`);
    return generateStandardZip();
  }

  console.log('📊 多线程优化决策:');
  console.log(`   - 文件数量: ${fileEntries.length} (阈值: 50)`);
  console.log(`   - 章节数量: ${chapterCount} (阈值: 100)`);
  console.log(`   - 总大小: ${(totalSize / 1024 / 1024).toFixed(2)}MB (阈值: 5MB)`);
  console.log(`   - 平均大小: ${(avgFileSize / 1024).toFixed(2)}KB (阈值: 50KB)`);
  console.log('   → 启用多线程优化');

  const { FflateWorkerZipOptimizer } = await import('./fflateZipOptimizer');
  const workerOptimizer = new FflateWorkerZipOptimizer({
    streamThreshold: 256 * 1024,
    compressionThreshold: 50,
    compressionEfficiencyThreshold: 0.1,
    chunkSize: 8192
  });

  const blob = await workerOptimizer.generateOptimizedZipWithWorkers(fileEntries);
  console.log('🏁 多线程压缩完成！');
  return blob;
}
