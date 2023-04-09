import NextLink from 'next/link';

import type { ComponentProps } from '@/tw';

import { StyledLink } from './link.styles';

const isLocalLink = (href?: string) =>
  href && (href.startsWith('/') || href.startsWith('#'));

interface LinkProps extends ComponentProps<typeof NextLink> {
  title: string;
  openInNewTab?: boolean;
}

export const Link = (props: LinkProps) => {
  const { href: url, ...otherProps } = props;
  const href: string = url.toString();
  const { openInNewTab = !isLocalLink(href), ...rest } = otherProps;

  return (
    <StyledLink
      {...{ href, ...rest }}
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
