import styled from '@emotion/styled';
import Link from 'next/link';
import { usePalette } from 'react-palette';

import { Heading, LinkCard } from '~/new-components/atoms/simple';
import { useTheme } from '~/providers/theme';
import { Component, ComponentProps, Post } from '~/types';
import buildShadowColors from '~/utils/build-shadow-colors';
import buildStyles from '~/utils/build-styles';
import formatDate from '~/utils/format-date';
import getColorFromPalette from '~/utils/get-color-from-palette';
import getReadableColor from '~/utils/get-readable-color';

const BaseBlogPostCard = styled(LinkCard)`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  --border-radius: 8px;
  --shadow-one-size: 4px;
  --shadow-two-size: 8px;
  border-radius: var(--border-radius);
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-clip: padding-box;
  min-height: 208px;
  border: none;

  & * {
    transition: all 0.4s ease-in-out;
  }

  .content {
    opacity: 1;
    margin-top: auto;
    position: absolute;
    top: auto;
    left: 0;
    bottom: 0;
    right: 0;
    border: none;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    background-color: var(--blog-card-color);
    -webkit-backdrop-filter: saturate(250%) blur(12px);
    backdrop-filter: saturate(250%) blur(12px);
    text-shadow: 1px 1px 1px var(--blog-card-text-shadow);
    border-radius: var(--border-radius);
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    h4 {
      font-size: 1.1rem;
      color: var(--text-primary);
    }

    p {
      height: 0;
      opacity: 0;
      --max-lines: 2;
      display: -webkit-box;
      max-lines: var(--max-lines);
      -webkit-line-clamp: var(--max-lines);
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.9rem;
      line-height: 0;
      color: var(--text-secondary);

      &.date-time {
        margin: 0.2rem 0;
        line-height: 1.5;
        font-size: 0.9rem;
        height: auto;
        opacity: 1;
        color: var(--text-tertiary);
      }
    }
  }

  &:hover,
  &:focus {
    transform: none;
    background-clip: border-box;
    border-radius: var(--border-radius);
    & .content {
      border: none;
      border-radius: var(--border-radius);
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      & h4 {
        color: var(--hl-color);
        text-decoration: underline;
      }
      & p {
        margin: 0.2rem 0;
        line-height: 1.5;
        font-size: 0.9rem;
        height: auto;
        opacity: 1;
      }
    }
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
  } = props;
  const { isDark } = useTheme();

  const heroUrl =
    hero.length > 0 ? (hero.startsWith('..') ? null : hero) : null;

  const { data: paletteData } = usePalette(heroUrl || '');
  const color = getColorFromPalette(paletteData, isDark) || defaultColor;

  const rightLink = link && link.length > 0 ? link : `/blog/${slug}`;

  return (
    <Link href={rightLink} passHref={true}>
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
    </Link>
  );
};
