const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.VERCEL_ENV === 'preview'
    ? process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://jahir.dev'
    : 'https://jahir.dev';

export const buildOgImageUrl = (
  path?: string,
  title?: string,
  hero?: string,
): string => {
  try {
    const url = new URL(`${baseUrl}/api/og`);
    if (path) url.searchParams.set('path', path);
    if (title) url.searchParams.set('title', title);
    if (hero) url.searchParams.set('hero', hero);
    return url.href;
  } catch (e) {
    return `${baseUrl}/api/og`;
  }
};
