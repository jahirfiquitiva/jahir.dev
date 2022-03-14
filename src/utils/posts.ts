/* eslint-disable */
import removeMd from 'remove-markdown';

import pick from './../lib/pick';

import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';

const minCharacters = 70;
const maxCharacters = 150;

export const getPostDescription = (
  content?: string | null,
  defaultDescription?: string | null,
  trimLength?: boolean | null,
): string => {
  if (defaultDescription) return defaultDescription;
  if (!content) return defaultDescription || '';

  const allTexts = content
    ?.split(/[\r\n]+/gm)
    ?.filter((it: string) => !it.startsWith('#'))
    ?.join('\n')
    ?.split('\n')
    ?.map((text: string) => (text || '').trim())
    ?.filter((text: string) => text && text.length)
    ?.map((text: string) => removeMd(text, { gfm: true, useImgAltText: true }));

  let description = '';
  if (allTexts) {
    let lastIndex = 0;
    while (description.length < maxCharacters) {
      description += `${allTexts[lastIndex]} `;
      lastIndex += 1;
    }
  }

  if (trimLength) {
    const allWords = description.split(' ');
    description = '';
    let lastIndex = 0;
    while (description.length < maxCharacters) {
      const word = allWords[lastIndex];
      description += `${word} `;
      if (
        word.endsWith('.') &&
        !word.endsWith('etc.') &&
        description.length > minCharacters
      ) {
        break;
      }
      lastIndex += 1;
    }
  }
  description = description.trim();
  return description.length > 0
    ? `${description}${description.endsWith('.') ? '..' : '...'}`
    : defaultDescription || '';
};

export const getAllPosts = (
  fields: (keyof Blog)[] = [],
  allowInProgress: boolean = false,
): Array<Blog> => {
  const filteredPosts = allBlogs
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(
      (it) =>
        it.title?.length > 0 &&
        it.slug?.length > 0 &&
        (allowInProgress || !it.inProgress),
    );
  return fields && fields.length
    ? filteredPosts.map((post) => pick(post, fields))
    : filteredPosts;
};
