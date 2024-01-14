import Image, { type ImageProps, type StaticImageData } from 'next/image';

import cx, { tw } from '@/utils/cx';

type SizeProps = Omit<ImageProps, 'width' | 'height'> & { size?: number };
type WidthHeightProps = ImageProps & {
  width?: number;
  height?: number;
};

export type ImgProps = SizeProps | WidthHeightProps;

const BaseImg = (baseProps: ImgProps) => {
  const { size = 0, ...whProps } = baseProps as SizeProps;
  const { width = size, height = size, ...props } = whProps as WidthHeightProps;
  return (
    // Disabled warning. Alt props already is present in props
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      width={width}
      height={height}
      placeholder={
        typeof props.src !== 'string'
          ? (props.src as StaticImageData)?.blurDataURL
            ? 'blur'
            : props.placeholder
          : props.placeholder
      }
      className={cx('object-cover object-center', props.className)}
    />
  );
};

export const ClientImg = tw(BaseImg)<ImgProps>``;
