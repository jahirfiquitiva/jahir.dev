import { useMemo } from 'react';

import { Img, Link } from '@/components/atoms';
import { useSafePalette } from '@/hooks';
import { useTheme } from '@/providers/theme';
import type { FC, Post } from '@/types';
import { formatDate, getReadableColor, hexToRGB, icons } from '@/utils';
import { styled } from '~/stitches';
import useRequest from '@/hooks/useRequest';
import Icon from '@mdi/react';
import { mdiClockOutline, mdiEyeOutline } from '@mdi/js';

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
  borderRadius: '.25rem',
  '@tablet-sm': {
    minHeight: '100%',
    aspectRatio: '5 / 3',
    maxWidth: 160,
  },
});

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.25rem',
  py: '.0625rem',
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
  columnGap: '1rem',
  rowGap: '.375rem',
  mt: '.25rem',
  color: '$text-tertiary',
  fontSize: '$3xs',
  flexWrap: 'wrap',
  '@tablet-sm': {
    columnGap: '1.25rem',
  },
});

const InfoSpan = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '.375rem',
  lineHeight: 1,
});

interface BlogCardProps {
  post: Post;
}

// eslint-disable-next-line max-lines-per-function
export const BlogCard: FC<BlogCardProps> = (props) => {
  const { post } = props;
  const { link, slug, devToId } = post;
  const { isDark, themeReady } = useTheme();
  const { data: heroPalette } = useSafePalette(post?.hero);

  const { data: views } = useRequest<{ total?: string }>(
    `/api/views/blog--${slug}?devToId=${devToId}`,
  );

  const color = useMemo<string>(() => {
    if (!themeReady) return '';
    return hexToRGB(
      getReadableColor(heroPalette.vibrant || post?.color, isDark) ||
        post?.color,
      undefined,
      true,
    );
  }, [post?.color, isDark, themeReady, heroPalette]);

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
            <Icon path={icons.calendarOutline} size={0.73} />
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
