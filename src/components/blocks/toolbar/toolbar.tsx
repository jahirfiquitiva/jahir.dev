import { mdiMenu, mdiPlus } from '@mdi/js';
import cn from 'classnames';
import tw from 'twin.macro';

import { ThemeToggle } from './theme-toggle';
import { ToolbarButton, ToolbarButtonsContainer } from './toolbar-button';
import { ToolbarLink } from './toolbar-link';
import { ToolbarLinks } from './toolbar-links';

import { Logo } from '~/components/atoms/simple';
import useToggle from '~/hooks/useToggle';

const ToolbarGrid = tw.nav`
  min-h-20
  max-w-3xl-w-padding
  mx-auto
  grid
  grid-template-columns[auto 1fr]
  auto-rows-min
  grid-flow-row-dense
  gap-0
  overflow-hidden
  transition-all duration-300 ease-io

  lg:(gap-4 grid-rows-1 grid-template-columns[auto 1fr auto])
  
  all-child:(
    transition-all duration-300 ease-io
    last:(
      max-h-0 invisible pointer-events-none opacity-0 mt-0
      [li]:(
        transition-all duration-200 ease-io
        delay-100 overflow-hidden max-h-0 invisible opacity-0
      )
      lg:(
        max-h-unset visible pointer-events-auto opacity-100 mt-0
        [li]:(delay-50 max-h-full visible opacity-100)
      )
    )
  )
  [&.expanded]:(
    all-child:(
      last:(
        max-h-unset visible pointer-events-auto opacity-100 mt-6
        [li]:(delay-50 max-h-full visible opacity-100)
        lg:(mt-0)
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
  [svg]:(w-15 h-15)
`;

const MenuButton = tw(ToolbarButton)`
  min-w-button
  min-h-button
  max-h-button
  max-w-button
  p-0
  gap-0
  xs:(p-0)
  md:(p-0)
  [svg]:(mx-auto transition-all duration-250 ease-io transform rotate-0 scale-100)
  [&.expanded]:(p-0 [svg]:(rotate-45 scale-125))
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

const StyledHeader = tw.header`
  fixed
  top-0
  bg-toolbar
  w-full
  p-4
  backdrop-filter
  backdrop-blur
  backdrop-saturate-150
  z-index[5]
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
