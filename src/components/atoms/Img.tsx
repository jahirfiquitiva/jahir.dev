import FutureNextImage from 'next/future/image';
import type { ImageProps as NextImageProps } from 'next/image';

import type { FC } from '@/types';
import { styled } from '~/stitches';

type BaseImageProps = Pick<
  NextImageProps,
  'alt' | 'width' | 'height' | 'className' | 'style' | 'quality' | 'priority'
>;

export interface ImageProps extends BaseImageProps {
  src: string;
  size?: number;
  avoidNextImage?: boolean;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  isFourOhFour?: boolean;
}

const BaseImg: FC<ImageProps> = (props) => {
  const {
    avoidNextImage = false,
    size,
    width = size,
    height = size,
    className,
    loading = 'lazy',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isFourOhFour,
    ...rest
  } = props;

  if (!avoidNextImage) {
    <FutureNextImage
      {...rest}
      width={width}
      height={height}
      className={className}
      loading={props.priority ? undefined : loading}
    />;
  }
  return (
    // eslint-disable-next-line
    <img loading={'lazy'} decoding={'async'} className={className} {...rest} />
  );
};

export const Img = styled(BaseImg, {
  objectFit: 'cover',
  objectPosition: 'center',
});
