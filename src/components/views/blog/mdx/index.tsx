import type { MDXComponents } from 'mdx/types';
import { MDXRemote } from 'next-mdx-remote/rsc';

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
} as MDXComponents;

export const Mdx = (props: { source?: string }) => (
  <MDXRemote
    source={props.source || ''}
    components={components}
    options={{ mdxOptions: mdx }}
  />
);
