import NextImage, { type ImageProps } from 'next/image';

import type { FC } from '@/types';
import { styled } from '~/stitches';

type BaseImageProps = Omit<ImageProps, 'width' | 'height'>;
type SizeProps = BaseImageProps & { size?: number | string };
type WidthHeightProps = BaseImageProps & {
  width?: number | string;
  height?: number | string;
};

export type ImgProps = SizeProps | WidthHeightProps;

const BaseImg: FC<ImgProps> = (props) => {
  const { size = 0, ...otherProps } = props as SizeProps;
  const {
    width = size,
    height = size,
    ...rest
  } = otherProps as WidthHeightProps;
  return (
    <NextImage
      {...rest}
      width={Number(width)}
      height={Number(height)}
      loading={props.priority ? undefined : props.loading}
      decoding={'async'}
      unoptimized
    />
  );
};

export const Img = styled(BaseImg, {
  objectFit: 'cover',
  objectPosition: 'center',
  color: 'rgba(0 0 0 / 0)',
});
