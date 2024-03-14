'use client';

import Image, { type ImageProps, type StaticImageData } from 'next/image';
import { useState } from 'react';

import cx from '@/utils/cx';

type SizeProps = Omit<ImageProps, 'width' | 'height'> & {
  size?: number | `${number}`;
};

type WidthHeightProps = ImageProps & {
  width?: number | `${number}`;
  height?: number | `${number}`;
};

export type ImgProps = SizeProps | WidthHeightProps;

const getProps = (baseProps: ImgProps) => {
  const { size = 0, ...whProps } = baseProps as SizeProps;
  const {
    width: pw = size,
    height: ph = size,
    // eslint-disable-next-line prefer-const
    ...props
  } = whProps as WidthHeightProps;
  return { ...props, width: Number(pw), height: Number(ph) };
};

export const Img = (baseProps: ImgProps) => {
  const [errored, setErrored] = useState<boolean>(false);
  const { width = 0, height = 0, ...props } = getProps(baseProps);
  return (
    // Disabled warning. Alt prop already is present in props
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      width={width}
      height={height}
      placeholder={
        typeof props.src !== 'string'
          ? (props.src as StaticImageData).blurDataURL
            ? 'blur'
            : props.placeholder
          : props.placeholder
      }
      className={cx('object-cover object-center', props.className)}
      loading={!props.priority ? 'lazy' : undefined}
      decoding={'async'}
      onError={() => {
        setErrored(true);
      }}
      unoptimized={errored || props.unoptimized}
    />
  );
};
