import { cache } from 'react';

import { db } from '@/lib/planetscale';
import { allBlogs as generatedBlogs, type Blog } from 'contentlayer/generated';

export type SimpleBlog = Pick<
  Blog,
  | 'slug'
  | 'title'
  | 'excerpt'
  | 'hero'
  | 'heroMeta'
  | 'date'
  | 'link'
  | 'color'
  | 'readingTime'
  | 'inProgress'
>;

export const sortBlogPostsByDate = (a: SimpleBlog, b: SimpleBlog) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export const allSimpleBlogs: Array<SimpleBlog> = generatedBlogs.map((b) => ({
  ...b,
  _id: undefined,
  _raw: undefined,
  body: undefined,
}));

export const getFeaturedPosts = cache(async (): Promise<Array<SimpleBlog>> => {
  try {
    const sortedPosts = allSimpleBlogs.sort(sortBlogPostsByDate);
    const latestPost = sortedPosts[0];
    const [mostViewedPost] = await db
      .selectFrom('counters')
      .select(['slug', 'views'])
      .where('slug', '!=', 'blog--uses')
      .where('slug', '!=', `blog--${latestPost.slug}`)
      .where('views', '>', 1)
      .orderBy(['views desc'])
      .limit(1)
      .execute();
    const otherPosts = sortedPosts.filter(
      (it) =>
        mostViewedPost.slug !== `blog--${it.slug}` &&
        latestPost.slug !== `blog--${it.slug}`,
    );
    const randomPost =
      otherPosts[Math.floor(Math.random() * otherPosts.length)];
    return [
      latestPost,
      sortedPosts.find((it) => mostViewedPost.slug === `blog--${it.slug}`),
      randomPost,
    ].filter(Boolean) as Array<SimpleBlog>;
  } catch (e) {
    return [];
  }
});
