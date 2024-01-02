import NextLink from 'next/link';
import type { ComponentProps } from 'react';

import { StyledLink } from './link.styles';

const isLocalLink = (href?: string) =>
  href && (href.startsWith('/') || href.startsWith('#'));

interface LinkProps extends ComponentProps<typeof NextLink> {
  title: string;
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
      {...{ href, ...rest }}
      aria-label={rest['aria-label'] || rest.title}
      {...(openInNewTab
        ? {
            target: '_blank',
            rel: `${props.rel || ''} noopener noreferrer`.trim(),
          }
        : {})}
    />
  );
};
