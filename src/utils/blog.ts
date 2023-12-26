import { getBlogPosts, type Blog } from '@/lib/blog';

const hiddenBlogs = ['about', 'donate', 'uses'];
const generatedBlogs = getBlogPosts();
export const allReadableBlogs = generatedBlogs.filter(
  (it) => !hiddenBlogs.includes(it.slug),
);

export const getBlog = (
  slug?: string | null,
  readableOnly?: boolean,
): Blog | undefined =>
  slug
    ? (readableOnly ? allReadableBlogs : generatedBlogs).find(
        (it) => it.slug === slug,
      )
    : undefined;
