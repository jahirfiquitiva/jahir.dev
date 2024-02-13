import type { MDXComponents } from 'mdx/types';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { Img, type ImgProps } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';
import mdx from 'config/mdx';

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
  source: string;
}

export const MDX = (props: MdxProps) => {
  return (
    <article className={'mdx'}>
      <MDXRemote
        source={props.source}
        components={components}
        options={{ mdxOptions: mdx }}
      />
    </article>
  );
};
