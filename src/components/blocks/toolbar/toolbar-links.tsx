import styled from '@emotion/styled';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

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

  const activeLink = useMemo<number>(() => {
    if (!router || !router.isReady) return -1;
    const { asPath: pathname } = router;
    if (pathname.includes('/uses')) return 2;
    if (pathname.includes('/blog')) return 1;
    if (pathname.includes('/donate')) return 3;
    if (pathname.includes('/contact')) return 4;
    return -1;
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
