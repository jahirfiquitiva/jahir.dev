import type { Route } from 'next';
import { type CSSProperties } from 'react';

import { Img } from '@/components/atoms/img';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';
import { formatDate } from '@/utils/date';
import { getUrlDomain } from '@/utils/domain';
import type { Blog } from 'contentlayer/generated';

import { ViewsCounter } from '../views-counter';

import { BlogPostLink } from './item.styles';

interface BlogPostItemProps {
  post: Blog;
  fullDate?: boolean;
}

const MAX_WIDTH = 96;
const MAX_HEIGHT = 72;
const getHeroProps = (heroMeta: Blog['heroMeta']) => {
  const { width = MAX_WIDTH, height = MAX_HEIGHT, ...rest } = heroMeta || {};
  return {
    width: Math.min(width, MAX_WIDTH),
    height: Math.min(height, MAX_HEIGHT),
    ...rest,
  };
};

export const BlogPostItem = (props: BlogPostItemProps) => {
  const { post, fullDate } = props;

  const a11yDate = formatDate(post.date);
  const readableDate = fullDate
    ? a11yDate
    : formatDate(post.date, false, {
        year: undefined,
      });

  const color = hexToRgb(post.color, 1, true) || 'var(--color-accent-dark)';

  return (
    <BlogPostLink
      title={post.title}
      href={(post.link || `/blog/${post.slug}`) as Route}
      style={{ '--post-color': color } as CSSProperties}
    >
      <div
        className={cx(
          'overflow-hidden',
          'rounded-1 max-w-12',
          'mobile-md:max-w-18',
          'mobile-lg:max-w-24',
          'aspect-[4/3] transition',
          'border border-transparent',
          'group-hocus/post:border-[rgba(var(--post-color)/.24)]',
          'dark:group-hocus/post:border-[rgba(var(--post-color)/.36)]',
          'mobile-md:row-span-2 mobile-md:mt-[0.1875rem]',
        )}
      >
        <Img
          src={post.hero || ''}
          alt={`Hero image for blog post "${post.title}"`}
          {...getHeroProps(post.heroMeta)}
          className={cx(
            'aspect-[4/3]',
            'transition duration-200 group-hocus/post:scale-110',
          )}
        />
      </div>
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
          'mobile-md:col-span-1 mobile-md:col-start-2',
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
            'tabular-nums overflow-x-auto',
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
                {Math.ceil(post.readingTime)} min read
              </span>
            </>
          ) : null}
          {!post.link ? (
            <ViewsCounter slug={post.slug} inProgress={post.inProgress} />
          ) : null}
        </p>
      </div>
    </BlogPostLink>
  );
};
