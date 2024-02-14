import type { MetadataRoute } from 'next';

import { allReadableBlogs } from '@/utils/blog';
import { getDate } from '@/utils/date';

const today = ((): Date => {
  const d = new Date();
  // Colombia TimeZone (UTC-5)
  d.setUTCHours(-5);
  return d;
})();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = allReadableBlogs
    .filter((it) => !Boolean(it.link))
    .map((post) => ({
      url: `https://jahir.dev/blog/${post.slug}`,
      lastModified: getDate(post.date)?.toISOString().split('T')[0],
      priority: 0.6,
    }));

  const routes = [
    '',
    'about',
    'blog',
    'donate',
    'projects',
    'uses',
    'colophon',
  ].map((route) => ({
    url: `https://jahir.dev/${route}`,
    lastModified: today.toISOString().split('T')[0],
    priority: route ? 0.8 : 1,
  }));

  return [...routes, ...blogs].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0),
  );
}
