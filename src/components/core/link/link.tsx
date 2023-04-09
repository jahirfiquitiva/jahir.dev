import { cx } from 'classix';
import NextLink from 'next/link';

import type { ComponentProps } from '@/tw';

import { linkClasses } from './link.styles';

const isLocalLink = (href?: string) =>
  href && (href.startsWith('/') || href.startsWith('#'));

interface LinkProps extends ComponentProps<typeof NextLink> {
  openInNewTab?: boolean;
}

export const Link = (props: LinkProps) => {
  const { href: url, ...otherProps } = props;
  const href: string = url.toString();
  const { openInNewTab = !isLocalLink(href), ...rest } = otherProps;

  return (
    <NextLink
      {...{ href, ...rest }}
      className={cx(linkClasses, rest.className)}
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
