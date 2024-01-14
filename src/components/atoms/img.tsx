import 'server-only';

import { tw } from '@/utils/cx';
import { getBlurData } from '@/utils/img-blur';

import { ClientImg, type ImgProps } from './client-img';

const getImageDimensions = (props: ImgProps) => {
  if ('size' in props) return { width: props.size, height: props.size };
  if ('width' in props) return { width: props.width, height: props.height };
  return {};
};

const BaseImg = async (props: ImgProps) => {
  const { width, height } = getImageDimensions(props);
  const blurData =
    typeof props.src === 'string' && !props.blurDataURL
      ? await getBlurData(props.src, 10, width || 0, height || 0)
      : null;
  return <ClientImg {...props} {...blurData} />;
};

export const Img = tw(BaseImg)<ImgProps>``;
