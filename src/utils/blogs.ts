import { allBlogs as generatedBlogs, type Blog } from 'contentlayer/generated';

const hiddenBlogs = ['about', 'donate', 'uses'];

export const allReadableBlogs = generatedBlogs.filter(
  (it) => !hiddenBlogs.includes(it.slug),
);

export const getBlog = (slug?: string | null): Blog | undefined => {
  const blog = slug ? generatedBlogs.find((it) => it.slug === slug) : undefined;
  console.error(`getting blog with slug: ${slug}`);
  console.error(`blog found ? [${blog?.title}]`);
  return blog;
};
