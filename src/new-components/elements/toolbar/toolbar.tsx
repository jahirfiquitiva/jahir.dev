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
  my-20
  grid
  grid-cols-2
  auto-rows-min
  grid-flow-row-dense
  gap-x-0 gap-y-0
  overflow-hidden
  transition-all duration-300 delay-0

  lg:(gap-4 grid-rows-1 grid-template-columns[auto 1fr auto])
  
  all-child:(
    transition-all duration-300
    last:(h-0 leading-none invisible pointer-events-none select-none opacity-0)
  )
  [&.expanded]:(
    gap-y-6 delay-0
    all-child:(
      last:(h-auto leading-normal visible pointer-events-auto select-auto opacity-100)
    )
  )
`;

const HomeLink = tw(ToolbarLink)`
  w-full
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
  gap-0
  [svg]:(mx-auto transition-all duration-150 transform rotate-0)
  [&.expanded]:(max-w-button max-h-button p-2 [svg]:(rotate-45))
`;

export const Toolbar = () => {
  const { isDark } = useTheme();
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
          <ToolbarButton title={'Toggle theme'}>
            {isDark ? '🌞' : '🌚'}
          </ToolbarButton>
        </li>
        <li>
          <MenuButton
            title={'Toggle menu'}
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
