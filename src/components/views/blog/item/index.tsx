import type { Route } from 'next';
import { type CSSProperties } from 'react';

import { Img } from '@/components/atoms/img';
import type { SimpleBlog } from '@/utils/blog';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';
import { formatDate } from '@/utils/date';
import { getUrlDomain } from '@/utils/domain';

import { ViewsCounter } from '../views-counter';

import { BlogPostLink } from './item.styles';

interface BlogPostItemProps {
  post: SimpleBlog;
  fullDate?: boolean;
  viewsCounter?: JSX.Element;
}

const MAX_WIDTH = 96;
const MAX_HEIGHT = 72;
const calcHeroWidthAndHeight = (dimensions: {
  width?: number;
  height?: number;
}) => {
  const { width = MAX_WIDTH, height = MAX_HEIGHT } = dimensions;
  return {
    width: Math.min(width, MAX_WIDTH),
    height: Math.min(height, MAX_HEIGHT),
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
      <Img
        src={post.hero || ''}
        alt={`Hero image for blog post "${post.title}"`}
        {...calcHeroWidthAndHeight(post?.heroMeta?.size)}
        placeholder={Boolean(post?.heroMeta?.blur64) ? 'blur' : undefined}
        blurDataURL={post?.heroMeta?.blur64}
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
          {post.excerpt}
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
            'gap-0.5 text-3xs text-tertiary-txt',
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
          {Boolean(post.readingTime.minutes) ? (
            <>
              <span aria-hidden={'true'}> • </span>
              <span
                title={`It takes ${post.readingTime.minutes} minutes to read this blog post`}
                aria-label={`It takes ${post.readingTime.minutes} minutes to read this blog post`}
              >
                {post.readingTime.text}
              </span>
            </>
          ) : null}
          <ViewsCounter slug={post.slug} />
        </p>
      </div>
    </BlogPostLink>
  );
};
