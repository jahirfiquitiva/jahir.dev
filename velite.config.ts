import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import rehypeSlug from 'rehype-slug';
import smartypants from 'remark-smartypants';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import { defineConfig } from 'velite';

import { blogs } from './config/velite/collections/blog';
import { extensions } from './config/velite/collections/extensions';
import { gaming } from './config/velite/collections/gaming';
import { hardware } from './config/velite/collections/hardware';
import { projects } from './config/velite/collections/projects';
import { software } from './config/velite/collections/software';
import imageBlurMetadata from './config/velite/rehype/blur';
import { prettyCode } from './config/velite/rehype/code';
import unwrapFigure from './config/velite/rehype/figure';
import { toc } from './config/velite/rehype/toc';

export default defineConfig({
  collections: { blogs, extensions, gaming, hardware, software, projects },
  mdx: {
    copyLinkedFiles: false,
    remarkPlugins: [smartypants, remarkSqueezeParagraphs],
    rehypePlugins: [
      rehypeUnwrapImages,
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
