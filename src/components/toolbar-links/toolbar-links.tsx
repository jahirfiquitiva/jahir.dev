import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Component, ComponentProps } from '~/elements/fc';
import { ToolbarLink } from '~/elements/toolbar-link';
import { mediaQueries } from '~/types';

const collapsedStyles = `
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  max-height: 0;
`;

const expandedStyles = `
  visibility: visible;
  pointer-events: auto;
  opacity: 1;
  max-height: 100%;
`;

const ToolbarLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-row: 2;
  grid-column: 1 / 3;
  transition: all 0.15s ease-in-out;
  max-height: 0;
  ${collapsedStyles}

  &.active {
    transition: all 0.2s ease-in-out;
    max-height: 100%;
    ${expandedStyles}
    & a {
      margin: 0.1rem 0;
      &:first-of-type {
        margin-top: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  ${mediaQueries.desktop} {
    visibility: visible;
    pointer-events: auto;
    opacity: 1;
    justify-content: flex-end;
    flex-direction: row;
    grid-row: 1;
    grid-column: 2;
    max-height: unset;

    & a {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

interface ToolbarLinksProps extends ComponentProps {
  active?: boolean;
}

export const ToolbarLinks: Component<ToolbarLinksProps> = (props) => {
  const { active } = props;
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(-1);

  useEffect(() => {
    const { pathname } = router;
    if (pathname.includes('/blog')) setActiveLink(1);
    else if (pathname.includes('/uses')) setActiveLink(2);
    else if (pathname.includes('/donate')) setActiveLink(3);
    else if (pathname.includes('/contact')) setActiveLink(4);
    else setActiveLink(-1);
  }, [router]);

  return (
    <ToolbarLinksContainer className={active ? 'active' : ''}>
      <ToolbarLink
        to={'/blog'}
        gradientColor={'blue-to-green'}
        emoji={'📝'}
        label={'Blog'}
        active={activeLink === 1}
      />
      <ToolbarLink
        to={'/uses'}
        gradientColor={'yellow-to-orange'}
        emoji={'⚡️'}
        label={'Uses'}
        active={activeLink === 2}
      />
      <ToolbarLink
        to={'/donate'}
        gradientColor={'red-to-purple'}
        emoji={'🧡'}
        label={'Donate'}
        active={activeLink === 3}
      />
      <ToolbarLink
        to={'/contact'}
        gradientColor={'brand-to-blue'}
        emoji={'📬'}
        label={'Contact'}
        active={activeLink === 4}
      />
    </ToolbarLinksContainer>
  );
};
