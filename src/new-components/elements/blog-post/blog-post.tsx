import styled from '@emotion/styled';
import { CSSProperties, useMemo } from 'react';
import { usePalette } from 'react-palette';

import styles from './blog-post.module.css';

import { Image, Link } from '~/new-components/atoms/simple';
import { useTheme } from '~/providers/theme';
import { Component, ComponentProps, Post } from '~/types';
import formatDate from '~/utils/format-date';
import getColorFromPalette from '~/utils/get-color-from-palette';
import hexToRGB from '~/utils/hex-to-rgb';

const HeroImage = styled(Image)`
  & img {
    margin-bottom: 2.4rem !important;
    object-fit: cover;
    max-height: 440px !important;
    width: 100%;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 4px 6px -1px var(--shadow-color-full),
      0 2px 4px -1px rgba(var(--shadow-color), 0.06);
  }
`;

interface BlogPostProps extends ComponentProps, Post {}

export const BlogPost: Component<BlogPostProps> = (props) => {
  const { title, hero, date, readingTime, children } = props;
  const { isDark, themeReady } = useTheme();
  const { data: heroPalette } = usePalette(hero || '');

  const titleStyles = useMemo<CSSProperties>(() => {
    if (!themeReady) return {};
    const color = hexToRGB(
      getColorFromPalette(heroPalette, isDark) || '#fff',
      0.4,
    );
    return {
      textShadow: `var(--text-shadow-size) var(--text-shadow-size) 0 ${color}`,
    };
  }, [themeReady, isDark, heroPalette]);

  return (
    <div className={styles.post}>
      <div className={'back'}>
        <Link title={'Link to go back to blog posts list'} href={'/blog'}>
          ← Back to posts list
        </Link>
      </div>
      <article>
        <h1 style={titleStyles}>{title}</h1>
        <p className={styles.date}>
          {formatDate(date)}
          {(readingTime?.text?.length || 0) > 0 && (
            <>
              {' • '}
              {readingTime?.text}
            </>
          )}
        </p>
        {hero && <HeroImage src={hero || ''} alt={title} priority />}
        {children}
      </article>
    </div>
  );
};
