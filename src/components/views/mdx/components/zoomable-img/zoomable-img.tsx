'use client';

import { cx } from 'classix';
import { type ComponentProps, useState, useMemo, useCallback } from 'react';

import { Img } from '@/components/core/img';

import styles from './zoomable-img.module.scss';

type ImgProps = ComponentProps<typeof Img>;

type ZoomableImgProps = ImgProps & {
  zoomable?: boolean;
};

export const ZoomableImg = (props: ZoomableImgProps) => {
  const { zoomable = false, ...otherProps } = props;
  const [zoomed, setZoomed] = useState<boolean>(false);

  const toggleZoom = useCallback(() => {
    setZoomed(!zoomed);
  }, [zoomed]);

  const zoomableProps = useMemo(
    () =>
      zoomable
        ? {
            role: 'button',
            onClick: toggleZoom,
          }
        : undefined,
    [zoomable, toggleZoom],
  );

  return (
    <Img
      {...otherProps}
      {...zoomableProps}
      className={cx(styles.zimg, otherProps.className, zoomed && styles.zoomed)}
      data-zoomable={zoomable}
    />
  );
};
