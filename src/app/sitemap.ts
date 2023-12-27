import type { MetadataRoute } from 'next';

import { getReadableBlogs } from '@/utils/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = (await getReadableBlogs())
    .filter((it) => !Boolean(it.link))
    .map((post) => ({
      url: `https://jahir.dev/blog/${post.slug}`,
      lastModified: post.date.split('T')[0],
      priority: 0.6,
    }));

  const routes = ['', 'about', 'blog', 'donate', 'projects', 'uses'].map(
    (route) => ({
      url: `https://jahir.dev/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      priority: route ? 0.8 : 1,
    }),
  );

  return [...routes, ...blogs].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0),
  );
}
