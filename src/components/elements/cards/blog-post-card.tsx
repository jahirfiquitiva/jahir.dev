import styled from '@emotion/styled';
import { mdiCalendarBlank, mdiClockOutline, mdiEyeOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useMemo } from 'react';

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
  border-radius: 12px;
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
  margin: 0.4rem 0 0;
  ${mediaQueries.mobile.lg} {
    margin: auto 0;
  }
`;

const Excerpt = styled.p`
  display: -webkit-box;
  height: auto;
  opacity: 1;
  visibility: visible;
  margin: 0.2rem 0;
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

const Published = styled.p`
  margin: 0.2rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--text-tertiary);
  font-size: var(--font-3xs);
  font-weight: normal;
`;

const UnderlinedSpan = styled.span`
  text-decoration: underline;
`;

const InfoSpan = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
`;

const InfoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  column-gap: 0.8rem;
  row-gap: 0.4rem;
  margin-top: 0.4rem;
  color: var(--text-tertiary);
  font-size: var(--font-3xs);
  font-weight: normal;
  line-height: inherit;
  flex-wrap: wrap;
  ${mediaQueries.mobile.lg} {
    margin-top: 0.2rem;
  }
  ${mediaQueries.tablet.sm} {
    column-gap: 1rem;
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
    heroMeta,
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

  const extraHeroProps = useMemo<{ placeholder?: 'blur' }>(() => {
    if (heroMeta && heroMeta.blur64) {
      return { placeholder: 'blur', blurDataURL: heroMeta.blur64 };
    }
    return {};
  }, [heroMeta]);

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
      title={`Blog post: ${title}`}
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
          {...extraHeroProps}
        />
      </ImageContainer>
      <Content>
        <Heading size={'5'} fontSize={'xs'}>
          {title}
        </Heading>
        {excerpt && <Excerpt>{excerpt}</Excerpt>}
        {domain ? (
          <Published>
            Published on <UnderlinedSpan>{domain}</UnderlinedSpan>
          </Published>
        ) : null}
        <InfoContainer>
          <InfoSpan>
            <Icon path={mdiCalendarBlank} size={0.73} />
            {formatDate(date, { year: undefined, month: 'short' })}
          </InfoSpan>
          {(readingTime?.minutes || 0) > 0 ? (
            <InfoSpan>
              <Icon path={mdiClockOutline} size={0.73} />
              {readingTime?.text}
            </InfoSpan>
          ) : null}
          {views?.total && views?.total !== '0' ? (
            <InfoSpan>
              <Icon path={mdiEyeOutline} size={0.73} />
              {views?.total} views
            </InfoSpan>
          ) : null}
        </InfoContainer>
      </Content>
    </BaseBlogPostCard>
  );
};
