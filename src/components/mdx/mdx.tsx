import { ImageComparison } from './image-comparison';
import { MdxLink } from './mdx-link';

import { Image, ImageProps } from '~/components/atoms/simple';

export const mdxComponents = {
  img: (props: ImageProps) => <Image {...props} avoidNextImage />,
  Image,
  ImageComparison,
  a: MdxLink,
};
