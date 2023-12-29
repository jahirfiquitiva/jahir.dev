import { Img } from '@/components/img';
import cx from '@/utils/cx';

import { getAboutImage } from './images';

export const revalidate = 86400;

export default async function Photo() {
  const photo = await getAboutImage();
  return (
    <figure className={'my-4'}>
      <div
        className={cx(
          'aspect-[21/9]',
          'tablet-md:rounded-4',
          'overflow-hidden -mx-2.5',
          'mobile-lg:-mx-3',
          'tablet-md:-mx-4',
        )}
      >
        <Img
          src={photo.src}
          alt={photo.alt}
          quality={100}
          placeholder={'blur'}
          className={'h-full'}
          priority
        />
      </div>
      <figcaption>{photo.alt}</figcaption>
    </figure>
  );
}
