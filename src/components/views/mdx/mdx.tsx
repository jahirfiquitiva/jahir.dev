// Required because some MDX components are client components :c
'use client';

import { cx } from 'classix';
import type { MDXComponents } from 'mdx/types';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { twMerge } from 'tailwind-merge';
import tw from 'tailwind-styled-components';

import { Heading } from '@/components/core/heading';

import { Grid, GridColumn } from './components/components.styles';
import { ImageComparison } from './components/image-comparison/image-comparison';
import { MdxLink } from './components/mdx-link';
import { ZoomableImg } from './components/zoomable-img/zoomable-img';
import styles from './mdx.module.scss';

interface MdxProps {
  source: MDXRemoteSerializeResult | undefined;
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

export const Mdx = (props: MdxProps) => {
  if (!props.source) return null;
  return (
    <article
      className={twMerge(cx(`mdx-article ${styles.article}`, props.className))}
    >
      <MDXRemote {...props.source} components={components as MDXComponents} />
    </article>
  );
};
