'use client';
import { usePathname } from 'next/navigation';

import { cx } from '@/tw';
import type { FC, GradientClass } from '@/types';

import { ToolbarLink } from './link.styles';
import { PagesLinksContainer } from './links-container.styles';

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

export const ToolbarNavLinks: FC<{ expanded?: boolean }> = (props) => {
  const pathname = usePathname();

  return (
    <PagesLinksContainer className={cx(props.expanded && 'expanded')}>
      {toolbarLinksList.map((link, index) => {
        return (
          <li key={index}>
            <ToolbarLink
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
            </ToolbarLink>
          </li>
        );
      })}
    </PagesLinksContainer>
  );
};
