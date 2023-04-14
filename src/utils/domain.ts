export const getUrlDomain = (
  url?: string | null,
  short?: boolean,
): string | null => {
  if (!url) return null;
  try {
    const urlObj = new URL(url);
    if (short) return urlObj.hostname.replace('www.', '');
    return urlObj.hostname;
  } catch (e) {
    return '';
  }
};
