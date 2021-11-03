import Link from 'next/link';

import { Component, ComponentProps } from '~/elements/base/fc';

export interface ExtLinkProps extends ComponentProps {
  to: string;
  title?: string;
  newTab?: boolean;
  underline?: boolean;
}

export const ExtLink: Component<ExtLinkProps> = (props) => {
  const {
    to,
    title,
    newTab = true,
    className,
    children,
    style,
    underline = true,
  } = props;

  if (!newTab) {
    return (
      <Link href={to}>
        <a
          className={[className || '', underline ? '' : 'nodeco']
            .join(' ')
            .trim()}
          title={title}
          aria-label={title}
          target={newTab ? '_blank' : '_self'}
          rel={'noopener noreferrer'}
          style={style}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      className={[className || '', underline ? '' : 'nodeco'].join(' ').trim()}
      title={title}
      aria-label={title}
      href={to}
      target={newTab ? '_blank' : '_self'}
      rel={'noopener noreferrer'}
      style={style}
    >
      {children}
    </a>
  );
};
