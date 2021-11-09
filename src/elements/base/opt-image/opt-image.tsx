/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from '@emotion/styled';
import Image from 'next/image';

import { Component, ComponentProps } from '~/types';

interface OptImageProps extends ComponentProps {
  src: string;
  alt: string;
  className?: string;
  avoidNextImage?: boolean;
  objectFit?: 'cover' | 'contain';
}

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

export const OptImage: Component<OptImageProps> = (props) => {
  const { avoidNextImage = false, ...rest } = props;
  if (!avoidNextImage) {
    return (
      <ImageWrapper className={props.className}>
        <Image
          // @ts-ignore
          layout={'fill'}
          {...rest}
        />
      </ImageWrapper>
    );
  }
  return <img loading={'lazy'} decoding={'async'} {...rest} />;
};
