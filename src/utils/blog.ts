import { getBlogPosts, type Blog } from '@/lib/blog';

const hiddenBlogs = ['about', 'donate', 'uses'];
export const getReadableBlogs = async () => {
  const generatedBlogs = await getBlogPosts();
  return generatedBlogs.filter((it) => !hiddenBlogs.includes(it.slug));
};

export const getBlog = async (
  slug?: string | null,
  readableOnly?: boolean,
): Promise<Blog | undefined> => {
  const generatedBlogs = await getBlogPosts();
  if (readableOnly) {
    const readableBlogs = generatedBlogs.filter(
      (it) => !hiddenBlogs.includes(it.slug),
    );
    return readableBlogs.find((it) => it.slug === slug);
  }
  return generatedBlogs.find((it) => it.slug === slug);
};
