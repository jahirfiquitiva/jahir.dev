import type { SerializeOptions } from 'next-mdx-remote/dist/types';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import remarkUnwrapImages from 'remark-unwrap-images';

import { prettyCode } from './rehype/code';
import imageMetadata from './rehype/image-metadata';
import { toc } from './rehype/toc';

const mdx: SerializeOptions['mdxOptions'] = {
  remarkPlugins: [remarkGfm, remarkSqueezeParagraphs, remarkUnwrapImages],
  rehypePlugins: [
    imageMetadata,
    rehypeSlug,
    rehypeAccessibleEmojis,
    // @ts-expect-error idk
    prettyCode,
    [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
    toc,
    // @ts-expect-error idk
    rehypePresetMinify,
  ],
};

export default mdx;
