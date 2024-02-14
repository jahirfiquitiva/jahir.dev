import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import type { CleanBlog } from '@/utils/blog';
import cx from '@/utils/cx';
import { getUrlDomain } from '@/utils/domain';

interface HeroProps {
  title: CleanBlog['title'];
  hero?: CleanBlog['hero'];
  source?: CleanBlog['heroSource'];
  heroMeta?: CleanBlog['heroMeta'];
}

export const Hero = (props: HeroProps) => {
  const { title, hero, source, heroMeta } = props;
  return (
    <figure
      className={cx(
        'overflow-hidden -z-1',
        'max-w-[calc(100vw_+_calc(100vw_-_100%))]',
        'absolute top-0 -left-[calc(100vw_-_100%)] -right-[calc(100vw_-_100%)]',
        'pointer-events-none blur transition',
        'saturate-125 opacity-50 dark:opacity-65',
        // eslint-disable-next-line max-len
        '[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)]',
      )}
      style={{ height: '85vh', maxHeight: 384, width: '100vw' }}
    >
      <Img
        src={hero || ''}
        alt={`Cover image for blog post: "${title}"`}
        className={'h-full w-full'}
        priority
        data-nozoom
        {...heroMeta}
      />
      {source ? (
        <figcaption>
          Image from{' '}
          <Link title={source} href={source}>
            {getUrlDomain(source, true)}
          </Link>
        </figcaption>
      ) : null}
    </figure>
  );
};
