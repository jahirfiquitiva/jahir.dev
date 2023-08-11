import type { Route } from 'next';

import { Link } from '@/components/core/link';
import { ZoomableImg } from '@/components/views/mdx/components/zoomable-img';
import { getUrlDomain } from '@/utils/domain';
import type { Blog } from 'contentlayer/generated';

interface HeroProps {
  title: Blog['title'];
  hero?: Blog['hero'];
  meta?: Blog['heroMeta'];
  source?: Blog['heroSource'];
}

const Hero = (props: HeroProps) => {
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
    <figure className={'my-20'}>
      <ZoomableImg
        src={hero || ''}
        alt={`Hero image for blog post "${title}"`}
        className={'aspect-[2/1] h-auto rounded-8 w-full'}
        quality={100}
        priority
        zoomable
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

export default Hero;
