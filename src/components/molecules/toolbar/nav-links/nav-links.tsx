import cx from 'classix';
import type { Route } from 'next';

import type { GradientClass } from '@/types/gradient';

import { PageLinkSpan, ToolbarLink } from './link.styles';
import { LinkItem, PagesLinksContainer } from './links-container.styles';

interface ToolbarLinkItem {
  title: string;
  href: string;
  className?: GradientClass;
  mobileOnly?: boolean;
}

const toolbarLinksList: Array<ToolbarLinkItem> = [
  {
    title: 'About',
    href: '/about',
    className: 'from-gradient-blue to-gradient-green',
  },
  {
    title: 'Blog',
    href: '/blog',
    className: 'from-gradient-yellow to-gradient-orange',
  },
  {
    title: 'Projects',
    href: '/projects',
    className: 'from-gradient-red to-gradient-purple',
  },
  {
    title: 'Donate',
    href: '/donate',
    className: 'from-gradient-brand to-gradient-blue',
  },
  {
    title: 'Uses',
    href: '/uses',
    className: 'from-gradient-purple to-gradient-brand',
    mobileOnly: true,
  },
  {
    title: 'Now',
    href: '/now',
    className: 'from-gradient-blue to-gradient-green',
    mobileOnly: true,
  },
];

export const ToolbarNavLinks = (props: { pathname?: string }) => {
  const { pathname } = props;
  return (
    <PagesLinksContainer>
      {toolbarLinksList.map((link, index) => {
        return (
          <LinkItem key={`page-link-${index}`}>
            <ToolbarLink
              title={`${link.title} page`}
              href={link.href as Route}
              aria-current={
                pathname?.startsWith(link.href) ? 'page' : undefined
              }
              className={'group/link'}
              data-umami-event={`${link.title}-from-toolbar`}
            >
              <PageLinkSpan
                className={cx(
                  (link.className || '')
                    .split(' ')
                    .map(
                      (it) =>
                        `group-hocus/link:${it} [[aria-current="page"]_&]:${it}`,
                    )
                    .join(' ') as string,
                )}
              >
                {link.title}
              </PageLinkSpan>
            </ToolbarLink>
          </LinkItem>
        );
      })}
    </PagesLinksContainer>
  );
};
