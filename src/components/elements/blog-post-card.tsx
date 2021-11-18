import { useMemo } from 'react';
import { usePalette } from 'react-palette';
import tw from 'twin.macro';

import { LinkCard, Image, Heading } from '~/components/atoms/simple';
import { useTheme } from '~/providers/theme';
import { Component, ComponentProps, Post } from '~/types';
import getColorFromPalette from '~/utils/colors/get-color-from-palette';
import getReadableColor from '~/utils/colors/get-readable-color';
import formatDate from '~/utils/format/format-date';
import buildShadowStyles from '~/utils/styles/build-shadow-styles';
import buildStyles from '~/utils/styles/build-styles';

const BaseBlogPostCard = tw(LinkCard)`
  relative
  w-full
  overflow-hidden
  rounded-md
  text-text-secondary
  min-height[192px]
  all:(transition-all duration-400 motion-reduce:(transition-none))

  md:(min-height[232px])
  
  [p]:(text-tiny md:(text-almost-tiny))
  [p.date]:(text-text-tertiary)
  hocus:(
    [h4]:(underline color[var(--hl-color)])
    [p]:(
      my-4
      h-auto
      opacity-100
      text-text-primary
      leading-relaxed
      visible
    )
    [p.date]:(my-2 text-text-secondary)
  )
`;

const BlogPostImage = tw(Image)`
  relative
  w-full
  rounded-md
  pointer-events-none
  select-none

  height[192px]
  md:(height[232px])

  [span]:(first-of-type:(
    rounded-md
    h-full!
    w-full
    [img]:(
      rounded-md
      h-full!
      w-full
      object-cover
    )
  ))
`;

const Scrim = tw.div`
  absolute
  top-0
  left-0
  bottom-0
  right-0
  rounded-md
  background-color[rgb(var(--background-values))]
  opacity-0
  dark:(opacity-15)
  pointer-events-none
  select-none
`;

const Content = tw.div`
  flex
  flex-col
  absolute
  top-auto
  left-0
  bottom-0
  right-0
  p-10
  border-none
  rounded-t-none
  rounded-b-md
  shadow-blogCardDetails
  background-color[var(--blog-card-color)]
  z-index[1]
  backdrop-filter
  backdrop-blur-md
  backdrop-saturate-200
`;

const Excerpt = tw.p`
  display[-webkit-box]
  h-0
  opacity-0
  leading-none
  invisible
  pointer-events-none
  select-none
  text-text-secondary
  text-tiny
  overflow-hidden
  text-overflow[ellipsis]
  max-lines[1]
  -webkit-line-clamp[1]
  -webkit-box-orient[vertical]

  md:(
    text-almost-tiny
    max-lines[2]
    -webkit-line-clamp[2]
  )
`;

const Date = tw.p`my-2 truncate`;

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

  const heroUrl =
    hero.length > 0 ? (hero.startsWith('..') ? null : hero) : null;
  const { data: paletteData } = usePalette(heroUrl || '');

  const rightLink = link && link.length > 0 ? link : `/blog/${slug}`;

  const postColor = useMemo<string | undefined>(() => {
    if (!themeReady) return defaultColor;
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
      <BlogPostImage src={heroUrl || ''} />
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
