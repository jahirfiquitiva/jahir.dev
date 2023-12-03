import { cx } from 'classix';
import type { MDXComponents } from 'mdx/types';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { twMerge } from 'tailwind-merge';
import tw from 'tailwind-styled-components';

import { Heading } from '@/components/core/heading';
import mdx from 'config/blog/mdx';

import { Grid, GridColumn } from './components/components.styles';
import { ImageComparison } from './components/image-comparison/image-comparison';
import { MdxLink } from './components/mdx-link';
import { ZoomableImg } from './components/zoomable-img/zoomable-img';
import styles from './mdx.module.scss';

interface MdxProps {
  source: string;
  className?: string;
}

const components = {
  Grid,
  GridColumn,
  ImageComparison,
  hr: tw.hr`border-divider`,
  a: MdxLink,
  Link: MdxLink,
  img: ZoomableImg,
  Image: ZoomableImg,
  Heading,
};

export const Mdx = (props: MdxProps) => (
  <article
    className={twMerge(cx(`mdx-article ${styles.article}`, props.className))}
  >
    <MDXRemote
      source={props.source}
      components={components as MDXComponents}
      options={{ mdxOptions: mdx }}
    />
  </article>
);
