import type { ComponentProps } from 'react';

import { Img } from '@/components/atoms';
import { Masonry } from '@/components/compounds';
import { styled } from '~/stitches';

import { Reactions } from './content';
import * as customComponents from './custom';
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
  Reactions,
  hr: styled('hr', { borderColor: '$divider' }),
  a: MdxLink,
  Link: MdxLink,
  img: (props: ImgProps) => <Img {...props} />,
  ...customComponents,
};

export * from './content';