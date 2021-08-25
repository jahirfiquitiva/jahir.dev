import styled from '@emotion/styled';
import Link from 'next/link';
import { usePalette } from 'react-palette';

import { ExtLinkCard } from '~/elements/card';
import { Component, ComponentProps } from '~/elements/fc';
import { BlogPostProps } from '~/types/blog-post';
import buildShadowColors from '~/utils/build-shadow-colors';
import formatDate from '~/utils/format-date';
import getColorFromPalette from '~/utils/get-color-from-palette';

const BaseBlogPostCard = styled(ExtLinkCard)`
  --border-radius: 8px;
  --shadow-one-size: 4px;
  --shadow-two-size: 8px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-clip: content-box;

  .content {
    border: 1px solid var(--divider);
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    background-color: var(--blog-card-color);
    -webkit-backdrop-filter: saturate(200%) blur(8px);
    backdrop-filter: saturate(200%) blur(8px);
    text-shadow: 1px 1px 1px var(--blog-card-text-shadow);

    h6 {
      font-size: 1.1rem;
      color: var(--text-primary);
    }

    p {
      font-size: 0.9rem;
      color: var(--text-secondary);

      &.date-time {
        color: var(--text-tertiary);
      }
    }
  }

  &:hover,
  &:focus {
    & .content {
      background-color: var(--blog-card-color-hover);
      & h6,
      & h6 {
        color: var(--hl-color);
        text-decoration: underline;
        -webkit-text-decoration-style: solid;
      }
    }
  }
`;

interface BlogPostCardProps extends ComponentProps, BlogPostProps {}

export const BlogPostCard: Component<BlogPostCardProps> = (props) => {
  const { frontmatter, color: defaultColor, slug } = props;
  const { isDark } = { isDark: false }; // useContext(ThemeContext); TODO: fix

  const defHero = frontmatter?.hero || '';
  const heroUrl =
    defHero.length > 0 ? (defHero.startsWith('..') ? null : defHero) : null;

  const { data: paletteData } = usePalette(heroUrl || '');
  const color =
    getColorFromPalette(paletteData, isDark) ||
    frontmatter.color ||
    defaultColor;

  const rightLink =
    frontmatter.link && frontmatter.link.length > 0
      ? frontmatter.link
      : `/blog/${slug}`;

  return (
    <Link href={rightLink} passHref={true}>
      <BaseBlogPostCard
        to={rightLink}
        newTab={false}
        className={'nodeco'}
        style={{
          ...buildShadowColors(color),
          backgroundColor: color || 'unset',
          backgroundImage: `url(${heroUrl})`,
        }}
      >
        <div className={'content'}>
          <h6>{frontmatter.title}</h6>
          {frontmatter.description && <p>{frontmatter.description}</p>}
          <p className={'date-time'}>
            {formatDate(new Date(frontmatter.date))}
            {(frontmatter.readingTime?.text?.length || 0) > 0 && (
              <>
                {' • '}
                {frontmatter.readingTime?.text}
              </>
            )}
          </p>
        </div>
      </BaseBlogPostCard>
    </Link>
  );
};
