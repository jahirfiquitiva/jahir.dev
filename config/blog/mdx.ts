import type { SerializeOptions } from 'next-mdx-remote/dist/types';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

import { prettyCode } from './rehype/code';
import imageMetadata from './rehype/image-metadata';
import { toc } from './rehype/toc';

const mdx: SerializeOptions['mdxOptions'] = {
  remarkPlugins: [remarkGfm, remarkUnwrapImages],
  rehypePlugins: [
    imageMetadata,
    rehypeSlug,
    // @ts-expect-error MDX IDK
    prettyCode,
    [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
    // @ts-expect-error MDX IDK
    toc,
    rehypeAccessibleEmojis,
  ],
  format: 'mdx',
};

export default mdx;
