import type { Route } from 'next';
import { cache } from 'react';

import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import type { Blog } from '@/lib/blog';
import { getUrlDomain } from '@/utils/domain';

interface HeroProps {
  title: Blog['title'];
  hero?: Blog['hero'];
  // meta?: Blog['heroMeta'];
  source?: Blog['heroSource'];
}

const getHeroImage = cache(async (imagePath?: string) => {
  if (!imagePath) return undefined;
  const src = await import(`../../../assets/images${imagePath}`);
  return src;
});

export const Hero = async (props: HeroProps) => {
  const { title, hero, source } = props;
  const heroSrc = await getHeroImage(hero);
  return (
    <figure className={'-my-4'}>
      <Img
        src={heroSrc}
        alt={`Cover image for blog post: "${title}"`}
        className={'aspect-[2/1] h-auto rounded-2 w-full'}
        quality={100}
        priority
      />
      {source ? (
        <figcaption>
          Image from{' '}
          <Link title={source} href={source as Route}>
            {getUrlDomain(source, true)}
          </Link>
        </figcaption>
      ) : null}
    </figure>
  );
};
