import Image, { type ImageProps } from 'next/image';

import tw from '@/tw';
import type { FC } from '@/types';

export const StyledImg = tw(Image)`
  object-cover
  object-center
  text-transparent
`;

type BaseImageProps = Omit<ImageProps, 'width' | 'height'>;
type SizeProps = BaseImageProps & { size?: number | string };
type WidthHeightProps = BaseImageProps & {
  width?: number | string;
  height?: number | string;
};

export type ImgProps = SizeProps | WidthHeightProps;

export const Img: FC<ImgProps> = (props) => {
  const { size = 0, ...otherProps } = props as SizeProps;
  const {
    width = size,
    height = size,
    ...rest
  } = otherProps as WidthHeightProps;
  return (
    <StyledImg
      {...rest}
      width={width}
      height={height}
      loading={props.priority ? undefined : props.loading || 'lazy'}
      decoding={'async'}
    />
  );
};
