import type { MDXOptions } from 'contentlayer/core';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

import { prettyCode } from './rehype/code';
import imageMetadata from './rehype/image-metadata';
import { toc } from './rehype/toc';

const mdx: MDXOptions = {
  remarkPlugins: [remarkGfm, remarkUnwrapImages],
  rehypePlugins: [
    imageMetadata,
    rehypeSlug,
    // @ts-expect-error MDX IDK
    prettyCode,
    [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
    toc,
    rehypeAccessibleEmojis,
  ],
  format: 'mdx',
};

export default mdx;
