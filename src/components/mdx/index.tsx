import type { ComponentProps } from 'react';

import type { ImgProps } from '@/components/atoms';
import { Masonry } from '@/components/compounds';
import { styled } from '~/stitches';

import { ArticleImg, Reactions, TableContainer, Table } from './content';
import { Grid, GridColumn } from './Grid';
import { ImageComparison } from './ImageComparison';
import { MdxLink } from './MdxLink';

export const mdxComponents = {
  a: MdxLink,
  img: (props: ImgProps) => <ArticleImg {...props} />,
  Image: (props: ImgProps) => <ArticleImg {...props} />,
  Img: (props: ImgProps) => <ArticleImg {...props} />,
  ImageComparison,
  Grid,
  GridColumn,
  Masonry,
  Reactions,
  hr: styled('hr', { borderColor: '$divider' }),
  table: (props: ComponentProps<typeof Table>) => (
    <TableContainer>
      <Table {...props} />
    </TableContainer>
  ),
};

export * from './content';
