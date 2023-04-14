'use client';

import { type CSSProperties, useMemo } from 'react';

import { useTheme } from '@/providers/theme';
import type { Post } from '@/types';
import { getReadableColor, hexToRgb } from '@/utils/color';

import { ViewsCounter } from '../../mdx/ui/views-counter';

import {
  BlogCard,
  BlogCardHero,
  BlogCardContent,
  BlogTitle,
  BlogDescription,
  BlogStatsContainer,
} from './card.styles';

interface PostCardProps {
  post: Post;
}

export const BlogPostCard = (props: PostCardProps) => {
  const { isDark, themeReady } = useTheme();

  const { post } = props;
  const { link, slug, devToId } = post;
  const rightLink = link && link.length > 0 ? link : `/blog/${slug}`;

  const textColor = useMemo<string | null>(() => {
    if (!themeReady) return '';
    return hexToRgb(getReadableColor(post.color, isDark), undefined, true);
  }, [isDark, themeReady, post.color]);

  return (
    <BlogCard
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
      <BlogCardHero
        src={post.hero || ''}
        alt={`Hero image for blog post "${post.title}"`}
        width={post?.heroMeta?.size?.width || 144}
        height={post?.heroMeta?.size?.height || 72}
        placeholder={'blur'}
        blurDataURL={post?.heroMeta?.blur64}
      />
      <BlogCardContent>
        <BlogTitle>{post.title}</BlogTitle>
        <BlogDescription>{post.excerpt}</BlogDescription>
        <BlogStatsContainer>
          <ViewsCounter
            slug={`blog--${slug}`}
            devToId={devToId}
            inProgress={post.inProgress}
          />
        </BlogStatsContainer>
      </BlogCardContent>
    </BlogCard>
  );
};
