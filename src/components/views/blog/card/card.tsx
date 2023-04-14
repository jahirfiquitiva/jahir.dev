'use client';

import { type CSSProperties, useMemo } from 'react';

import { useTheme } from '@/providers/theme';
import type { Post } from '@/types';
import { getReadableColor, hexToRgb } from '@/utils/color';
import { formatDate } from '@/utils/date';

import { Stat } from '../../mdx/ui/stat';
import { ViewsCounter } from '../../mdx/ui/views-counter';

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
}

export const BlogPostCard = (props: PostCardProps) => {
  const { isDark, themeReady } = useTheme();

  const { post } = props;
  const { link, slug, devToId, readingTime } = post;
  const rightLink = link && link.length > 0 ? link : `/blog/${slug}`;

  const textColor = useMemo<string | null>(() => {
    if (!themeReady) return '';
    return hexToRgb(getReadableColor(post.color, isDark), undefined, true);
  }, [isDark, themeReady, post.color]);

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
        <PostStatsContainer>
          {Boolean(readableDate) && (
            <Stat
              title={`This blog post was published on ${a11yDate}`}
              aria-label={`This blog post was published on ${a11yDate}`}
            >
              {readableDate}
            </Stat>
          )}
          {Boolean(readingTime?.minutes) && (
            <Stat
              title={`It takes ${readingTime?.minutes} minutes to read this blog post`}
              aria-label={`It takes ${readingTime?.minutes} minutes to read this blog post`}
            >
              {readingTime?.text}
            </Stat>
          )}
          <ViewsCounter
            slug={`blog--${slug}`}
            devToId={devToId}
            inProgress={post.inProgress}
          />
        </PostStatsContainer>
      </PostCardContent>
    </PostCard>
  );
};
