import a from '@/assets/images/contact/0.png';
import b from '@/assets/images/contact/1.png';
import c from '@/assets/images/contact/2.png';
import d from '@/assets/images/contact/3.png';
import { Img } from '@/components/core/img';
import cx from '@/utils/cx';
import { getRandomItem } from '@/utils/random';

const imagesAlts: Array<string> = [
  'Person taking a selfie with a t-shirt that says hi',
  'Person laying on the floor and checking their phone',
  'Person reading a book',
  'Person walking like a zombie',
];

const images = [
  { src: a, alt: imagesAlts[0] },
  { src: b, alt: imagesAlts[1] },
  { src: c, alt: imagesAlts[2] },
  { src: d, alt: imagesAlts[3] },
];

export default function Doodle() {
  const photo = getRandomItem(images);
  return (
    <Img
      size={384}
      src={photo.src}
      alt={photo.alt}
      className={cx(
        'aspect-square max-w-[192px] mobile-lg:max-w-[220px]',
        'filter drop-shadow-doodle mx-auto my-16',
      )}
    />
  );
}
