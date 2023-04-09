import { useState } from 'react';

import { LogoAnimoji, logoAnimojiHoveredStyles } from '@/old/components/core';
import { mdiMenu, mdiPlus } from '@/old/components/icons';
import type { FC } from '@/old/types';

import { ThemeToggle, MobileMenuToggle } from './toolbar-buttons';
import {
  ToolbarNavLinks,
  ToolbarLinksContainer,
  ToolbarLink,
} from './toolbar-nav-links';
import { Header, Nav } from './toolbar.styles';

export const Toolbar: FC = (props) => {
  const [isExpanded, expand] = useState(false);
  return (
    <Header expanded={isExpanded} css={props.css}>
      <Nav expanded={isExpanded}>
        <ToolbarLink
          home
          href={'/'}
          title={'Home page'}
          underline={false}
          css={{
            hocus: {
              '& > span:first-of-type': logoAnimojiHoveredStyles,
            },
          }}
        >
          <LogoAnimoji />
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
