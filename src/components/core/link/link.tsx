import { type ComponentProps } from 'react';

import type { FC } from '@/types';

import { StyledLink } from './link.styles';

const isLocalLink = (href?: string) =>
  href && (href.startsWith('/') || href.startsWith('#'));

interface LinkProps extends ComponentProps<typeof StyledLink> {
  underline?: boolean;
  openInNewTab?: boolean;
  disabled?: boolean;
  tabIndex?: number;
}

export const Link: FC<LinkProps> = (props) => {
  const { href: url, ...otherProps } = props;
  const href: string = url.toString();
  const {
    openInNewTab = !isLocalLink(href),
    underline = true,
    ...rest
  } = otherProps;

  if (openInNewTab) {
    return (
      <StyledLink
        {...rest}
        href={href}
        target={'_blank'}
        rel={`${props.rel || ''} noopener noreferrer`.trim()}
        aria-label={rest.title}
        underline={underline}
      />
    );
  }

  return (
    <StyledLink
      {...{ href, ...rest }}
      aria-label={rest.title}
      underline={underline}
    />
  );
};
