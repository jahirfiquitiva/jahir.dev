import { ImageComparison } from './image-comparison';

import { Image, Link, LinkProps } from '~/new-components/atoms/simple';

export const mdxComponents = {
  a: (props: LinkProps) => <Link {...props} underline />,
  img: Image,
  Image,
  ImageComparison,
};
