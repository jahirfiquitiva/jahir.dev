import type { SerializeOptions } from 'next-mdx-remote/dist/types';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import smartypants from 'remark-smartypants';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import remarkUnwrapImages from 'remark-unwrap-images';

import imageBlurMetadata from './rehype/blur';
import { prettyCode } from './rehype/code';
import { toc } from './rehype/toc';

const mdx: SerializeOptions['mdxOptions'] = {
  remarkPlugins: [
    remarkGfm,
    remarkSqueezeParagraphs,
    remarkUnwrapImages,
    // @ts-expect-error idk
    smartypants,
  ],
  rehypePlugins: [
    imageBlurMetadata,
    rehypeSlug,
    rehypeAccessibleEmojis,
    // @ts-expect-error idk
    prettyCode,
    [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
    // @ts-expect-error idk
    toc,
  ],
};

export default mdx;
