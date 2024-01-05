'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

import cx, { tw } from '@/utils/cx';

type BaseImageProps = Omit<ImageProps, 'width' | 'height'>;
type SizeProps = BaseImageProps & { size?: number | string };
type WidthHeightProps = BaseImageProps & {
  width?: number | string;
  height?: number | string;
};

export type ImgProps = SizeProps | WidthHeightProps;

const BaseImg = (props: ImgProps) => {
  const [isLoading, setLoading] = useState(true);
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
      width={Number(width)}
      height={Number(height)}
      placeholder={typeof rest.src !== 'string' ? 'blur' : undefined}
      className={cx(
        'object-cover object-center',
        'transition-[scale,filter] duration-500',
        isLoading ? 'grayscale blur-md scale-105' : '',
        rest.className,
      )}
      onLoad={() => {
        setLoading(false);
      }}
    />
  );
};

export const Img = tw(BaseImg)<ImgProps>``;
