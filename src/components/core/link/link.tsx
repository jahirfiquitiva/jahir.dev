import NextLink from 'next/link';

import { tw } from '@/tw';
import { ComponentProps } from 'react';
import { cx } from 'classix';

const isLocalLink = (href?: string) =>
  href && (href.startsWith('/') || href.startsWith('#'));

const linkStyles = tw`
  inline-block
  font-medium
  text-accent
` as string;

interface LinkProps extends ComponentProps<typeof NextLink> {
  openInNewTab?: boolean;
}

export const Link = (props: LinkProps) => {
  const { href: url, ...otherProps } = props;
  const href: string = url.toString();
  const { openInNewTab = !isLocalLink(href), ...rest } = otherProps;

  if (openInNewTab) {
    return (
      <NextLink
        {...rest}
        className={cx(rest.className, linkStyles)}
        href={href}
        target={'_blank'}
        rel={`${props.rel || ''} noopener noreferrer`.trim()}
        aria-label={rest.title}
      />
    );
  }

  return (
    <NextLink
      {...{ href, ...rest }}
      className={cx(rest.className, linkStyles)}
      aria-label={rest.title}
    />
  );
};
