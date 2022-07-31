export const getDomainFromUrl = (url?: string | null): string | null => {
  if (!url) return null;
  const inx = url.lastIndexOf('/');
  const cleanUrl = url.substring(0, inx + 1);
  return cleanUrl.replace(/(^\w+:|^)\/\//, '').replace(/\//g, '');
};
