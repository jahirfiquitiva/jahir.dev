import { pick } from 'contentlayer/client';
import { cache } from 'react';

import { db } from '@/lib/planetscale';
import { allBlogs as generatedBlogs, type Blog } from 'contentlayer/generated';

const simpleBlogProps = [
  'slug',
  'title',
  'excerpt',
  'hero',
  'heroMeta',
  'date',
  'link',
  'color',
  'readingTime',
  'inProgress',
] as const as Array<keyof Blog>;

export type SimpleBlog = Pick<Blog, (typeof simpleBlogProps)[number]>;

export const sortBlogPostsByDate = (a: SimpleBlog, b: SimpleBlog) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export const allSimpleBlogs: Array<SimpleBlog> = generatedBlogs.map((b) =>
  pick(b, simpleBlogProps),
);

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
        allSimpleBlogs.find((blog) => `blog--${blog.slug}` === record.slug),
      )
      .filter(Boolean) as Array<SimpleBlog>;
  } catch (e) {
    return [];
  }
});
