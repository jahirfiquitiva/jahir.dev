/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
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

  [> div:first-of-type, > span:first-of-type, img]:(
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
>;

interface ImageProps extends ComponentProps, BaseImageProps {
  src: string;
  size?: number;
  avoidNextImage?: boolean;
}

export const Image: Component<ImageProps> = (props) => {
  const { avoidNextImage = false, size, ...rest } = props;
  if (!avoidNextImage) {
    if (typeof size !== 'undefined') {
      const {
        width = size,
        height = size,
        layout = 'fixed',
        ...otherImageProps
      } = rest;
      return (
        <NextImage
          {...otherImageProps}
          className={props.className}
          width={width}
          height={height}
          layout={layout}
        />
      );
    }
    return (
      <ImageWrapper className={props.className}>
        <NextImage
          {...rest}
          // @ts-ignore
          layout={'fill'}
        />
      </ImageWrapper>
    );
  }
  return <img loading={'lazy'} decoding={'async'} {...rest} />;
};
