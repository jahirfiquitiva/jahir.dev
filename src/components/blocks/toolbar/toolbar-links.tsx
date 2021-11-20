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

const ToolbarLinksContainer = tw.ul`
  flex
  items-center
  justify-between
  list-none
  col-start-1
  col-end-3
  sm:(justify-start gap-4)
  lg:(justify-end col-start-2 gap-5)
  [li]:(inline-block m-0 p-0)
`;

const toolbarLinksList = [
  {
    key: 1,
    emoji: '📝',
    title: 'Blog',
    href: '/blog',
    gradient: 'blue-to-green',
  },
  {
    key: 2,
    emoji: '⚡️',
    title: 'Uses',
    href: '/blog/uses',
    gradient: 'yellow-to-orange',
  },
  {
    key: 3,
    emoji: '🧡',
    title: 'Donate',
    href: '/donate',
    gradient: 'red-to-purple',
  },
  {
    key: 4,
    emoji: '📬',
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
    if (pathname.includes('/uses')) setActiveLink(2);
    else if (pathname.includes('/blog')) setActiveLink(1);
    else if (pathname.includes('/donate')) setActiveLink(3);
    else if (pathname.includes('/contact')) setActiveLink(4);
    else setActiveLink(-1);
  }, [router]);

  return (
    <ToolbarLinksContainer>
      {toolbarLinksList.map((link, index) => {
        return (
          <li key={index}>
            <ToolbarLink
              title={`Link to ${link.title} page`}
              href={link.href}
              emoji={link.emoji}
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
