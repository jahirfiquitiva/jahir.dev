/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import Link from 'next/link';
import { Children, createElement } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import styles from './blog-post.module.css';

import { Component, ComponentProps } from '~/elements/fc';

const flatten = (text: string, child: any): any => {
  return typeof child === 'string'
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text);
};

const CustomLink: Component<ComponentProps & { href: string }> = (props) => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target={'_blank'} rel={'noopener noreferrer'} {...props} />;
};

const HeadingRenderer: Component<ComponentProps & { level: string }> = (
  props,
) => {
  const arrayChildren = Children.toArray(props.children);
  const text = arrayChildren.reduce(flatten, '');
  const slug = text.toLowerCase().replace(/\W/g, '-');
  return createElement(`h${props.level}`, { id: slug }, props.children);
};

export const markdownComponents: any = {
  pre({ node, ...props }) {
    return <>{props.children}</>;
  },
  code({ node, className, inline, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
      <SyntaxHighlighter
        className={`language-${match[1]}`}
        language={match[1]}
        PreTag={'pre'}
        CodeTag={'code'}
        useInlineStyles={false}
        customStyle={{}}
        codeTagProps={{
          style: {},
        }}
        {...props}
      >
        {props.children.toString().trimEnd()}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props} />
    );
  },
  heading: ({ node, ...props }) => <HeadingRenderer {...props} />,
  h1: ({ node, ...props }) => <HeadingRenderer {...props} />,
  h2: ({ node, ...props }) => <HeadingRenderer {...props} />,
  h3: ({ node, ...props }) => <HeadingRenderer {...props} />,
  h4: ({ node, ...props }) => <HeadingRenderer {...props} />,
  h5: ({ node, ...props }) => <HeadingRenderer {...props} />,
  h6: ({ node, ...props }) => <HeadingRenderer {...props} />,
  em: ({ node, ...props }) => <em className={styles.em} {...props} />,
  a: ({ node, ...props }) => <CustomLink {...props} />,
  img: ({ node, ...props }) => (
    <img {...props} loading={'lazy'} decoding={'async'} />
  ),
};
