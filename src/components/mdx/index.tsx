import type { ComponentProps } from 'react';

import { Masonry } from '@/components/compounds';
import { styled } from '~/stitches';

import { Reactions } from './content';
import { Grid, GridColumn } from './Grid';
import { ImageComparison } from './ImageComparison';
import { MdxLink } from './MdxLink';
import { ZoomableImg as Img } from './zoomable-img';

type ImgProps = ComponentProps<typeof Img>;

export const mdxComponents = {
  img: (props: ImgProps) => <Img {...props} />,
  Image: (props: ImgProps) => <Img {...props} />,
  ImageComparison,
  Grid,
  GridColumn,
  Masonry,
  Reactions,
  hr: styled('hr', { borderColor: '$divider' }),
  a: MdxLink,
  Link: MdxLink,
};

export * from './content';
export * from './Grid';
