import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { GradientOption } from '@/stitches/utils/gradient';
import { FC } from '@/types';

import { ToolbarLink, ToolbarLinksContainer } from './ToolbarLink';

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
    title: 'Contact',
    href: '/contact',
    gradient: 'brand-to-blue',
  },
];

export const ToolbarNavLinks: FC<{ expanded?: boolean }> = (props) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(-1);

  useEffect(() => {
    if (!router || !router.isReady) return;
    const { asPath: pathname } = router;
    if (pathname.includes('/about')) setActiveLink(0);
    else if (pathname.includes('/blog')) setActiveLink(1);
    else if (pathname.includes('/projects')) setActiveLink(2);
    else if (pathname.includes('/contact')) setActiveLink(3);
    else setActiveLink(-1);
  }, [router]);

  return (
    <ToolbarLinksContainer links expanded={props.expanded}>
      {toolbarLinksList.map((link, index) => {
        return (
          <li key={index}>
            <ToolbarLink
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
