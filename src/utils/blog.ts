import { cache } from 'react';

import { db } from '@/lib/planetscale';
import { allBlogs as generatedBlogs, type Blog } from 'contentlayer/generated';

export type SimpleBlog = Omit<Blog, '_raw' | 'body' | 'mdx'>;

const hiddenBlogs = ['about', 'donate', 'uses'];

export const sortBlogPostsByDate = (a: SimpleBlog, b: SimpleBlog) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export const allReadableBlogs: Array<SimpleBlog> = generatedBlogs
  .filter((it) => !hiddenBlogs.includes(it.slug))
  .map((b) => ({ ...b, _raw: undefined, body: undefined, mdx: undefined }));

export const getBlog = (slug?: string | null): Blog | undefined => {
  if (!slug) return undefined;
  return generatedBlogs
    .filter((it) => !hiddenBlogs.includes(it.slug))
    .find((b) => b.slug === slug);
};

export const getPopularPosts = cache(async (): Promise<Array<SimpleBlog>> => {
  try {
    const topPosts = await db
      .selectFrom('counters')
      .select(['slug', 'views'])
      .where('slug', '!=', 'blog--uses')
      .orderBy(['views desc'])
      .limit(3)
      .execute();
    return topPosts
      .map((record) =>
        allReadableBlogs.find((blog) => `blog--${blog.slug}` === record.slug),
      )
      .filter(Boolean) as Array<SimpleBlog>;
  } catch (e) {
    return [];
  }
});
