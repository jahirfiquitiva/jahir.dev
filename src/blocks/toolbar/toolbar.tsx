import styled from '@emotion/styled';
import { useState } from 'react';

import { ToolbarLinks } from '~/components/toolbar-links';
import { Component } from '~/elements/fc';
import { Logo } from '~/elements/logo';
import { ToolbarButton, ToolbarMenuToggle } from '~/elements/toolbar-button';
import { ToolbarLink } from '~/elements/toolbar-link';
import { useTheme } from '~/providers/theme';
import { mediaQueries } from '~/types/viewports';

export const ToolbarLogo = styled(ToolbarLink)`
  grid-row: 1;
  grid-column: 1;
  font-family: var(--manrope-font);
  font-weight: 600;
  font-size: 1.05rem;

  .logosvg {
    width: 24px;
    height: 24px;
    margin-right: 0.6rem;
    fill: var(--accent);
    color: var(--accent);
    --fill-color: var(--accent);
  }

  &:hover .logosvg,
  &:focus .logosvg,
  .logosvg:hover,
  .logosvg:focus {
    fill: var(--accent-dark);
    color: var(--accent-dark);
    --fill-color: var(--accent-dark);
  }
`;

const ToolbarActionButtons = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  max-height: var(--toolbar-height);
  grid-row: 1;
  grid-column: 2;

  ${mediaQueries.desktop} {
    grid-column: 3;
    justify-content: center;
  }
`;

const ToolbarContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: var(--toolbar-height) 0;
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 0.2rem;
  padding: 0.4rem;
  min-height: var(--toolbar-height);
  max-height: var(--toolbar-height);
  max-width: calc(var(--max-site-width) + 1.6rem);
  margin: 0 auto;
  transition: all 0.3s ease-in-out;

  &.active {
    grid-template-rows: var(--toolbar-height) minmax(
      calc(var(--toolbar-height) * 4),
      100%
    );
    max-height: unset;
  }

  ${mediaQueries.desktop} {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr;
  }
`;

const NavigationContainer = styled.nav`
  z-index: 4;
  width: 100%;
  background-color: var(--toolbar-color);
  -webkit-backdrop-filter: saturate(150%) blur(8px);
  backdrop-filter: saturate(150%) blur(8px);
  min-height: var(--toolbar-height);
  max-height: calc(var(--toolbar-height) + 0.8rem);
  position: fixed;
  top: 0;
  transition: all 0.3s ease-in-out;
  -webkit-box-shadow: 0 0 4px 0 var(--toolbar-shadow-a),
    0 3px 4px 0 var(--toolbar-shadow-b), 0 1px 5px 0 var(--toolbar-shadow-c);
  -moz-box-shadow: 0 0 4px 0 var(--toolbar-shadow-a),
    0 3px 4px 0 var(--toolbar-shadow-b), 0 1px 5px 0 var(--toolbar-shadow-c);
  -o-box-shadow: 0 0 4px 0 var(--toolbar-shadow-a),
    0 3px 4px 0 var(--toolbar-shadow-b), 0 1px 5px 0 var(--toolbar-shadow-c);
  box-shadow: 0 0 4px 0 var(--toolbar-shadow-a),
    0 3px 4px 0 var(--toolbar-shadow-b), 0 1px 5px 0 var(--toolbar-shadow-c);

  &.active {
    max-height: unset;
  }
`;

const ThemeToggleButton = styled(ToolbarButton)`
  justify-content: center;
`

export const Toolbar: Component = () => {
  const { isDark, toggleTheme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  return (
    <NavigationContainer className={expanded ? 'active' : ''}>
      <ToolbarContainer className={expanded ? 'active' : ''}>
        <ToolbarLogo
          to={'/'}
          label={'Jahir Fiquitiva'}
          gradientColor={'brand-to-blue'}
        >
          <Logo className={'logosvg'} />
        </ToolbarLogo>
        <ToolbarLinks active={expanded} />
        <ToolbarActionButtons>
          <ThemeToggleButton onClick={toggleTheme}>
            {isDark ? '🌞' : '🌚'}
          </ThemeToggleButton>
          <ToolbarMenuToggle
            active={expanded}
            onClick={() => {
              setExpanded(!expanded);
            }}
          />
        </ToolbarActionButtons>
      </ToolbarContainer>
    </NavigationContainer>
  );
};
