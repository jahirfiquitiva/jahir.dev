// Required because some MDX components are client components :c
'use client';

import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import tw from 'tailwind-styled-components';

import { SocialLinks } from '@/components/compounds/social-links';

import { Grid, GridColumn, MdxLink } from './components';
import { ImageComparison } from './components/image-comparison';
import { ZoomableImg } from './components/zoomable-img';
import styles from './mdx.module.scss';

interface MdxProps {
  code: string;
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
};

export const Mdx = (props: MdxProps) => {
  const MdxComponent = useMDXComponent(props.code);

  return (
    <article className={`mdx-article ${styles.article}`}>
      <MdxComponent components={{ ...components } as MDXComponents} />
    </article>
  );
};
