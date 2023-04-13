import { Img } from '@/components/core/img';
import type { Post } from '@/types';

interface HeroProps {
  title: Post['title'];
  hero?: Post['hero'];
  meta?: Post['heroMeta'];
  source?: Post['heroSource'];
}

const Hero = (props: HeroProps) => {
  const { title, hero, meta, source } = props;

  const extraProps = meta
    ? {
        blurDataURL: meta.blur64,
        width: meta.size.width || 666,
        height: meta.size.height || 375,
      }
    : {};

  return (
    <figure className={'my-20'}>
      <Img
        src={hero || ''}
        alt={`Hero image for blog post "${title}"`}
        className={'aspect-[2/1] h-auto rounded-8'}
        quality={100}
        placeholder={'blur'}
        priority
        {...extraProps}
      />
      {source ? <figcaption>{source}</figcaption> : null}
    </figure>
  );
};

export default Hero;
