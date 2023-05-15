import type { Route } from 'next';
import NextLink from 'next/link';
import type { ComponentProps } from 'react';

import { StyledLink } from './link.styles';

const isLocalLink = (href?: string) =>
  href && (href.startsWith('/') || href.startsWith('#'));

type NextLinkProps = ComponentProps<typeof NextLink>;

interface LinkProps extends Omit<NextLinkProps, 'href'> {
  title: string;
  href: string | NextLinkProps['href'];
  openInNewTab?: boolean;
}

export const Link = (props: LinkProps) => {
  const { href, ...otherProps } = props;
  const {
    openInNewTab = !isLocalLink(
      typeof href !== 'string' ? href.toString() : href,
    ),
    ...rest
  } = otherProps;

  return (
    <StyledLink
      {...{ href: href as Route, ...rest }}
      aria-label={rest.title}
      {...(openInNewTab
        ? {
            target: '_blank',
            rel: `${props.rel || ''} noopener noreferrer`.trim(),
          }
        : {})}
    />
  );
};
