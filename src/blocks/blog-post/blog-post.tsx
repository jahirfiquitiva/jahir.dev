/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { usePalette } from 'react-palette';
import gfm from 'remark-gfm';

import styles from './blog-post.module.css';
import { markdownComponents } from './markdown-components';

import { Component, ComponentProps } from '~/elements/fc';
import { useTheme } from '~/providers/theme';
import { FullBlogPost } from '~/types';
import formatDate from '~/utils/format-date';
import getColorFromPalette from '~/utils/get-color-from-palette';
import hexToRGB from '~/utils/hex-to-rgb';

const getChildType = (child: any): string | null | undefined => {
  try {
    const { type } = child;
    return type?.name || type;
  } catch (e) {
    return null;
  }
};

const components: any = {
  ...markdownComponents,
  // @ts-ignore
  // eslint-disable-next-line react/display-name
  p({ node, className, ...props }) {
    const classNames = [
      getChildType(props.children?.[0]) === 'em'
        ? styles.possiblecodetitle
        : '',
      getChildType(props.children?.[2]) === 'img'
        ? styles.possibleimagetitle
        : '',
    ];

    return <p className={classNames.join(' ')} {...props} />;
  },
};

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
        components={components}
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
        {hero && (
          <img
            className={styles.hero}
            src={hero || ''}
            alt={title}
            loading={'lazy'}
            decoding={'async'}
          />
        )}
        {renderTableOfContents()}
        {renderContent()}
      </article>
    </div>
  );
};
