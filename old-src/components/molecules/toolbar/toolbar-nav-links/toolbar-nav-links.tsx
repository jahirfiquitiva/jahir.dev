import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import type { GradientOption } from '@/old/stitches/utils/gradient';
import type { FC } from '@/old/types';

import { ToolbarLink, ToolbarLinksContainer } from './toolbar-nav-links.styles';

interface ToolbarLinkItem {
  title: string;
  href: string;
  gradient: GradientOption;
}

const toolbarLinksList: Array<ToolbarLinkItem> = [
  {
    title: 'About',
    href: '/about',
    gradient: 'blue-to-green',
  },
  {
    title: 'Blog',
    href: '/blog',
    gradient: 'yellow-to-orange',
  },
  {
    title: 'Projects',
    href: '/projects',
    gradient: 'red-to-purple',
  },
  {
    title: 'Donate',
    href: '/donate',
    gradient: 'brand-to-blue',
  },
];

export const ToolbarNavLinks: FC<{ expanded?: boolean }> = (props) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(-1);

  useEffect(() => {
    if (!router || !router.isReady) return;
    const { asPath: pathname } = router;
    setActiveLink(
      toolbarLinksList.findIndex((link) => pathname.includes(link.href)),
    );
  }, [router]);

  return (
    <ToolbarLinksContainer links expanded={props.expanded}>
      {toolbarLinksList.map((link, index) => {
        return (
          <li key={index}>
            <ToolbarLink
              underline={false}
              gradient={link.gradient}
              title={`${link.title} page`}
              href={link.href}
              aria-current={activeLink == index ? 'page' : undefined}
            >
              <span>{link.title}</span>
            </ToolbarLink>
          </li>
        );
      })}
    </ToolbarLinksContainer>
  );
};
