export const getUrlDomain = (
  url?: string | null,
  short?: boolean,
): string | null => {
  if (!url) return null;
  const inx = url.lastIndexOf('/');
  let cleanUrl = url.substring(0, inx + 1);
  cleanUrl = cleanUrl.replace(/(^\w+:|^)\/\//, '').replace(/\//g, '');
  if (short) return cleanUrl.replace('www.', '');
  return cleanUrl;
};
