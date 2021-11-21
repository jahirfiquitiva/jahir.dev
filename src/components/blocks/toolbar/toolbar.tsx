import styled from '@emotion/styled';
import { mdiMenu, mdiPlus } from '@mdi/js';
import cn from 'classnames';

import { ThemeToggle } from './theme-toggle';
import { ToolbarButton, ToolbarButtonsContainer } from './toolbar-button';
import { ToolbarLink } from './toolbar-link';
import { ToolbarLinks } from './toolbar-links';

import { Logo } from '~/components/atoms/simple';
import useToggle from '~/hooks/useToggle';
import { mediaQueries } from '~/types';

const ToolbarGrid = styled.nav`
  min-height: 2rem;
  max-width: calc(768px + 1.6rem);
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-rows: min-content;
  grid-auto-flow: row dense;
  gap: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  ${mediaQueries.tablet.lg} {
    gap: 0.4rem;
    grid-template-rows: minmax(0, 1fr);
    grid-template-columns: auto 1fr auto;
  }

  & > * {
    transition: all 0.3s ease-in-out;

    &:last-child {
      max-height: 0;
      margin-top: 0;
      visibility: hidden;
      pointer-events: none;
      opacity: 0;

      ${mediaQueries.tablet.lg} {
        max-height: unset;
        visibility: visible;
        pointer-events: auto;
        opacity: 1;
      }

      & > li {
        transition: all 0.2s ease-in-out;
        transition-delay: 0.1s;
        overflow: hidden;
        visibility: hidden;
        max-height: 0;
        opacity: 0;

        ${mediaQueries.tablet.lg} {
          transition-delay: 50ms;
          visibility: visible;
          max-height: 100%;
          opacity: 1;
        }
      }
    }
  }

  &.expanded {
    & > *:last-child {
      max-height: unset;
      visibility: visible;
      pointer-events: auto;
      opacity: 1;
      margin-top: 0.6rem;

      ${mediaQueries.tablet.lg} {
        margin-top: 0;
      }

      & > li {
        transition-delay: 50ms;
        visibility: visible;
        max-height: 100%;
        opacity: 1;
      }
    }
  }
`;

const HomeLink = styled(ToolbarLink)`
  align-self: flex-start;
  justify-content: flex-start;
  gap: 0.6rem;

  & > svg {
    width: 24px;
    height: 24px;
  }

  & > span {
    color: var(0, 0, 0, 0);
    background-clip: text;
    background-image: linear-gradient(
      to right,
      var(--gradient-brand),
      var(--gradient-blue)
    );
  }
`;

const MenuButton = styled(ToolbarButton)`
  min-height: 42px;
  min-width: 42px;
  max-height: 42px;
  max-width: 42px;
  padding: 0;
  gap: 0;

  ${mediaQueries.mobile.md} {
    padding: 0;
  }
  ${mediaQueries.tablet.sm} {
    padding: 0;
  }

  & > svg {
    margin: 0 auto;
    transition: all 0.25s ease-in-out;
    transform: rotate(0) scale(1);
  }

  &.expanded {
    & > svg {
      transform: rotate(45deg) scale(1.25);
    }
  }
`;

const Navigation = () => {
  const [isExpanded, toggleMenu] = useToggle(false);
  const itemsClassName = cn({ expanded: isExpanded });

  return (
    <ToolbarGrid className={itemsClassName}>
      <HomeLink
        title={'Link to go to home page'}
        href={'/'}
        outOfSpanChildren={<Logo />}
      >
        Jahir Fiquitiva
      </HomeLink>
      <ToolbarButtonsContainer>
        <ThemeToggle />
        <li>
          <MenuButton
            title={`Button to ${isExpanded ? 'collapse' : 'expand'} menu`}
            icon={isExpanded ? mdiPlus : mdiMenu}
            className={itemsClassName}
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              toggleMenu();
            }}
          />
        </li>
      </ToolbarButtonsContainer>
      <ToolbarLinks />
    </ToolbarGrid>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 5;
  background: var(--toolbar);
  width: 100%;
  padding: 0.4rem;
  backdrop-filter: blur(8px) saturate(150%);
  border-bottom: 1px solid var(--divider);
  box-shadow: 0 0 4px 0 var(--toolbar-shadow-a),
    0 3px 4px 0 var(--toolbar-shadow-b), 0 1px 5px 0 var(--toolbar-shadow-c);
`;

export const Toolbar = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
};
