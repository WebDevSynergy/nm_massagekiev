export function getShortDescription(text: string, maxLength = 160): string {
  if (!text) return '';

  const clean = text.trim().replace(/\s+/g, ' ');

  if (clean.length <= maxLength) return clean;

  const truncated = clean.slice(0, maxLength);
  const lastPunctuation = truncated.lastIndexOf('.');
  const lastSpace = truncated.lastIndexOf(' ');

  const cutoffIndex = lastPunctuation > 50 ? lastPunctuation + 1 : lastSpace;
  return clean.slice(0, cutoffIndex).trim();
}
