import { allBlogs, type Blog } from 'contentlayer/generated';

export type CleanBlog = Omit<
  Blog,
  '_id' | '_raw' | 'type' | 'keywords' | 'body'
> & { code: string };

export type PartialBlog = Omit<
  CleanBlog,
  'code' | 'seoKeywords' | 'heroSource'
>;

const allowInProgress = process.env.NODE_ENV === 'development';

export const allReadableBlogsWithContent: Array<CleanBlog> = allBlogs
  .filter((it) => (allowInProgress ? true : !it.inProgress))
  .map((b: Partial<Blog>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, _raw, type, keywords, body, ...blog } = b;
    const code = `${body?.code || ''}`;
    return { ...blog, code } as CleanBlog;
  });

export const allReadableBlogs: Array<PartialBlog> =
  allReadableBlogsWithContent.map((b: Partial<CleanBlog>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { code, seoKeywords, heroSource, ...blog } = b;
    return blog as PartialBlog;
  });

export const sortBlogPostsByDate = (a: PartialBlog, b: PartialBlog) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();
