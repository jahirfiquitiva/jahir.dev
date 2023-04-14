'use client';

import { type CSSProperties, useMemo } from 'react';

import { useTheme } from '@/providers/theme';
import type { Post } from '@/types';
import { getReadableColor, hexToRgb } from '@/utils/color';

import { ViewsCounter } from '../../mdx/ui/views-counter';

import {
  BlogCard,
  BlogCardHero,
  BlogTitle,
  BlogDescription,
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
            hexToRgb(post.color, 1, true) || 'var(--color-accent-shadow)',
          '--post-text-color': textColor || 'var(--color-accent-shadow)',
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
      <div className={'flex flex-col'}>
        <BlogTitle>{post.title}</BlogTitle>
        <BlogDescription>{post.excerpt}</BlogDescription>
        <div className={'text-3xs text-tertiary-txt'}>
          <ViewsCounter
            slug={`blog--${slug}`}
            devToId={devToId}
            inProgress={post.inProgress}
          />
        </div>
      </div>
    </BlogCard>
  );
};
