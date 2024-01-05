import { cache } from 'react';

import { getBlogPosts, type Blog } from '@/lib/blog';
import { db } from '@/lib/planetscale';

export const sortBlogPostsByDate = (a: Blog, b: Blog) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export const getPopularPosts = cache(async (): Promise<Array<Blog>> => {
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
        getBlogPosts().find((blog) => `blog--${blog.slug}` === record.slug),
      )
      .filter(Boolean) as Array<Blog>;
  } catch (e) {
    return [];
  }
});
