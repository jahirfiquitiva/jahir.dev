import { mdiMenu, mdiPlus } from '@mdi/js';
import { useState } from 'react';
import tw from 'twin.macro';

import { ToolbarButton, ToolbarButtonsContainer } from './toolbar-button';
import { ToolbarLink } from './toolbar-link';
import { ToolbarLinks } from './toolbar-links';

import { Logo } from '~/new-components/atoms/simple';
import { useTheme } from '~/providers/theme';

const ToolbarGrid = tw.nav`
  min-h-20
  max-w-3xl-w-padding
  mx-auto
  grid
  grid-template-columns[auto 1fr]
  auto-rows-min
  grid-flow-row-dense
  gap-x-0 gap-y-0
  overflow-hidden
  transition-all duration-300

  lg:(gap-4 grid-rows-1 grid-template-columns[auto 1fr auto])
  
  all-child:(
    transition-all duration-200
    last:(
      h-0 invisible pointer-events-none select-none opacity-0
      first:(duration-100 opacity-0)
      lg:(h-unset visible pointer-events-auto select-auto opacity-100)
    )
  )
  [&.expanded]:(
    gap-y-6
    all-child:(
      last:(
        h-unset visible pointer-events-auto select-auto opacity-100
        first:(opacity-100)
      )
    )
  )
`;

const HomeLink = tw(ToolbarLink)`
  self-start
  justify-start
  gap-6
  [span]:(
    text-transparent
    bg-gradient-to-r
    bg-clip-text
    from-gradients-brand
    to-gradients-blue
  )
  [svg]:(w-15 h-15 text-gradients-brand)
`;

const MenuButton = tw(ToolbarButton)`
  min-w-button
  max-h-button
  max-w-button
  pt-4
  gap-0
  xs:(pt-4)
  md:(pt-4)
  [svg]:(mx-auto transition-all duration-150 transform rotate-0)
  [&.expanded]:(p-2 [svg]:(rotate-45))
`;

const Navigation = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isExpanded, setExpanded] = useState(false);
  const itemsClassName = isExpanded ? 'expanded' : undefined;

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
        <li>
          <ToolbarButton
            title={`Button to enable ${isDark ? 'light' : 'dark'} theme`}
            onClick={toggleTheme}
          >
            {isDark ? '🌞' : '🌚'}
          </ToolbarButton>
        </li>
        <li>
          <MenuButton
            title={`Button to ${isExpanded ? 'collapse' : 'expand'} menu`}
            icon={isExpanded ? mdiPlus : mdiMenu}
            iconSize={isExpanded ? 1.2 : 1}
            className={itemsClassName}
            onClick={() => {
              setExpanded(!isExpanded);
            }}
          />
        </li>
      </ToolbarButtonsContainer>
      <ToolbarLinks />
    </ToolbarGrid>
  );
};

const StyledHeader = tw.header`
  fixed
  top-0
  z-20
  bg-toolbar
  w-full
  p-4
  backdrop-filter
  backdrop-blur
  backdrop-saturate-150
  box-shadow[
    0 0 4px 0 var(--toolbar-shadow-a),
    0 3px 4px 0 var(--toolbar-shadow-b),
    0 1px 5px 0 var(--toolbar-shadow-c)
  ]
`;

export const Toolbar = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
};
