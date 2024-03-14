'use client';

import Image, { type ImageProps, type StaticImageData } from 'next/image';
import { useState } from 'react';

import cx from '@/utils/cx';

export const Img = (props: ImageProps) => {
  const [errored, setErrored] = useState<boolean>(false);
  return (
    // Disabled warning. Alt prop already is present in props
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
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
