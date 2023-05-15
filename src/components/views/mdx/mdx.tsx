// Required because some MDX components are client components :c
'use client';

import { cx } from 'classix';
import type { MDXComponents } from 'mdx/types';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { twMerge } from 'tailwind-merge';
import tw from 'tailwind-styled-components';

import { Heading } from '@/components/core/heading';
import { SocialLinks } from '@/components/molecules/social-links';

import { Grid, GridColumn, MdxLink } from './components';
import { ImageComparison } from './components/image-comparison';
import { ZoomableImg } from './components/zoomable-img';
import styles from './mdx.module.scss';

interface MdxProps {
  code: string;
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
  SocialLinks,
  Heading,
};

export const Mdx = (props: MdxProps) => {
  const MdxComponent = getMDXComponent(props.code);
  return (
    <article
      className={twMerge(cx(`mdx-article ${styles.article}`, props.className))}
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {/* @ts-expect-error issue with contentlayer */}
      <MdxComponent components={{ ...components } as MDXComponents} />
    </article>
  );
};
