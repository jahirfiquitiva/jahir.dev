import { useState, useMemo } from 'react';
import { usePalette } from 'react-palette';
import tw, { css } from 'twin.macro';

import { LinkCard, Image, Heading } from '~/new-components/atoms/simple';
import { Stack } from '~/new-components/elements';
import { useTheme } from '~/providers/theme';
import { Component, ComponentProps, ProjectProps, Post } from '~/types';
import buildShadowColors from '~/utils/build-shadow-colors';
import buildStyles from '~/utils/build-styles';
import formatDate from '~/utils/format-date';
import getColorFromPalette from '~/utils/get-color-from-palette';
import getReadableColor from '~/utils/get-readable-color';

const BaseBlogPostCard = tw(LinkCard)`
  relative
  w-full
  overflow-hidden
  rounded-md
  text-text-secondary
  min-height[192px]
  all:(transition-all duration-300 motion-reduce:(transition-none))

  md:(min-height[232px])
  
  [p]:(text-tiny delay-50 md:(text-almost-tiny))
  [p.date]:(text-text-tertiary)
  hocus:(
    [h4]:(underline color[var(--hl-color)])
    [p]:(
      my-4
      h-auto
      text-text-primary
      leading-relaxed
      opacity-100
      visible
      delay-50
    )
    [p.date]:(my-2 text-text-secondary)
  )
`;

const BlogPostImage = tw(Image)`
  absolute
  top-0
  left-0
  bottom-0
  right-0
  rounded-md
  pointer-events-none
  select-none

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
  absolute
  top-auto
  left-0
  bottom-0
  right-0
  p-10
  shadow-blogCardDetails
  background-color[var(--blog-card-color)]
  backdrop-filter
  backdrop-blur-md
  backdrop-saturate-200
`;

const Excerpt = tw.p`
  display[-webkit-box]
  h-0
  leading-none
  opacity-0
  invisible
  pointer-events-none
  select-none
  text-text-secondary
  overflow-hidden
  text-overflow[ellipsis]
  max-lines[1]
  -webkit-line-clamp[1]
  -webkit-box-orient[vertical]

  md:(
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
  const { isDark } = useTheme();

  const heroUrl =
    hero.length > 0 ? (hero.startsWith('..') ? null : hero) : null;

  const { data: paletteData } = usePalette(heroUrl || '');
  const color = getColorFromPalette(paletteData, isDark) || defaultColor;

  const rightLink = link && link.length > 0 ? link : `/blog/${slug}`;

  return (
    <BaseBlogPostCard
      title={`Link to blog post: ${title}`}
      href={rightLink}
      underline={false}
      style={{
        ...buildShadowColors(color),
        backgroundColor: color || 'unset',
      }}
    >
      <BlogPostImage src={heroUrl || ''} />
      <Scrim />
      <Content>
        <Heading
          size={'4'}
          fontSize={'xs'}
          style={buildStyles({
            '--hl-color': getReadableColor(color, isDark),
          })}
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
