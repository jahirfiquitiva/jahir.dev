import { Img, type ImgProps } from '@/components/atoms';
import { Masonry } from '@/components/compounds';

import { Grid, GridColumn } from './Grid';
import { ImageComparison } from './ImageComparison';
import { MdxLink } from './MdxLink';

export const mdxComponents = {
  a: MdxLink,
  img: (props: ImgProps) => <Img {...props} />,
  Image: (props: ImgProps) => <Img {...props} />,
  Img: (props: ImgProps) => <Img {...props} />,
  ImageComparison,
  Grid,
  GridColumn,
  Masonry,
  // Reactions,
};
