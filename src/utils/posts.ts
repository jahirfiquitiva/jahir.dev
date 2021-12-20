/* eslint-disable */
import removeMd from 'remove-markdown';

import pick from './../lib/pick';

import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';

const maxCharacters = 140;

export const getPostDescription = (
  content?: string | null,
  defaultDescription?: string | null,
): string => {
  if (defaultDescription) return defaultDescription;
  if (!content) return defaultDescription || '';

  let description = content
    ?.split(/[\r\n]+/gm)
    ?.filter((it: string) => !it.startsWith('#'))
    ?.join('\n')
    ?.split('\n')
    ?.map((text: string) => (text || '').trim())
    ?.filter((text: string) => text && text.length)
    ?.map((text: string) =>
      removeMd(text, { gfm: true, useImgAltText: true }),
    )?.[0];

  return description.length > 0
    ? `${description}...`
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
