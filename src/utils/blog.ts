import { blogs as allBlogs, type Blog } from '@/content';

export type PartialBlog = Omit<Blog, 'code' | 'keywords' | 'heroSource'>;

const allowInProgress = process.env.NODE_ENV === 'development';

export const allReadableBlogsWithContent: Array<Blog> = allBlogs.filter((it) =>
  allowInProgress ? true : !it.inProgress,
);

export const allReadableBlogs: Array<PartialBlog> =
  allReadableBlogsWithContent.map((b: Partial<Blog>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { code, keywords, heroSource, ...blog } = b;
    return blog as PartialBlog;
  });

export const sortBlogPostsByDate = (a: PartialBlog, b: PartialBlog) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();
