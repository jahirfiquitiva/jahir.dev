import { type ComponentProps, useState, useMemo, useCallback } from 'react';

import type { FC } from '@/old/types';

import { StyledImg } from './zoomable-img.styles';

type ImgProps = ComponentProps<typeof StyledImg>;

type ZoomableImgProps = ImgProps & {
  zoomable?: boolean;
};

export const ZoomableImg: FC<ZoomableImgProps> = (props) => {
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
    <StyledImg
      {...otherProps}
      {...zoomableProps}
      className={[
        otherProps.className || '',
        zoomed ? 'zoomed' : '',
      ].join(' ')}
      data-zoomable={zoomable}
    />
  );
};
