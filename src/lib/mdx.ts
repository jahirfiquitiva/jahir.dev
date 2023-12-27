import type { MDXComponents } from 'mdx/types';
import { compileMDX as mdxCompileMDX } from 'next-mdx-remote/rsc';

import { Img } from '@/components/img';
import { ImageComparison } from '@/components/views/blog/mdx/image-comparison';
import { MdxLink } from '@/components/views/blog/mdx/link';
import { tw } from '@/utils/cx';
import mdx from 'config/mdx/options';

const Grid = tw.div`
  grid
  grid-cols-1
  tablet-sm:grid-cols-2
  tablet-sm:gap-16
`;

const GridColumn = tw.div`
  flex flex-col w-full
`;

const components = {
  Grid,
  GridColumn,
  ImageComparison,
  hr: tw.hr`border-divider`,
  a: MdxLink,
  Link: MdxLink,
  img: Img,
  Image: Img,
  Img,
};

export const compileMDX = async (text?: string) => {
  return mdxCompileMDX({
    source: text || '',
    options: { mdxOptions: mdx },
    components: components as MDXComponents,
  });
};
