'use client';

import type { Route } from 'next';
import { useMemo, type CSSProperties } from 'react';
import { cx } from 'react-twc';

import { Img } from '@/components/img';
import { useHasMounted } from '@/hooks/use-has-mounted';
import type { Blog } from '@/lib/blog';
import { useTheme } from '@/providers/theme-provider';
import { getReadableColor, hexToRgb } from '@/utils/color';
import { formatDate } from '@/utils/date';
import { getUrlDomain } from '@/utils/domain';

import { ViewsCounter } from '../views-counter';

import { BlogPostLink } from './item.styles';

interface BlogPostItemProps {
  post: Blog;
  fullDate?: boolean;
}

export const BlogPostItem = (props: BlogPostItemProps) => {
  const { post, fullDate } = props;
  const hasMounted = useHasMounted();

  const a11yDate = formatDate(post.date);
  const readableDate = formatDate(post.date, {
    year: fullDate ? 'numeric' : undefined,
  });

  const color = useMemo<string | null>(() => {
    if (!hasMounted) return null;
    return hexToRgb(post.color, 1, true) || 'var(--color-accent-dark)';
  }, [post.color, hasMounted]);

  return (
    <BlogPostLink
      title={`Blog post: "${post.title}"`}
      href={(post.link || `/blog/${post.slug}`) as Route}
      style={{ '--post-color': color } as CSSProperties}
    >
      <Img
        src={post.hero || ''}
        alt={`Hero image for blog post "${post.title}"`}
        width={post?.heroMeta?.size?.width || 144}
        height={post?.heroMeta?.size?.height || 72}
        placeholder={Boolean(post?.heroMeta?.blur64) ? 'blur' : undefined}
        blurDataURL={post?.heroMeta?.blur64}
        className={cx(
          'rounded-1 max-w-12',
          'mobile-lg:max-w-24 tablet-sm:max-w-32',
          'object-center object-cover',
          'aspect-[4/3]',
          'border border-transparent',
          'group-hocus/post:border-[rgba(var(--post-color)/.24)]',
          'dark:group-hocus/post:border-[rgba(var(--post-color)/.36)]',
          'mobile-lg:row-span-2 mobile-lg:mt-[0.1875rem]',
        )}
      />
      <p
        className={cx(
          'w-full tablet-md:self-end',
          'text-xs text-primary-txt line-clamp-2 text-pretty',
          'group-hocus/post:underline group-hocus/post:decoration-primary-txt',
          'group-hocus/post:underline-offset-2 group-hocus/post:decoration-2',
        )}
      >
        {post.title}
      </p>
      <div
        className={cx(
          'flex flex-col',
          'gap-1.5 col-span-2',
          'mobile-md:gap-1',
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
            'gap-1 text-3xs text-tertiary-txt',
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
          {post.readingTime ? (
            <>
              <span aria-hidden={'true'}> • </span>
              <span>{post.readingTime}</span>
            </>
          ) : null}
          <ViewsCounter slug={post.slug} />
        </p>
      </div>
    </BlogPostLink>
  );
};
