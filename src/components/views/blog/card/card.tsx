'use client';

import Icon from '@mdi/react';
import type { Route } from 'next';
import { useMemo, type CSSProperties, type PropsWithChildren } from 'react';

import { calendarOutline } from '@/components/icons/icons';
import { mdiClockOutline } from '@/components/icons/mdi';
import { useHasMounted } from '@/hooks/use-has-mounted';
import type { Blog } from '@/lib/blog';
import { useTheme } from '@/providers/theme-provider';
import { getReadableColor, hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';
import { formatDate } from '@/utils/date';
import { getUrlDomain } from '@/utils/domain';

import {
  PostCard,
  PostCardContent,
  PostCardHero,
  PostDescription,
  PostStat,
  PostStatsContainer,
  PostTitle,
  SmallPostHero,
} from './card.styles';

interface PostCardProps {
  post: Blog;
  viewsCounter?: PropsWithChildren['children'];
  className?: string;
  style?: CSSProperties;
  showYear?: boolean;
  small?: boolean;
}

export const BlogPostCard = (props: PostCardProps) => {
  const hasMounted = useHasMounted();
  const { isDark } = useTheme();

  const { post, viewsCounter, className, style, showYear, small } = props;
  const { link, slug, readingTime } = post;
  const rightLink = link && link.length > 0 ? link : `/blog/${slug}`;
  const domain = getUrlDomain(rightLink);

  const textColor = useMemo<string | null>(() => {
    if (!hasMounted) return null;
    return hexToRgb(getReadableColor(post.color, isDark), undefined, true);
  }, [isDark, post.color, hasMounted]);

  const a11yDate = formatDate(post.date);
  const readableDate = formatDate(post.date, {
    year: showYear ? 'numeric' : undefined,
  });

  const Hero = small ? SmallPostHero : PostCardHero;

  return (
    <PostCard
      title={`Blog post: ${post?.title}`}
      href={rightLink as Route}
      className={cx(
        small ? 'flex-row items-center' : 'tablet-sm:gap-16',
        className,
      )}
      style={
        {
          ...style,
          '--post-color':
            hexToRgb(post.color, 1, true) || 'var(--color-accent-dark)',
          '--post-text-color': textColor || 'var(--color-accent-dark)',
        } as CSSProperties
      }
    >
      <Hero
        src={post.hero || ''}
        alt={`Hero image for blog post "${post.title}"`}
        width={post?.heroMeta?.size?.width || 144}
        height={post?.heroMeta?.size?.height || 72}
        placeholder={Boolean(post?.heroMeta?.blur64) ? 'blur' : undefined}
        blurDataURL={post?.heroMeta?.blur64}
      />
      <PostCardContent>
        <PostTitle>{post.title}</PostTitle>
        {!small ? <PostDescription>{post.excerpt}</PostDescription> : null}
        {domain && !small ? (
          <span className={'text-3xs text-tertiary-txt'}>
            Published on <span className={'underline'}>{domain}</span>
          </span>
        ) : null}
        <PostStatsContainer className={small ? 'mt-4' : ''}>
          {Boolean(readableDate) && (
            <PostStat
              title={`This blog post was published on ${a11yDate}`}
              aria-label={`This blog post was published on ${a11yDate}`}
              $sm
            >
              <Icon path={calendarOutline} size={0.5} />
              <span>{readableDate}</span>
            </PostStat>
          )}
          {Boolean(readingTime?.minutes) && !small && (
            <PostStat
              title={`It takes ${readingTime?.minutes} minutes to read this blog post`}
              aria-label={`It takes ${readingTime?.minutes} minutes to read this blog post`}
              className={'max-tablet-sm:sr-only'}
              $sm
            >
              <Icon path={mdiClockOutline} size={0.5} />
              <span>{readingTime?.text}</span>
            </PostStat>
          )}
          {viewsCounter}
        </PostStatsContainer>
      </PostCardContent>
    </PostCard>
  );
};
