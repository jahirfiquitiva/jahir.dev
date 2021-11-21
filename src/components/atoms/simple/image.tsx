/* eslint-disable @next/next/no-img-element */
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import tw from 'twin.macro';

import { Component, ComponentProps } from '~/types';

const ImageWrapper = tw.div`
  relative
  w-full
  min-h-0
  max-w-full
  max-h-full
  overflow-hidden

  [> span:first-of-type, img]:(
    object-contain
    relative!
    min-h-0!
    h-auto!
  )
`;

type BaseImageProps = Pick<
  NextImageProps,
  | 'alt'
  | 'width'
  | 'height'
  | 'className'
  | 'objectFit'
  | 'objectPosition'
  | 'layout'
  | 'quality'
  | 'priority'
>;

export interface ImageProps extends ComponentProps, BaseImageProps {
  src: string;
  size?: number;
  avoidNextImage?: boolean;
}

export const Image: Component<ImageProps> = (props) => {
  const {
    avoidNextImage = false,
    size,
    width = size,
    height = size,
    layout,
    className,
    ...rest
  } = props;

  if (!avoidNextImage) {
    if (typeof size !== 'undefined' || typeof layout !== 'undefined') {
      return (
        <NextImage
          {...rest}
          className={className}
          width={width}
          height={height}
          layout={layout || 'fixed'}
        />
      );
    }
    return (
      <ImageWrapper className={className}>
        <NextImage {...rest} layout={'fill'} />
      </ImageWrapper>
    );
  }
  return <img loading={'lazy'} decoding={'async'} {...rest} />;
};
