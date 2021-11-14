/* eslint-disable */
import removeMd from 'remove-markdown';

import pick from './../lib/pick';

import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';

export const getPostDescription = (
  description?: string | null,
  content?: string | null,
  defaultDescription?: string | null,
  maxCharacters?: number,
): string => {
  if (description && (description?.length || 0) > 0) return description;
  if (!content || (content?.length || 0) <= 0) {
    return defaultDescription || '';
  }
  const noTitles = content
    ?.split(/[\r\n]+/gm)
    ?.filter((it: string) => !it.startsWith('#'))
    ?.join('  ')
    ?.trim();
  const plainText = removeMd(noTitles);
  const noNewLines = plainText.replace(/[\r\n]+/gm, '  ').trim();
  const splitContent = noNewLines.substring(0, maxCharacters || 140);
  return splitContent.length > 0
    ? `${splitContent}...`
    : defaultDescription || '';
};

export const getAllPosts = (fields: (keyof Blog)[] = []): Array<Blog> => {
  const filteredPosts = allBlogs
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(
      (it) => it.title?.length > 0 && it.slug?.length > 0 && !it.inProgress,
    );
  return fields && fields.length
    ? filteredPosts.map((post) => pick(post, fields))
    : filteredPosts;
};
