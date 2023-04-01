import type { ComponentProps } from 'react';

import { Img } from '@/components/atoms';
import { Masonry } from '@/components/compounds';
import { styled } from '~/stitches';

import { customComponents, Table } from './custom';
import { Grid, GridColumn } from './Grid';
import { ImageComparison } from './ImageComparison';
import { MdxLink } from './MdxLink';

type ImgProps = ComponentProps<typeof Img>;

export const mdxComponents = {
  Image: (props: ImgProps) => <Img {...props} />,
  ImageComparison,
  Grid,
  GridColumn,
  Masonry,
  hr: styled('hr', { borderColor: '$divider' }),
  table: Table,
  a: MdxLink,
  Link: MdxLink,
  img: (props: ImgProps) => <Img {...props} />,
  ...customComponents,
};

export * from './content';
