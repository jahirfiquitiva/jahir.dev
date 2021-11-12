import { ImageComparison } from './image-comparison';

import { Image, ImageProps, Link } from '~/new-components/atoms/simple';

export const mdxComponents = {
  img: (props: ImageProps) => <Image {...props} avoidNextImage />,
  Image,
  ImageComparison,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  a: (props: any) => {
    if (props?.className?.includes('anchor')) return <a {...props} />;
    return <Link {...props} underline />;
  },
};
