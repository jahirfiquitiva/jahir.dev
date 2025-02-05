import { blogs as allBlogs, type Blog } from '@/content';

export type PartialBlog = Omit<Blog, 'code' | 'keywords' | 'heroSource'>;

type PossibleEnv = 'development' | 'preview' | 'production';
const { NODE_ENV, VERCEL_ENV } = process.env as {
  NODE_ENV?: PossibleEnv;
  VERCEL_ENV?: PossibleEnv;
};
const currentEnvironment = VERCEL_ENV || NODE_ENV;
console.error({ currentEnvironment });
const allowDrafts = currentEnvironment !== 'production';

export const allReadableBlogsWithContent: Array<Blog> = allowDrafts
  ? allBlogs
  : allBlogs.filter((it) => !it.draft);

export const allReadableBlogs: Array<PartialBlog> =
  allReadableBlogsWithContent.map((b: Partial<Blog>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { code, keywords, heroSource, ...blog } = b;
    return blog as PartialBlog;
  });

export const sortBlogPostsByDate = (a: PartialBlog, b: PartialBlog) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();
