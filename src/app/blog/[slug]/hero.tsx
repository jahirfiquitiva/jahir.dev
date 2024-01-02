import type { Route } from 'next';

import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
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
    <figure className={'-my-4'}>
      <Img
        src={hero || ''}
        alt={`Cover image for blog post: "${title}"`}
        className={'aspect-[2/1] h-auto rounded-2 w-full'}
        quality={100}
        priority
        {...extraProps}
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
