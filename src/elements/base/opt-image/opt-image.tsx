/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from '@emotion/styled';
import Image from 'next/image';

import { Component, ComponentProps } from '~/elements/base/fc';

interface OptImageProps extends ComponentProps {
  src: string;
  alt: string;
  h?: string;
  className?: string;
  allowNextComponent?: boolean;
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
`;

export const OptImage: Component<OptImageProps> = (props) => {
  const { allowNextComponent = false, h, ...rest } = props;
  if (allowNextComponent) {
    return (
      <ImageWrapper style={{ minHeight: h || '96px' }}>
        <Image
          // @ts-ignore
          layout={'fill'}
          objectFit={'contain'}
          {...rest}
        />
      </ImageWrapper>
    );
  }
  return <img loading={'lazy'} decoding={'async'} {...rest} />;
};
