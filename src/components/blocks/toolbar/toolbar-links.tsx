import styled from '@emotion/styled';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ToolbarLink } from './toolbar-link';

import { GradientOptions, mediaQueries } from '~/types';

const ToolbarLinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  grid-column-start: 1;
  grid-column-end: 3;

  ${mediaQueries.mobile.lg} {
    justify-content: flex-start;
    gap: 0.4rem;
  }

  ${mediaQueries.tablet.lg} {
    justify-content: flex-end;
    grid-column-start: 2;
    gap: 0.5rem;
  }

  & > li {
    display: inline-block;
    margin: 0;
    padding: 0;
  }
`;

const toolbarLinksList = [
  {
    key: 1,
    title: 'About',
    href: '/about',
    gradient: 'blue-to-green',
  },
  {
    key: 2,
    title: 'Blog',
    href: '/blog',
    gradient: 'yellow-to-orange',
  },
  {
    key: 3,
    title: 'Projects',
    href: '/projects',
    gradient: 'red-to-purple',
  },
  {
    key: 4,
    title: 'Contact',
    href: '/contact',
    gradient: 'brand-to-blue',
  },
];

export const ToolbarLinks = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(-1);

  useEffect(() => {
    if (!router || !router.isReady) return;
    const { asPath: pathname } = router;
    if (pathname.includes('/about')) setActiveLink(1);
    else if (pathname.includes('/blog')) setActiveLink(2);
    else if (pathname.includes('/projects')) setActiveLink(3);
    else if (pathname.includes('/contact')) setActiveLink(4);
    else setActiveLink(-1);
  }, [router]);

  return (
    <ToolbarLinksContainer>
      {toolbarLinksList.map((link, index) => {
        return (
          <li key={index}>
            <ToolbarLink
              title={`${link.title} page`}
              href={link.href}
              gradientColor={link.gradient as GradientOptions}
              className={cn({ active: activeLink === link.key })}
            >
              {link.title}
            </ToolbarLink>
          </li>
        );
      })}
    </ToolbarLinksContainer>
  );
};
