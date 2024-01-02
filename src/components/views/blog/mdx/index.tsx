import type { MDXComponents } from 'mdx/types';
import { getMDXComponent } from 'next-contentlayer/hooks';

import { Img } from '@/components/atoms/img';
import cx, { tw } from '@/utils/cx';

import { ImageComparison } from './image-comparison';
import { MdxLink } from './link';

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
  a: MdxLink,
  Link: MdxLink,
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
