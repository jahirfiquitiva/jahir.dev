import Icon from '@mdi/react';
import { useMemo } from 'react';

import { Img, Link } from '@/components/atoms';
import { usePalette, type Palette, type SwatchName } from '@/hooks/usePalette';
import { useRequest } from '@/hooks/useRequest';
import { mdiClockOutline, mdiEyeOutline, calendarOutline } from '@/icons';
import { useTheme } from '@/providers/theme';
import type { FC, Post } from '@/types';
import { getReadableColor } from '@/utils/color/get-readable-color';
import { hexToRGB } from '@/utils/color/hex-to-rgb';
import { getDomainFromUrl } from '@/utils/format/domain';
import { formatDate } from '@/utils/format/format-date';
import { styled } from '~/stitches';

const StyledBlogCard = styled(Link, {
  $$color: '$colors$toolbar-glow',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  p: '$10',
  mx: '-$10',
  gap: '$12',
  borderRadius: '$space$10',
  color: '$text-secondary',
  transition: 'all .25s ease-in-out',
  overflow: 'hidden',
  outlineOffset: '0 !important',
  '@tablet-sm': {
    p: '$12',
    mx: '-$12',
    flexDirection: 'row',
  },
  '@tablet-md': {
    p: '$16',
    mx: '-$16',
    gap: '$16',
  },
  hocus: {
    transform: 'translateY(-1px)',
    backgroundColor: 'rgba($$color / .065)',
    textDecoration: 'none',
    color: '$text-primary',
    dark: { color: '$text-primary', backgroundColor: 'rgba($$color / .1)' },
    '& > div:first-of-type > span': {
      textDecoration: 'underline',
      color: 'rgba($$color / 1)',
      dark: { textDecoration: 'underline', color: 'rgba($$color / 1)' },
    },
  },
});

const BlogCardHero = styled(Img, {
  aspectRatio: '2 / 1',
  height: 'auto',
  borderRadius: '$space$4',
  '@tablet-sm': {
    minHeight: '100%',
    aspectRatio: '5 / 3',
    maxWidth: 160,
  },
});

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  py: '$1',
});

const Title = styled('span', {
  fontSize: '$xs',
  fontWeight: 700,
  useFont: 'manrope',
  color: '$text-primary',
  transition: 'all .15s ease-in-out',
});

const Excerpt = styled('p', {
  display: '-webkit-box',
  fontSize: '$3xs',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 1,
  maxLines: 1,
  '@mobile-lg': {
    fontSize: '$2xs',
    '-webkit-line-clamp': 2,
    maxLines: 2,
  },
});

const Published = styled(Excerpt, {
  color: '$text-tertiary',
  '& > span': {
    textDecoration: 'underline',
  },
});

const InfoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '$16',
  rowGap: '$6',
  mt: '$4',
  color: '$text-tertiary',
  fontSize: '$3xs',
  flexWrap: 'wrap',
  '@tablet-sm': {
    columnGap: '$20',
  },
});

const InfoSpan = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',
  lineHeight: 1,
});

interface BlogCardProps {
  post: Post;
}

export const getColorFromPalette = (
  palette?: Palette | null,
  isDark?: boolean,
  darkColor?: string | null,
  colorVariant: 'Vibrant' | 'Muted' = 'Vibrant',
): string | null => {
  if (!palette) return null;
  if (isDark && darkColor) return darkColor;
  const color = palette[`dark${colorVariant}`] || null;
  return (
    (isDark ? palette[colorVariant.toLowerCase() as SwatchName] : color) ||
    color
  );
};

// eslint-disable-next-line max-lines-per-function
export const BlogCard: FC<BlogCardProps> = (props) => {
  const { post } = props;
  const { link, slug, devToId } = post;
  const { isDark, themeReady } = useTheme();
  const { palette: heroPalette = {} } = usePalette(post?.hero);

  const { data: views } = useRequest<{ total?: string }>(
    `/api/views/blog--${slug}?devToId=${devToId}`,
  );

  const color = useMemo<string>(() => {
    if (!themeReady) return '';
    const color = hexToRGB(
      getReadableColor(
        post?.color || getColorFromPalette(heroPalette, isDark),
        isDark,
      ),
      undefined,
      true,
    );
    if (!color || color === 'rgba(0 0 0 / 0)') return '';
    return color;
  }, [post?.color, isDark, themeReady, heroPalette]);

  const rightLink = link && link.length > 0 ? link : `/blog/${slug}`;
  const domain = getDomainFromUrl(rightLink);

  const extraHeroProps = useMemo(() => {
    if (post?.heroMeta && post?.heroMeta.blur64) {
      return { placeholder: 'blur', blurDataURL: post?.heroMeta.blur64 } as {
        placeholder: 'blur' | 'empty';
        blurDataURL?: string;
      };
    }
    return {};
  }, [post?.heroMeta]);

  return (
    <StyledBlogCard
      title={`Blog post: ${post?.title}`}
      href={rightLink}
      underline={false}
      css={{ $$color: color || '$colors$toolbar-glow' }}
    >
      <BlogCardHero
        src={post.hero || ''}
        alt={`Cover image for blog "${post.title}"`}
        width={post?.heroMeta?.size?.width || 144}
        height={post?.heroMeta?.size?.height || 72}
        {...extraHeroProps}
        css={{ objectPosition: slug.includes('uses') ? 'top' : 'center' }}
      />
      <ContentContainer>
        <Title>{post.title}</Title>
        <Excerpt>{post.excerpt}</Excerpt>
        {domain ? (
          <Published>
            Published on <span>{domain}</span>
          </Published>
        ) : null}
        <InfoContainer>
          <InfoSpan>
            <Icon path={calendarOutline} size={0.73} />
            {formatDate(post.date, { year: undefined, month: 'short' })}
          </InfoSpan>
          {(post.readingTime?.minutes || 0) > 0 ? (
            <InfoSpan>
              <Icon path={mdiClockOutline} size={0.73} />
              {post.readingTime?.text}
            </InfoSpan>
          ) : null}
          {views?.total && +(views?.total || '0') > 2 ? (
            <InfoSpan>
              <Icon path={mdiEyeOutline} size={0.73} />
              {views?.total} views
            </InfoSpan>
          ) : null}
        </InfoContainer>
      </ContentContainer>
    </StyledBlogCard>
  );
};
