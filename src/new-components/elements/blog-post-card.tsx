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
  w-full
  overflow-hidden
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
        backgroundImage: `url(${heroUrl})`,
      }}
    >
      <div className={'content'}>
        <Heading
          size={'4'}
          fontSize={'6'}
          style={buildStyles({
            '--hl-color': getReadableColor(color, isDark),
          })}
        >
          {title}
        </Heading>
        {excerpt && <p>{excerpt}</p>}
        <p className={'date-time'}>
          {formatDate(date)}
          {(readingTime?.minutes || 0) > 0 && (
            <>
              {' • '}
              {readingTime?.text}
            </>
          )}
        </p>
      </div>
    </BaseBlogPostCard>
  );
};
