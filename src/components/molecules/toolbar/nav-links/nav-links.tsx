'use client';
import { usePathname } from 'next/navigation';

import { cx } from '@/tw';
import type { FC, GradientClass } from '@/types';

import { PageLink } from './link.styles';
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
            <PageLink
              title={`${link.title} page`}
              href={link.href}
              aria-current={pathname.includes(link.href) ? 'page' : undefined}
              className={cx(
                'hover:[&>span]:bg-gradient-to-r',
                'hover:[&>span]:bg-clip-text',
                'hover:[&>span]:text-transparent',
                (link.className || '')
                  .split(' ')
                  .map((it) => `hover:[&>span]:${it}`)
                  .join(' ') as string,
              )}
            >
              <span>{link.title}</span>
            </PageLink>
          </LinkItem>
        );
      })}
    </PagesLinksContainer>
  );
};
