import type { MDXComponents } from 'mdx/types';
import { getMDXComponent } from 'next-contentlayer/hooks';

import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

import { ImageComparison } from './image-comparison';
import styles from './mdx.module.scss';

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

interface MdxProps {
  code: string;
}

export const Mdx = (props: MdxProps) => {
  const MdxComponent = getMDXComponent(props.code);
  return (
    <article className={styles.mdx}>
      <MdxComponent components={components as MDXComponents} />
    </article>
  );
};
