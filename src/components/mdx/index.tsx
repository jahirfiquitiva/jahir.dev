import type { ComponentProps } from 'react';

import { Masonry } from '@/components/compounds';
import { Img, Paragraph } from '@/components/core';
import { styled } from '~/stitches';

import { Reactions } from './content';
import * as customComponents from './custom';
import { Grid, GridColumn } from './Grid';
import { ImageComparison } from './ImageComparison';
import { MdxLink } from './MdxLink';

type ImgProps = ComponentProps<typeof Img>;

export const mdxComponents = {
  Image: (props: ImgProps) => (
    <Img
      {...props}
      css={{
        background:
          'repeating-conic-gradient($background 0 90deg, $divider 0 180deg) 0 0/24px 24px round',
      }}
    />
  ),
  ImageComparison,
  Grid,
  GridColumn,
  Masonry,
  Reactions,
  hr: styled('hr', { borderColor: '$divider' }),
  a: MdxLink,
  Link: MdxLink,
  img: (props: ImgProps) => <Img {...props} />,
  p: Paragraph,
  ...customComponents,
};

export * from './content';
