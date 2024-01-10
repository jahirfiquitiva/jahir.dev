import { allBlogs as generatedBlogs, type Blog } from 'contentlayer/generated';

export type SimpleBlog = Pick<
  Blog,
  | 'slug'
  | 'title'
  | 'summary'
  | 'date'
  | 'color'
  | 'hero'
  | 'heroMeta'
  | 'link'
  | 'inProgress'
  | 'readingTime'
>;

export const sortBlogPostsByDate = (a: SimpleBlog, b: SimpleBlog) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export const allSimpleBlogs: Array<SimpleBlog> = generatedBlogs.map((b) => ({
  ...b,
  _id: undefined,
  _raw: undefined,
  body: undefined,
  keywords: undefined,
  seoKeywords: undefined,
  heroSource: undefined,
  devToId: undefined,
}));
