import { useMemo } from 'react';

import { Img, Link } from '@/components/atoms';
import { useSafePalette } from '@/hooks';
import { useTheme } from '@/providers/theme';
import type { FC, Post } from '@/types';
import { getReadableColor, hexToRGB } from '@/utils';
import { styled } from '~/stitches';

const StyledBlogCard = styled(Link, {
  $$color: '$colors$toolbar-glow',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  p: '.625rem',
  mx: '-.625rem',
  gap: '.75rem',
  borderRadius: '.5rem',
  color: '$text-secondary',
  transition: 'all .25s ease-in-out',
  overflow: 'hidden',
  outlineOffset: '0 !important',
  '@tablet-sm': {
    p: '.75rem',
    mx: '-.75rem',
    flexDirection: 'row',
  },
  '@tablet-md': {
    p: '1rem',
    mx: '-1rem',
    gap: '1rem',
  },
  '& > div:first-of-type > *': {
    transition: 'color .15s ease-in-out',
  },
  hocus: {
    transform: 'translateY(-1px)',
    backgroundColor: 'rgba($$color / .065)',
    borderColor: 'rgba($$color / .5)',
    textDecoration: 'none',
    color: '$text-primary',
    dark: { color: '$text-primary', backgroundColor: 'rgba($$color / .1)' },
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

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.375rem',
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

const BlogCardHero = styled(Img, {
  aspectRatio: '2 / 1',
  height: 'auto',
  borderRadius: '.25rem',
  '@tablet-sm': {
    aspectRatio: '4 / 3',
    maxWidth: 144,
  },
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
      getReadableColor(heroPalette.vibrant || post?.color, isDark) ||
        post?.color,
      undefined,
      true,
    );
  }, [post?.color, isDark, themeReady, heroPalette]);

  const extraHeroProps = useMemo(() => {
    if (post?.heroMeta && post?.heroMeta.blur64) {
      return { placeholder: 'blur', blurDataURL: post?.heroMeta.blur64 } as {
        placeholder: 'blur' | 'empty';
        blurDataURL?: string;
      };
    }
    return {};
  }, [post?.heroMeta]);

  if (!post) return null;
  return (
    <StyledBlogCard
      title={`Blog post: ${post?.title}`}
      href={post.link ? post.link : `/blog/${post.slug}`}
      underline={false}
      css={{ $$color: color || '$colors$toolbar-glow' }}
    >
      <BlogCardHero
        src={post.hero || ''}
        alt={`Cover image for blog "${post.title}"`}
        width={post?.heroMeta?.size?.width || 144}
        height={post?.heroMeta?.size?.height || 72}
        {...extraHeroProps}
        css={{ objectPosition: post.slug.includes('uses') ? 'top' : 'center' }}
      />
      <ContentContainer>
        <Title>{post.title}</Title>
        <Excerpt>{post.excerpt}</Excerpt>
      </ContentContainer>
    </StyledBlogCard>
  );
};
