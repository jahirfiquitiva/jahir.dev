import { useMemo } from 'react';

import { Link } from '@/components/atoms';
import { useTheme } from '@/providers/theme';
import type { FC, Post } from '@/types';
import { getColorFromPalette, getReadableColor, hexToRGB } from '@/utils';
import { styled } from '~/stitches';
import { useSafePalette } from '@/hooks';

const StyledBlogCard = styled(Link, {
  $$color: '$colors$toolbar-glow',
  $$borderSize: '1px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  py: '1rem',
  px: '1.2rem',
  gap: '.6rem',
  border: '$$borderSize solid $divider',
  borderRadius: '.5rem',
  color: '$text-secondary',
  transition: 'all .25s ease-in-out',
  '& > div:first-of-type > img': {
    filter:
      'saturate(0.95) opacity(0.85) drop-shadow(0 0 1px rgba($$color / .5))',
  },
  '& > div:first-of-type > *': {
    transition: 'color .15s ease-in-out',
  },
  hocus: {
    $$borderSize: '2px',
    py: 'calc(1rem - 1px)',
    px: 'calc(1.2rem - 1px)',
    transform: 'scale(1.0125)',
    boxShadow: '0 0 8px 2px rgba($$color / .2)',
    backgroundColor: 'rgba($$color / .035)',
    borderColor: 'rgba($$color / .5)',
    textDecoration: 'none',
    color: '$text-primary',
    dark: { color: '$text-primary' },
    '& > div:first-of-type > img': {
      filter:
        'saturate(1) opacity(1) drop-shadow(0 1px 2px rgba($$color / .5))',
    },
    '& > div:first-of-type > span': {
      textDecoration: 'underline',
      color: 'rgba($$color / 1)',
      dark: { textDecoration: 'underline', color: 'rgba($$color / 1)' },
    },
    '& > div:not(:first-of-type)': {
      borderColor: 'rgba($$color / .5)',
    },
  },
});

const TitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  ml: '-.125rem',
  gap: '.6rem',
  fontSize: '$sm',
  fontWeight: 600,
  useFont: 'manrope',
  color: '$text-primary',
  transition: 'all .15s ease-in-out',
  '& > span': {
    ellipsize: true,
  },
});

const Description = styled('p', {
  fontSize: '$2xs',
});

interface BlogCardProps {
  post?: Post;
}

export const BlogCard: FC<BlogCardProps> = (props) => {
  const { post } = props;
  const { isDark, themeReady } = useTheme();
  const { data: heroPalette } = useSafePalette(post?.hero);

  const color = useMemo<string>(() => {
    if (!themeReady) return '';
    return hexToRGB(
      isDark
        ? getReadableColor(heroPalette.vibrant || post?.color, isDark) ||
            post?.color
        : getColorFromPalette(heroPalette, isDark) || post?.color,
      undefined,
      true,
    );
  }, [post?.color, isDark, themeReady, heroPalette]);

  if (!post) return null;
  return (
    <StyledBlogCard
      title={`Blog post: ${post?.title}`}
      href={`/blog/${post.slug}`}
      underline={false}
      css={{ $$color: color || '$colors$toolbar-glow' }}
    >
      <TitleContainer>
        <span>{post.title}</span>
      </TitleContainer>
      <Description>{post.excerpt}</Description>
    </StyledBlogCard>
  );
};
