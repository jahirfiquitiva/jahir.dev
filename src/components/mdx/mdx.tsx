import { ImageComparison } from './image-comparison';
import { MdxLink } from './mdx-link';
import { SimpleGrid, SimpleGridColumn } from './simple-grid';

import { Image, ImageProps } from '~/components/atoms/simple';

export const mdxComponents = {
  a: MdxLink,
  img: (props: ImageProps) => <Image {...props} avoidNextImage />,
  Image,
  ImageComparison,
  SimpleGrid,
  SimpleGridColumn,
};
