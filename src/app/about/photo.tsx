import { ZoomableImg } from '@/components/views/mdx/components/zoomable-img/zoomable-img';

import { getAboutImage } from './images';

export default async function Photo() {
  const photo = await getAboutImage();
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
        data-umami-event={'Zoomed about page photo'}
      />
      <figcaption>📸&nbsp;&nbsp;{photo.alt}</figcaption>
    </figure>
  );
}
