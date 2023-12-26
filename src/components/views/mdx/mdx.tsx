import type { MDXComponents } from 'mdx/types';
import { getMDXComponent } from 'next-contentlayer/hooks';

import { Heading } from '@/components/core/heading';
import { Img } from '@/components/core/img';
import { tw } from '@/utils/cx';
import cx from '@/utils/cx';

import { Grid, GridColumn } from './components/components.styles';
import { ImageComparison } from './components/image-comparison/image-comparison';
import { MdxLink } from './components/mdx-link';
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
  img: Img,
  Image: Img,
  Img,
  Heading,
};

export const Mdx = (props: MdxProps) => {
  const MdxComponent = getMDXComponent(props.code);
  return (
    <article className={cx(`mdx-article ${styles.article}`, props.className)}>
      <MdxComponent components={components as MDXComponents} />
    </article>
  );
};
