import styled from '@emotion/styled';
import { useMemo } from 'react';

import { LinkCard, Image, Heading } from '~/components/atoms/simple';
import useSafePalette from '~/hooks/useSafePalette';
import { useTheme } from '~/providers/theme';
import { Component, ComponentProps, Post, mediaQueries } from '~/types';
import getColorFromPalette from '~/utils/colors/get-color-from-palette';
import getReadableColor from '~/utils/colors/get-readable-color';
import formatDate from '~/utils/format/format-date';
import buildShadowStyles from '~/utils/styles/build-shadow-styles';
import buildStyles from '~/utils/styles/build-styles';

const BaseBlogPostCard = styled(LinkCard)`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  color: var(--text-secondary);
  min-height: 192px;
  transition: all 0.35s ease-in-out;

  ${mediaQueries.tablet.sm} {
    min-height: 232px;
  }

  * {
    transition: all 0.35s ease-in-out;
  }

  & p {
    font-size: var(--font-3xs);

    &.date {
      color: var(--text-tertiary);
    }

    ${mediaQueries.tablet.sm} {
      font-size: var(--font-2xs);
    }
  }

  &:hover,
  &:focus {
    & h4 {
      color: var(--hl-color);
      text-decoration: underline;
    }

    & p {
      height: auto;
      opacity: 1;
      visibility: visible;
      margin: 0.4rem 0;
      color: var(--text-primary);
      line-height: 1.75;

      &.date {
        margin: 0.2rem 0;
        color: var(--text-secondary);
      }
    }
  }
`;

const BlogPostImage = styled(Image)`
  min-height: 192px;
  height: 100%;
  max-height: 192px;

  ${mediaQueries.tablet.sm} {
    max-height: 232px;
  }

  & > span:first-of-type,
  & img {
    min-height: 100% !important;
    min-width: 100% !important;
    height: 100% !important;
  }
  & img {
    object-fit: cover;
  }
`;

const Scrim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 8px;
  background-color: rgb(var(--background-values));
  opacity: 0.05;
  pointer-events: none;

  .dark & {
    opacity: 0.2;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 -4px 6px -1px rgba(255, 255, 255, 0.1),
    0 -2px 4px -1px rgba(255, 255, 255, 0.05);
  background-color: var(--blog-card-color);
  z-index: 1;
  backdrop-filter: blur(8px) saturate(200%);
`;

const Excerpt = styled.p`
  display: -webkit-box;
  opacity: 0;
  line-height: 0;
  visibility: hidden;
  pointer-events: none;
  color: var(--text-secondary);
  font-size: var(--font-3xs);
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-lines: 1;

  ${mediaQueries.tablet.sm} {
    font-size: var(--font-2xs);
    -webkit-line-clamp: 2;
    max-lines: 2;
  }
`;

const Date = styled.p`
  margin: 0.2rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface BlogPostCardProps extends ComponentProps, Post {}

export const BlogPostCard: Component<BlogPostCardProps> = (props) => {
  const {
    title,
    excerpt,
    hero = '',
    date,
    color: defaultColor,
    slug,
    link,
    readingTime,
  } = props;
  const { isDark, themeReady } = useTheme();

  const { data: paletteData } = useSafePalette(
    hero.startsWith('..') ? null : hero,
  );

  const rightLink = link && link.length > 0 ? link : `/blog/${slug}`;

  const postColor = useMemo<string | undefined>(() => {
    if (!themeReady || !paletteData) return defaultColor;
    return getColorFromPalette(paletteData, isDark) || defaultColor;
  }, [themeReady, isDark, paletteData, defaultColor]);

  const textColor = useMemo<string | null>(() => {
    if (!themeReady) return null;
    return getReadableColor(postColor, isDark);
  }, [themeReady, isDark, postColor]);

  return (
    <BaseBlogPostCard
      title={`Link to blog post: ${title}`}
      href={rightLink}
      underline={false}
      style={{
        ...buildShadowStyles(postColor),
        backgroundColor: postColor || 'unset',
      }}
    >
      <BlogPostImage src={hero || ''} />
      <Scrim />
      <Content>
        <Heading
          size={'4'}
          fontSize={'xs'}
          style={buildStyles({ '--hl-color': textColor || undefined })}
        >
          {title}
        </Heading>
        {excerpt && <Excerpt>{excerpt}</Excerpt>}
        <Date className={'date'}>
          {formatDate(date)}
          {(readingTime?.minutes || 0) > 0 && (
            <>
              {' • '}
              {readingTime?.text}
            </>
          )}
        </Date>
      </Content>
    </BaseBlogPostCard>
  );
};
