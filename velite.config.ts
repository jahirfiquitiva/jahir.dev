import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import smartypants from 'remark-smartypants';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import remarkUnwrapImages from 'remark-unwrap-images';
import { defineConfig } from 'velite';

import { blogs } from './config/velite/index';
import imageBlurMetadata from './config/velite/rehype/blur';
import { prettyCode } from './config/velite/rehype/code';
import unwrapFigure from './config/velite/rehype/figure';
import { toc } from './config/velite/rehype/toc';

export default defineConfig({
  collections: { blogs },
  mdx: {
    copyLinkedFiles: false,
    remarkPlugins: [smartypants, remarkUnwrapImages, remarkSqueezeParagraphs],
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
  },
});
