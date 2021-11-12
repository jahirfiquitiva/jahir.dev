/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
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
  }
`;

interface BlogPostProps extends ComponentProps, Post {}

export const BlogPost: Component<BlogPostProps> = (props) => {
  const { title, hero, date, readingTime, children } = props;
  const { isDark } = useTheme();
  const { data: heroPalette } = usePalette(hero || '');

  const color = hexToRGB(
    getColorFromPalette(heroPalette, isDark) || '#fff',
    0.4,
  );

  return (
    <div className={styles.post}>
      <div className={'back'}>
        <Link
          title={'Link to go back to blog posts list'}
          href={'/blog'}
          underline
        >
          ← Back to posts list
        </Link>
      </div>
      <article>
        <h1
          style={{
            textShadow: `var(--text-shadow-size) var(--text-shadow-size) 0 ${color}`,
          }}
        >
          {title}
        </h1>
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
