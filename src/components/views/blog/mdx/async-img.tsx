import { cache } from 'react';

import { Img, type ImgProps } from '@/components/atoms/img';

const getImage = cache(async (imagePath?: string) => {
  if (!imagePath) return undefined;
  const src = await import(`../../../../assets/images${imagePath}`);
  return src;
});

export const AsyncImg = async (props: ImgProps) => {
  const src =
    typeof props.src === 'string'
      ? props.src.startsWith('/blog')
        ? await getImage(props.src)
        : props.src
      : props.src;
  return <Img {...props} src={src} />;
};
