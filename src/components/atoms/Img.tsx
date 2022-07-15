import FutureNextImage, { type ImageProps } from 'next/future/image';

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
  const { width = size, height = size } = otherProps as WidthHeightProps;
  return (
    <FutureNextImage
      {...otherProps}
      width={width}
      height={height}
      loading={props.priority ? undefined : props.loading}
    />
  );
};

export const Img = styled(BaseImg, {
  objectFit: 'cover',
  objectPosition: 'center',
});
