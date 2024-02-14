import type { MDXComponents } from 'mdx/types';
import { getMDXComponent } from 'next-contentlayer/hooks';

import { Img, type ImgProps } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

import { Bookmark } from './bookmark';
import { ImageComparison } from './image-comparison';
import { ReactTweet } from './tweet';

import './mdx.scss';

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
  img: (props: ImgProps) => <Img {...props} suppressHydrationWarning />,
  Img,
  Tweet: ReactTweet,
  Bookmark,
} as MDXComponents;

interface MdxProps {
  code: string;
}

export const MDX = (props: MdxProps) => {
  const MdxComponent = getMDXComponent(props.code);
  return (
    <article className={'mdx'}>
      <MdxComponent components={components} />
    </article>
  );
};
