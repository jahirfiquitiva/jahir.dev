import type { MDXComponents } from 'mdx/types';
import { compileMDX as mdxCompileMDX } from 'next-mdx-remote/rsc';

import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';
import mdx from 'config/mdx';

import { AsyncImg } from './async-img';
import { ImageComparison } from './img-comparison';

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
  img: AsyncImg,
  Image: AsyncImg,
  Img: AsyncImg,
};

export const compileMDX = async (text?: string) => {
  return mdxCompileMDX({
    source: text || '',
    options: { mdxOptions: mdx },
    components: components as MDXComponents,
  });
};
