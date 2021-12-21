import { ImageComparison } from './image-comparison';
import { MdxLink } from './mdx-link';
import { SimpleGrid, SimpleGridColumn } from './simple-grid';

import { Image, ImageProps } from '~/components/atoms/simple';
import { Masonry, Reactions } from '~/components/elements';

export const mdxComponents = {
  a: MdxLink,
  img: (props: ImageProps) => (
    <Image {...props} layout={'responsive'} quality={90} />
  ),
  Image,
  ImageComparison,
  SimpleGrid,
  SimpleGridColumn,
  Masonry,
  Reactions,
};
