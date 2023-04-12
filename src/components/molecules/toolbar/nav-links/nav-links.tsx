'use client';

import { cx } from 'classix';
import { usePathname } from 'next/navigation';

import type { FC, GradientClass } from '@/types';

import { ToolbarLink, PageLinkSpan } from './link.styles';
import { PagesLinksContainer, LinkItem } from './links-container.styles';

interface ToolbarLinkItem {
  title: string;
  href: string;
  className?: GradientClass;
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
];

export const ToolbarNavLinks: FC = () => {
  const pathname = usePathname();

  return (
    <PagesLinksContainer>
      {toolbarLinksList.map((link, index) => {
        return (
          <LinkItem key={`page-link-${index}`}>
            <ToolbarLink
              title={`${link.title} page`}
              href={link.href}
              aria-current={pathname.includes(link.href) ? 'page' : undefined}
              className={'group/link'}
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
