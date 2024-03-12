// import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypeSlug from 'rehype-slug';
// import remarkGfm from 'remark-gfm';
// import smartypants from 'remark-smartypants';
// import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
// import remarkUnwrapImages from 'remark-unwrap-images';
import { defineConfig } from 'velite';

// import mdx from './config/contentlayer/mdx';
// import imageBlurMetadata from './config/contentlayer/rehype/blur';
// import { prettyCode } from './config/contentlayer/rehype/code';
// import unwrapFigure from './config/contentlayer/rehype/figure';
// import { toc } from './config/contentlayer/rehype/toc';
import { blogs } from './config/contentlayer/velite';

const allowInProgress = process.env.NODE_ENV === 'development';

export default defineConfig({
  collections: { blogs },
  markdown: {
    copyLinkedFiles: false,
  },
  mdx: {
    copyLinkedFiles: false,
  },
  // markdown: {
  //   remarkPlugins: [
  //     remarkGfm,
  //     // @ts-expect-error idk
  //     smartypants,
  //     remarkUnwrapImages,
  //     remarkSqueezeParagraphs,
  //   ],
  //   rehypePlugins: [
  //     unwrapFigure,
  //     imageBlurMetadata,
  //     rehypeSlug,
  //     rehypeAccessibleEmojis,
  //     // @ts-expect-error idk
  //     prettyCode,
  //     [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
  //     // @ts-expect-error idk
  //     toc,
  //   ],
  // },
  prepare: ({ blogs }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const allReadableBlogs = blogs.filter((it) =>
      allowInProgress ? true : !it.inProgress,
    );
  },
});
