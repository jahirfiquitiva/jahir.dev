import type { MDXComponents } from 'mdx/types';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { compileMDX as mdxCompileMDX } from 'next-mdx-remote/rsc';

import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import cx, { tw } from '@/utils/cx';
import mdx from 'config/contentlayer/mdx';

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

interface MdxProps {
  code: string;
  className?: string;
}

export const Mdx = (props: MdxProps) => {
  const MdxComponent = getMDXComponent(props.code);
  return (
    <article className={cx(props.className)}>
      <MdxComponent components={components as MDXComponents} />
    </article>
  );
};

export const compileMDX = async (text?: string) => {
  return mdxCompileMDX({
    source: text || '',
    options: { mdxOptions: mdx },
    components: components as MDXComponents,
  });
};
