import { useState } from 'react';

import { mdiMenu, mdiPlus, Logo } from '@/components/icons';
import type { FC } from '@/types';
import { theme } from '~/stitches';

import { ThemeToggle, MobileMenuToggle } from './toolbar-buttons';
import { ToolbarNavLinks, ToolbarLinksContainer, ToolbarLink } from './toolbar-nav-links';
import { Header, Nav } from './toolbar.styles';

export const Toolbar: FC = (props) => {
  const [isExpanded, expand] = useState(false);
  return (
    <Header expanded={isExpanded} css={props.css}>
      <Nav expanded={isExpanded}>
        <ToolbarLink home href={'/'} title={'Home page'} underline={false}>
          <Logo fill={theme.colors['gradient-brand']?.value} />
          <span>Jahir Fiquitiva</span>
        </ToolbarLink>
        <ToolbarNavLinks expanded={isExpanded} />
        <ToolbarLinksContainer>
          <ThemeToggle />
          <li>
            <MobileMenuToggle
              title={`${isExpanded ? 'Collapse' : 'Expand'} menu`}
              aria-expanded={isExpanded}
              iconPath={isExpanded ? mdiPlus : mdiMenu}
              onClick={() => {
                expand(!isExpanded);
              }}
            />
          </li>
        </ToolbarLinksContainer>
      </Nav>
    </Header>
  );
};
