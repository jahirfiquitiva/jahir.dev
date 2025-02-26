import NextLink from 'next/link';
import type { ComponentProps } from 'react';

import cx from '@/utils/cx';

const isLocalLink = (href?: string) =>
  href && (href.startsWith('/') || href.startsWith('#'));

interface LinkProps extends Omit<ComponentProps<typeof NextLink>, 'href'> {
  title: string;
  openInNewTab?: boolean;
  ignoreNextLink?: boolean;
  href?: ComponentProps<typeof NextLink>['href'];
}

export const Link = (props: LinkProps) => {
  const { href, ...otherProps } = props;
  const {
    openInNewTab = !isLocalLink(
      typeof href !== 'string' ? href?.toString() : href,
    ),
    ignoreNextLink,
    ...rest
  } = otherProps;

  // Next.js Link does not scroll to elements with id
  const LinkComponent =
    href?.toString().includes('#') || ignoreNextLink ? 'a' : NextLink;

  const className = cx(
    'inline-block font-medium text-accent self-start transition-colors hocus:text-accent-dark',
    props.className,
  );

  return (
    <LinkComponent
      {...{ href, ...rest }}
      href={href?.toString() || '#'}
      className={className}
      prefetch={
        LinkComponent === 'a'
          ? undefined
          : openInNewTab || rest.target === '_blank'
            ? false
            : rest.prefetch
      }
      {...(openInNewTab
        ? {
            target: '_blank',
            rel: `${props.rel || ''} noopener noreferrer`.trim(),
          }
        : {})}
    />
  );
};
