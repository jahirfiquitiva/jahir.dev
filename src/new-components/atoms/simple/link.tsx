import NextLink from 'next/link';
import tw from 'twin.macro';

import { Component, ComponentProps } from '~/types';

interface BaseLinkProps {
  underline?: boolean;
  underlineOnHocus?: boolean;
}

const baseLinkStyles = tw`
  font-medium
  inline-block
  text-accent  
  hocus:(text-accent-dark dark:text-accent-light)
`;

export const isLocalLink = (href?: string) =>
  href && (href.startsWith('/') || href.startsWith('#'));

export interface LinkProps extends ComponentProps, BaseLinkProps {
  title: string;
  href: string;
  newTab?: boolean;
}

export const Link: Component<LinkProps> = (props) => {
  const {
    title,
    href,
    newTab = !isLocalLink(href),
    underline,
    children,
    className,
    style,
  } = props;

  if (newTab) {
    return (
      <a
        href={href}
        title={title}
        aria-label={title}
        target={'_blank'}
        rel={'noopener noreferrer'}
        className={className}
        style={style}
        css={[
          baseLinkStyles,
          underline ? tw`hocus:(underline)` : tw`hocus:(no-underline)`,
        ]}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a
        title={title}
        aria-label={title}
        className={className}
        style={style}
        css={[
          baseLinkStyles,
          underline ? tw`hocus:(underline)` : tw`hocus:(no-underline)`,
        ]}
      >
        {children}
      </a>
    </NextLink>
  );
};
