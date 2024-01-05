import type { Route } from 'next';
import { cache, type CSSProperties } from 'react';

import { Img } from '@/components/atoms/img';
import type { Blog } from '@/lib/blog';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';
import { formatDate } from '@/utils/date';
import { getUrlDomain } from '@/utils/domain';

import { ViewsCounter } from '../views-counter';

import { BlogPostLink } from './item.styles';

interface BlogPostItemProps {
  post: Blog;
  fullDate?: boolean;
  viewsCounter?: JSX.Element;
}

const getHeroImage = cache(async (imagePath?: string) => {
  if (!imagePath) return undefined;
  const src = await import(`../../../../assets/images${imagePath}`);
  return src;
});

export const BlogPostItem = async (props: BlogPostItemProps) => {
  const { post, fullDate } = props;

  const a11yDate = formatDate(post.date);
  const readableDate = fullDate
    ? a11yDate
    : formatDate(post.date, false, {
        year: undefined,
      });

  const color = hexToRgb(post.color, 1, true) || 'var(--color-accent-dark)';
  const heroSrc = await getHeroImage(post.hero);

  return (
    <BlogPostLink
      title={post.title}
      href={(post.link || `/blog/${post.slug}`) as Route}
      style={{ '--post-color': color } as CSSProperties}
    >
      <Img
        src={heroSrc}
        alt={`Hero image for blog post "${post.title}"`}
        width={96}
        height={72}
        className={cx(
          'rounded-1 max-w-12',
          'mobile-lg:max-w-24',
          'aspect-[4/3]',
          'border border-transparent',
          'group-hocus/post:border-[rgba(var(--post-color)/.24)]',
          'dark:group-hocus/post:border-[rgba(var(--post-color)/.36)]',
          'mobile-lg:row-span-2 mobile-lg:mt-[0.1875rem]',
        )}
      />
      <p
        className={cx(
          'w-full tablet-md:self-end font-medium',
          'text-xs text-primary-txt line-clamp-2 text-pretty',
          'group-hocus/post:underline group-hocus/post:decoration-primary-txt',
        )}
      >
        {post.title}
      </p>
      <div
        className={cx(
          'flex flex-col',
          'gap-1 col-span-2',
          'mobile-lg:gap-0.5',
          'mobile-lg:col-span-1 mobile-lg:col-start-2',
        )}
      >
        <p className={'text-2xs text-secondary-txt line-clamp-2 text-pretty'}>
          {post.summary}
        </p>
        {post.link ? (
          <p className={'text-3xs text-tertiary-txt line-clamp-1'}>
            Published on{' '}
            <span className={'underline'}>{getUrlDomain(post.link)}</span>
          </p>
        ) : null}
        <p
          className={cx(
            'flex flex-row items-center w-full',
            'gap-1.5 text-3xs text-tertiary-txt',
            'tabular-nums line-clamp-1',
            'flex-nowrap flex overflow-x-auto',
          )}
        >
          <span
            title={`This blog post was published on ${a11yDate}`}
            aria-label={`This blog post was published on ${a11yDate}`}
          >
            {readableDate}
          </span>
          {Boolean(post.readingTime) ? (
            <>
              <span aria-hidden={'true'} className={'font-bold'}>
                ·
              </span>
              <span
                title={`It takes ${post.readingTime} minutes to read this blog post`}
                aria-label={`It takes ${post.readingTime} minutes to read this blog post`}
              >
                {Math.ceil(post.readingTime || 0)} min read
              </span>
            </>
          ) : null}
          <ViewsCounter slug={post.slug} />
        </p>
      </div>
    </BlogPostLink>
  );
};
