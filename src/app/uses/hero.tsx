import setupImage from '@/assets/images/setup.jpeg';
import { Img } from '@/components/atoms/img';
import cx from '@/utils/cx';

export const UsesHero = () => (
  <figure className={'my-2'}>
    <div
      className={cx(
        'aspect-video overflow-hidden',
        'tablet-md:rounded-4',
        '-mx-3 tablet-md:-mx-4',
      )}
    >
      <Img
        src={setupImage}
        alt={"Jahir's desk setup in early 2023"}
        quality={100}
        priority
      />
    </div>
    <figcaption>Jahir&apos;s desk setup in early 2024</figcaption>
  </figure>
);
