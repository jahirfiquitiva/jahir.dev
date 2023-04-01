import Icon from '@mdi/react';
import { useMemo } from 'react';

import { Img, Link } from '@/components/atoms';
import { usePalette, type Palette, type SwatchName } from '@/hooks/usePalette';
import { calendarOutline } from '@/icons';
import { useTheme } from '@/providers/theme';
import type { FC, Post } from '@/types';
import { getReadableColor } from '@/utils/color/get-readable-color';
import { hexToRGB } from '@/utils/color/hex-to-rgb';
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

const getShortDomainForBlog = (rightLink?: string) => {
  if (!rightLink) return '';
  try {
    const url = new URL(rightLink);
    const cleanUrl = url.hostname.replace('www.', '');
    if (cleanUrl.startsWith('jahirfiquitiva.substack.com')) return '';
    return cleanUrl;
  } catch (e) {
    return '';
  }
};

// eslint-disable-next-line max-lines-per-function
export const BlogCard: FC<BlogCardProps> = (props) => {
  const { post } = props;
  const { link } = post;
  const { isDark, themeReady } = useTheme();
  const { palette: heroPalette = {} } = usePalette(post?.hero);

  const color = useMemo<string>(() => {
    if (!themeReady) return '';
    const color = hexToRGB(
      getReadableColor(getColorFromPalette(heroPalette, isDark), isDark),
      undefined,
      true,
    );
    if (!color || color === 'rgba(0 0 0 / 0)') return '';
    return color;
  }, [isDark, themeReady, heroPalette]);

  const domain = getShortDomainForBlog(link);

  return (
    <StyledBlogCard
      title={`Blog post: ${post?.title}`}
      href={link}
      underline={false}
      css={{ $$color: color || '$colors$toolbar-glow' }}
    >
      <BlogCardHero
        src={post.hero || ''}
        alt={`Cover image for blog "${post.title}"`}
        width={144}
        height={72}
        css={{ objectPosition: 'center' }}
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
        </InfoContainer>
      </ContentContainer>
    </StyledBlogCard>
  );
};
