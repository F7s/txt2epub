export function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function fixEncodingIssues(content: string): string {
  let fixed = content;

  const encodingFixes: Record<string, string> = {
    'â€™': '\'',
    'â€œ': '"',
    'â€': '"',
    'â€¦': '…',
    'â€”': '—',
    'â€“': '–',
    'Â': '',
    'Ã¢': 'â',
    'Ã¡': 'á',
    'Ã©': 'é'
  };

  for (const [wrong, correct] of Object.entries(encodingFixes)) {
    fixed = fixed.split(wrong).join(correct);
  }

  fixed = fixed.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
  fixed = fixed.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  return fixed;
}

export function formatContent(content: string): string {
  return content
    .split('\n')
    .filter(line => line.trim())
    .map(line => `    <p class="content">${escapeXml(line.trim())}</p>`)
    .join('\n');
}
