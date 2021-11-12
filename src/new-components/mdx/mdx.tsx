import { ImageComparison } from './image-comparison';

import {
  Image,
  ImageProps,
  Link,
  LinkProps,
} from '~/new-components/atoms/simple';

export const mdxComponents = {
  img: (props: ImageProps) => <Image {...props} avoidNextImage />,
  Image,
  ImageComparison,
  a: (props: LinkProps) => <Link {...props} underline />,
};
