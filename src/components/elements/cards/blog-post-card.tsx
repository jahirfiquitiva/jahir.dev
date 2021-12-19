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
  max-width: 100%;
  border-radius: 12px;
  color: var(--text-secondary);
  transition: all 0.35s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 0.8rem;
  border-color: var(--border-color, var(--divider));

  ${mediaQueries.mobile.lg} {
    flex-direction: row;
    align-items: center;
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
    border-color: var(--border-color, var(--divider));
    & h5 {
      color: var(--hl-color);
      text-decoration: underline;
    }
  }
`;

const ImageContainer = styled.div`
  display: block;
  position: relative;
  box-shadow: none;
  min-height: 100% !important;

  & > span,
  & > span > img {
    border-radius: 6px;
    min-width: 96px !important;
    min-height: 100% !important;
    width: 100% !important;
    max-height: 144px !important;

    ${mediaQueries.tablet.sm} {
      min-width: 160px !important;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: none;
  overflow: hidden;
  max-width: 100%;
`;

const Excerpt = styled.p`
  display: -webkit-box;
  height: auto;
  opacity: 1;
  visibility: visible;
  margin: 0.4rem 0;
  line-height: 1.625;
  color: var(--text-secondary);
  font-size: var(--font-3xs);
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-lines: 1;

  ${mediaQueries.mobile.lg} {
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
        ...buildShadowStyles(postColor, isDark, { border: 0.35 }),
        ...buildStyles({ '--hl-color': textColor || undefined }),
      }}
    >
      <ImageContainer>
        <Image
          src={hero || ''}
          alt={title}
          height={120}
          width={160}
          objectFit={'cover'}
          objectPosition={'center'}
          layout={'responsive'}
        />
      </ImageContainer>
      <Content>
        <Heading size={'5'} fontSize={'xs'}>
          {title}
        </Heading>
        {excerpt && <Excerpt>{excerpt}</Excerpt>}
        <Date className={'date'}>
          {formatDate(date, false)}
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
