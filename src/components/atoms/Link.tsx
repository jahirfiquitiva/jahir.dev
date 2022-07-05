import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import type { FC } from '@/types';

const prefetchBlockList = ['/music', '/static'];

const isLocalLink = (href?: string) =>
  href && (href.startsWith('/') || href.startsWith('#'));

interface LinkProps {
  title: string;
  href: string;
  underline?: boolean;
  openInNewTab?: boolean;
}

export const Link: FC<LinkProps> = (props) => {
  const { href, openInNewTab = !isLocalLink(href), ...rest } = props;
  const router = useRouter();

  const shouldPrefetch = useMemo<boolean>(() => {
    if (!router || !router.isReady || openInNewTab) return false;
    if (prefetchBlockList.some((link) => href.startsWith(link))) {
      return false;
    }
    const { asPath: pathname } = router;
    if (href === pathname || href.startsWith('#')) return false;
    const hrefWithoutCurrentPath = href.replace(pathname, '');
    const lastHrefPart = hrefWithoutCurrentPath.substring(
      hrefWithoutCurrentPath.lastIndexOf('/') + 1,
    );
    if (href.startsWith(pathname) && lastHrefPart.startsWith('#')) return false;
    return true;
  }, [router, href, openInNewTab]);

  if (openInNewTab) {
    return (
      <NextLink
        href={href}
        target={'_blank'}
        rel={'noopener noreferrer'}
        {...rest}
      />
    );
  }

  return <NextLink {...{ href, prefetch: shouldPrefetch, ...rest }} />;
};
