import type { MDXComponents } from 'mdx/types';
import { compileMDX as mdxCompileMDX } from 'next-mdx-remote/rsc';

import { Heading } from '@/components/core/heading';
import { Img } from '@/components/core/img';
import {
  Grid,
  GridColumn,
} from '@/components/views/mdx/components/components.styles';
// eslint-disable-next-line max-len
import { ImageComparison } from '@/components/views/mdx/components/image-comparison/image-comparison';
import { MdxLink } from '@/components/views/mdx/components/mdx-link';
import { tw } from '@/utils/cx';
// import styles from './mdx.module.scss';
import mdx from 'config/contentlayer/mdx';

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
  Heading,
};

export const compileMDX = async (text?: string) => {
  return mdxCompileMDX({
    source: text || '',
    options: { mdxOptions: mdx },
    components: components as MDXComponents,
  });
};
