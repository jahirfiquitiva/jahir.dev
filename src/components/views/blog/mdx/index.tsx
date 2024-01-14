import type { MDXComponents } from 'mdx/types';
import { compileMDX as mdxCompileMDX } from 'next-mdx-remote/rsc';

import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';
import mdx from 'config/mdx';

import { ImageComparison } from './image-comparison';

const Grid = tw.div`
  grid
  grid-cols-1
  tablet-sm:grid-cols-2
  tablet-sm:gap-4
`;

const GridColumn = tw.div`
  flex flex-col w-full
`;

const components = {
  Grid,
  GridColumn,
  ImageComparison,
  hr: tw.hr`border-divider`,
  a: Link,
  Link,
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
