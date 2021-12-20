import styled from '@emotion/styled';
import { mdiThumbUp } from '@mdi/js';
import Icon from '@mdi/react';
import { useMemo } from 'react';

import { ViewsCounter } from '~/components/atoms/complex';
import { LinkCard, Image, Heading } from '~/components/atoms/simple';
import useRequest from '~/hooks/useRequest';
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
  border-radius: 0;
  border: none;
  color: var(--text-secondary);
  transition: all 0.35s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 0 calc(0.8rem * -1);
  padding: 0.8rem;

  ${mediaQueries.mobile.lg} {
    flex-direction: row;
  }
  ${mediaQueries.tablet.sm} {
    gap: 1.2rem;
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

  & .reactions {
    color: var(--text-secondary);
  }

  &:hover,
  &:focus {
    box-shadow: none;
    background-color: var(--bg-color);
    & h5 {
      color: var(--hl-color);
      text-decoration: underline;
    }
    & .reactions {
      color: var(--text-primary);
    }
  }
`;

const ImageContainer = styled.div`
  display: block;
  box-shadow: none;
  min-height: 100% !important;

  & > span,
  & > span > img {
    border-radius: 6px;
    min-width: 96px !important;
    width: 100% !important;
    min-height: 100% !important;
    height: 100% !important;
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
  margin: auto 0;
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

const UnderlinedSpan = styled.span`
  text-decoration: underline;
`;

const PostReactionsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--bg-color);
  border-bottom-left-radius: 10px;
  font-size: var(--font-2xs);
  font-family: var(--manrope-font);
  border: 1px solid;
  border-color: var(--border-color, var(--divider));
  border-top-width: 0;
  border-right-width: 0;
  display: flex;
  align-items: center;
  padding: 0.2rem 0.6rem;
  gap: 0.4rem;
  transition-duration: 0.1s;

  & > * {
    transition-duration: 0.1s;
  }
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
    devToId,
  } = props;
  const { data: views } = useRequest<{ total?: string }>(
    `/api/views/blog--${slug}?devToId=${devToId}`,
  );

  const { isDark, themeReady } = useTheme();

  const { data: paletteData } = useSafePalette(
    hero.startsWith('..') ? null : hero,
  );

  const postColor = useMemo<string | undefined>(() => {
    if (!themeReady || !paletteData) return defaultColor;
    return getColorFromPalette(paletteData, isDark) || defaultColor;
  }, [themeReady, isDark, paletteData, defaultColor]);

  const textColor = useMemo<string | null>(() => {
    if (!themeReady) return null;
    return getReadableColor(postColor, isDark);
  }, [themeReady, isDark, postColor]);

  const rightLink = useMemo<string>(() => {
    return link && link.length > 0 ? link : `/blog/${slug}`;
  }, [link, slug]);

  const domain = useMemo<string>(() => {
    try {
      const url = new URL(rightLink);
      return url.hostname.replace('www.', '');
    } catch (e) {
      return '';
    }
  }, [rightLink]);

  return (
    <BaseBlogPostCard
      title={`Link to blog post: ${title}`}
      href={rightLink}
      underline={false}
      style={{
        ...buildShadowStyles(postColor, isDark, {
          border: 0.35,
          bg: isDark ? 0.1 : 0.025,
        }),
        ...buildStyles({ '--hl-color': textColor || undefined }),
      }}
    >
      <ImageContainer>
        <Image
          src={hero || ''}
          alt={title}
          height={72}
          width={144}
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
          {formatDate(date, { year: undefined, month: 'short' })}&nbsp;•&nbsp;
          {views?.total && views?.total !== '0' ? (
            <>{views?.total} views</>
          ) : (readingTime?.minutes || 0) > 0 ? (
            readingTime?.text
          ) : domain ? (
            <>
              Published on <UnderlinedSpan>{domain}</UnderlinedSpan>
            </>
          ) : null}
        </Date>
      </Content>
    </BaseBlogPostCard>
  );
};
