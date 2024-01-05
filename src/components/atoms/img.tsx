import Image, { type ImageProps } from 'next/image';

import cx, { tw } from '@/utils/cx';

type BaseImageProps = Omit<ImageProps, 'width' | 'height'>;
type SizeProps = BaseImageProps & { size?: number };
type WidthHeightProps = BaseImageProps & {
  width?: number;
  height?: number;
};

export type ImgProps = SizeProps | WidthHeightProps;

const BaseImg = (props: ImgProps) => {
  const { size = 0, ...otherProps } = props as SizeProps;
  const {
    width = size,
    height = size,
    ...rest
  } = otherProps as WidthHeightProps;
  return (
    <Image
      {...rest}
      alt={rest.alt}
      width={width}
      height={height}
      placeholder={typeof rest.src !== 'string' ? 'blur' : rest.placeholder}
      className={cx('object-cover object-center', rest.className)}
    />
  );
};

export const Img = tw(BaseImg)<ImgProps>``;
