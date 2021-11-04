import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Component, ComponentProps } from '~/elements/base/fc';
import { ToolbarLink } from '~/elements/complex/toolbar-link';
import { mediaQueries } from '~/types';

const collapsedStyles = `
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  height: 0;
`;

const expandedStyles = `
  visibility: visible;
  pointer-events: auto;
  opacity: 1;
  height: auto;
`;

const FullWidthToolbarLink = styled(ToolbarLink)`
  width: 100%;

  ${mediaQueries.tablet.lg} {
    width: unset;
  }
`;

const ToolbarLinksContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  grid-row: 2;
  grid-column: 1 / 3;
  transition: all 0.3s ease-in-out;
  ${collapsedStyles}

  & a {
    height: 0;
  }

  &.active {
    display: flex;
    ${expandedStyles}
    & a {
      height: auto;
      margin: 0.2rem 0;
      &:first-of-type {
        margin-top: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  ${mediaQueries.tablet.lg} {
    display: flex;
    visibility: visible;
    pointer-events: auto;
    opacity: 1;
    justify-content: flex-end;
    flex-direction: row;
    grid-row: 1;
    grid-column: 2;
    max-height: unset;
    height: auto;

    & a {
      height: auto;
      margin-top: 0;
      margin-bottom: 0;
      &:not(:last-of-type) {
        margin-right: 0.4rem;
      }
      &:last-of-type {
        margin-right: 0.2rem;
      }
    }

    &.active {
      & a {
        height: auto;
        margin-top: 0;
        margin-bottom: 0;
      }
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
    const { asPath: pathname } = router;
    if (pathname.includes('/blog')) setActiveLink(1);
    else if (pathname.includes('/dashboard')) setActiveLink(2);
    else if (pathname.includes('/donate')) setActiveLink(3);
    else if (pathname.includes('/contact')) setActiveLink(4);
    else setActiveLink(-1);
  }, [router]);

  return (
    <ToolbarLinksContainer className={active ? 'active' : ''}>
      <FullWidthToolbarLink
        to={'/blog'}
        gradientColor={'blue-to-green'}
        emoji={'📝'}
        label={'Blog'}
        active={activeLink === 1}
      />
      <FullWidthToolbarLink
        to={'/dashboard'}
        gradientColor={'yellow-to-orange'}
        emoji={'✨'}
        label={'Dashboard'}
        active={activeLink === 2}
      />
      <FullWidthToolbarLink
        to={'/donate'}
        gradientColor={'red-to-purple'}
        emoji={'🧡'}
        label={'Donate'}
        active={activeLink === 3}
      />
      <FullWidthToolbarLink
        to={'/contact'}
        gradientColor={'brand-to-blue'}
        emoji={'📬'}
        label={'Contact'}
        active={activeLink === 4}
      />
    </ToolbarLinksContainer>
  );
};
