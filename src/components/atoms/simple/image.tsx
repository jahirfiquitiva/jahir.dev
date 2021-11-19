/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { Component, ComponentProps } from '~/types';

const ImageWrapper = styled.div`
  display: relative;
  width: 100%;
  min-height: 0;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  & > span:first-of-type,
  & img {
    object-fit: contain;
    position: relative !important;
    min-height: 0 !important;
    height: auto !important;
  }
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
