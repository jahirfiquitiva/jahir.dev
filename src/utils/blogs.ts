import { allBlogs as generatedBlogs, type Blog } from 'contentlayer/generated';

const hiddenBlogs = ['about', 'donate', 'uses'];

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
