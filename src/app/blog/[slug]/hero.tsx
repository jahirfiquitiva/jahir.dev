import type { Route } from 'next';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link/link';
import { getUrlDomain } from '@/utils/domain';
import type { Blog } from 'contentlayer/generated';

interface HeroProps {
  title: Blog['title'];
  hero?: Blog['hero'];
  meta?: Blog['heroMeta'];
  source?: Blog['heroSource'];
}

export const Hero = (props: HeroProps) => {
  const { title, hero, meta, source } = props;

  const extraProps = meta
    ? {
        blurDataURL: meta.blur64,
        width: meta.size.width || 666,
        height: meta.size.height || 375,
        placeholder: 'blur' as const,
      }
    : {};

  return (
    <figure className={'my-16'}>
      <Img
        src={hero || ''}
        alt={`Hero image for blog post "${title}"`}
        className={'aspect-[2/1] h-auto rounded-8 w-full'}
        quality={100}
        priority
        {...extraProps}
      />
      {source ? (
        <figcaption>
          Image from{' '}
          <Link href={source as Route} title={source}>
            {getUrlDomain(source, true)}
          </Link>
        </figcaption>
      ) : null}
    </figure>
  );
};
