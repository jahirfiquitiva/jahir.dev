import type { MDXOptions } from 'contentlayer/core';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
// import remarkGfm from 'remark-gfm';
import smartypants from 'remark-smartypants';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import remarkUnwrapImages from 'remark-unwrap-images';

import imageBlurMetadata from './rehype/blur';
import { prettyCode } from './rehype/code';
import unwrapFigure from './rehype/figure';
import { toc } from './rehype/toc';

const mdx: MDXOptions = {
  remarkPlugins: [
    // remarkGfm,
    smartypants,
    remarkUnwrapImages,
    remarkSqueezeParagraphs,
  ],
  rehypePlugins: [
    unwrapFigure,
    imageBlurMetadata,
    rehypeSlug,
    rehypeAccessibleEmojis,
    // @ts-expect-error idk
    prettyCode,
    [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
    toc,
  ],
};

export default mdx;
