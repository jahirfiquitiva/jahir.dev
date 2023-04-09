import { cx } from 'classix';
import NextLink from 'next/link';

import { tw, type ComponentProps } from '@/tw';

const isLocalLink = (href?: string) =>
  href && (href.startsWith('/') || href.startsWith('#'));

const linkStyles = tw`
  inline-block
  font-medium
  text-accent
  hover:text-accent-dark
  hover:underline
  hover:underline-offset-2
  hover:decoration-2
` as string;

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
      className={cx(rest.className, linkStyles)}
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
