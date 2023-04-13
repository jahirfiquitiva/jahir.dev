import { MetadataRoute } from 'next';

import { allBlogs } from 'contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = allBlogs.map((post) => ({
    url: `https://jahir.dev/blog/${post.slug}`,
    lastModified: post.date.split('T')[0],
    priority: 0.6,
  }));

  const routes = [
    '',
    'about',
    'blog',
    'dashboard',
    'donate',
    'projects',
    'uses',
  ].map((route) => ({
    url: `https://jahir.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    priority: route ? 0.8 : 1,
  }));

  return [...routes, ...blogs];
}
