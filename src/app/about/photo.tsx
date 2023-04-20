import { ZoomableImg } from '@/components/views/mdx/components/zoomable-img';
import { getRandomItem } from '@/utils/random';

import { images } from './images';

export default function Photo() {
  const photo = getRandomItem(images);
  return (
    <figure className={'mt-12 mb-8'}>
      <ZoomableImg
        src={photo.src}
        alt={photo.alt}
        quality={100}
        placeholder={'blur'}
        className={'aspect-[21/9] rounded-8'}
        priority
        zoomable
      />
      <figcaption>📸&nbsp;&nbsp;{photo.alt}</figcaption>
    </figure>
  );
}
