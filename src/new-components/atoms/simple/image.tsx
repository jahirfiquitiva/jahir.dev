/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { Component, ComponentProps } from '~/types';

const ImageWrapper = styled.div`
  position: relative;
  min-height: 0;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  overflow: hidden;

  & > div:first-of-type,
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
