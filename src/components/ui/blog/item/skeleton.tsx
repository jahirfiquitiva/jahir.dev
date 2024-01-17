import cx from '@/utils/cx';

import { BlogPostLink } from './item.styles';

const elementsBackground = 'bg-brand-50 dark:bg-brand-800/50';
export const BlogPostItemSkeleton = () => (
  <BlogPostLink
    title={''}
    href={'#'}
    className={'motion-safe:animate-pulse pointer-events-none'}
    aria-disabled={true}
  >
    <div
      className={cx(
        elementsBackground,
        'min-w-24 h-full',
        'rounded-1 max-w-12',
        'mobile-lg:max-w-24',
        'aspect-[4/3]',
        'mobile-lg:row-span-2',
      )}
    />
    <p
      className={cx(
        elementsBackground,
        'w-full tablet-md:self-end font-medium',
        'text-xs text-primary-txt line-clamp-2 text-pretty',
        'group-hocus/post:underline group-hocus/post:decoration-primary-txt',
      )}
    >
       
    </p>
    <div
      className={cx(
        elementsBackground,
        'flex flex-col',
        'gap-1 col-span-2',
        'mobile-lg:gap-0.5',
        'mobile-lg:col-span-1 mobile-lg:col-start-2',
      )}
    >
      <p className={'text-2xs text-secondary-txt line-clamp-2 text-pretty'}>
         
      </p>
      <p
        className={cx(
          'flex flex-row items-center w-full',
          'gap-1.5 text-3xs text-tertiary-txt',
          'tabular-nums overflow-x-auto',
        )}
      >
        <span> </span>
      </p>
    </div>
  </BlogPostLink>
);
