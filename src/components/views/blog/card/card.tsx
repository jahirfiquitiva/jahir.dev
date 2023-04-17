'use client';

import Icon from '@mdi/react';
import { type CSSProperties, useMemo } from 'react';

import { calendarOutline, mdiClockOutline } from '@/components/icons';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { useTheme } from '@/providers/theme';
import type { ComponentChild, Post } from '@/types';
import { getReadableColor, hexToRgb } from '@/utils/color';
import { formatDate } from '@/utils/date';
import { getUrlDomain } from '@/utils/domain';

import { Stat } from '../../mdx/ui/stat';

import {
  PostCard,
  PostCardHero,
  PostCardContent,
  PostTitle,
  PostDescription,
  PostStatsContainer,
} from './card.styles';

interface PostCardProps {
  post: Post;
  viewsCounter?: ComponentChild;
}

export const BlogPostCard = (props: PostCardProps) => {
  const hasMounted = useHasMounted();
  const { isDark, themeReady } = useTheme();

  const { post, viewsCounter } = props;
  const { link, slug, readingTime } = post;
  const rightLink = link && link.length > 0 ? link : `/blog/${slug}`;
  const domain = getUrlDomain(rightLink);

  const textColor = useMemo<string | null>(() => {
    if (!themeReady || !hasMounted) return null;
    return hexToRgb(getReadableColor(post.color, isDark), undefined, true);
  }, [isDark, themeReady, post.color, hasMounted]);

  const a11yDate = formatDate(post.date);
  const readableDate = formatDate(post.date, { year: undefined });

  return (
    <PostCard
      title={`Blog post: ${post?.title}`}
      href={rightLink}
      style={
        {
          '--post-color':
            hexToRgb(post.color, 1, true) || 'var(--color-accent-dark)',
          '--post-text-color': textColor || 'var(--color-accent-dark)',
        } as CSSProperties
      }
    >
      <PostCardHero
        src={post.hero || ''}
        alt={`Hero image for blog post "${post.title}"`}
        width={post?.heroMeta?.size?.width || 144}
        height={post?.heroMeta?.size?.height || 72}
        placeholder={'blur'}
        blurDataURL={post?.heroMeta?.blur64}
      />
      <PostCardContent>
        <PostTitle>{post.title}</PostTitle>
        <PostDescription>{post.excerpt}</PostDescription>
        {domain ? (
          <span className={'text-3xs text-tertiary-txt'}>
            Published on <span className={'underline'}>{domain}</span>
          </span>
        ) : null}
        <PostStatsContainer>
          {Boolean(readableDate) && (
            <Stat
              title={`This blog post was published on ${a11yDate}`}
              aria-label={`This blog post was published on ${a11yDate}`}
              $sm
            >
              <Icon path={calendarOutline} size={0.5} />
              <span>{readableDate}</span>
            </Stat>
          )}
          {Boolean(readingTime?.minutes) && (
            <Stat
              title={`It takes ${readingTime?.minutes} minutes to read this blog post`}
              aria-label={`It takes ${readingTime?.minutes} minutes to read this blog post`}
              $sm
            >
              <Icon path={mdiClockOutline} size={0.5} />
              <span>{readingTime?.text}</span>
            </Stat>
          )}
          {viewsCounter}
        </PostStatsContainer>
      </PostCardContent>
    </PostCard>
  );
};
