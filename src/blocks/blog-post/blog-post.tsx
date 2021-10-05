/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { usePalette } from 'react-palette';
import gfm from 'remark-gfm';

import styles from './blog-post.module.css';
import { markdownComponents } from './markdown-components';

import { Component, ComponentProps } from '~/elements/base/fc';
import { OptImage } from '~/elements/base/opt-image';
import { useTheme } from '~/providers/theme';
import { FullBlogPost } from '~/types';
import formatDate from '~/utils/format-date';
import getColorFromPalette from '~/utils/get-color-from-palette';
import hexToRGB from '~/utils/hex-to-rgb';

const HeroImage = styled(OptImage)`
  & img {
    margin-bottom: 2.4rem !important;
    object-fit: cover;
    max-height: 440px !important;
    width: 100%;
    height: auto;
    border-radius: 6px;
  }
`;

interface BlogPostProps extends ComponentProps, FullBlogPost {}

const REACT_MD_ENABLED = true;

export const BlogPost: Component<BlogPostProps> = (props) => {
  const {
    title,
    hero,
    date,
    readingTime,
    tableOfContents,
    body: content,
  } = props;
  const { isDark } = useTheme();
  const { data: heroPalette } = usePalette(hero || '');

  const color = hexToRGB(
    getColorFromPalette(heroPalette, isDark) || '#fff',
    0.4,
  );

  const renderTableOfContents = () => {
    if (!REACT_MD_ENABLED) return <></>;
    if (!tableOfContents || tableOfContents.length <= 0) return <></>;
    return (
      <div className={styles.toc}>
        <p className={styles.title}>Table of Contents:</p>
        <ReactMarkdown
          className={styles.content}
          children={tableOfContents ?? ''}
        />
      </div>
    );
  };

  const renderContent = () => {
    if (!REACT_MD_ENABLED) return <></>;
    if (!content || content.length <= 0) return <></>;
    return (
      <ReactMarkdown
        remarkPlugins={[gfm]}
        className={styles.content}
        components={markdownComponents}
        children={content}
      />
    );
  };

  return (
    <div className={styles.post}>
      <div className={'back'}>
        <Link href={'/blog'}>
          <a>← Back to post list</a>
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
        {hero && <HeroImage src={hero || ''} alt={title} />}
        {renderTableOfContents()}
        {renderContent()}
      </article>
    </div>
  );
};
