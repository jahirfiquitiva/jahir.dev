import type { MetadataRoute } from 'next';

import { allReadableBlogs, sortBlogPostsByDate } from '@/utils/blog';
import { getDate } from '@/utils/date';

const today = ((): Date => {
  const d = new Date();
  // Colombia TimeZone (UTC-5)
  d.setUTCHours(-5);
  return d;
})();

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = allReadableBlogs
    .filter((it) => !Boolean(it.link))
    .sort(sortBlogPostsByDate)
    .map((post) => ({
      url: `https://jahir.dev/blog/${post.slug}`,
      lastModified: getDate(post.date)?.toISOString().split('T')[0],
      priority: 0.6,
    }));

  const routes = [
    '',
    'about',
    'blog',
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
