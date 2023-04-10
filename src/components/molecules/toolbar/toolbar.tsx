'use client';

import { useState } from 'react';

import { LogoAnimoji } from '@/components/core/logo-animoji';
import { mdiMenu, mdiPlus } from '@/components/icons';
import type { FC } from '@/types';

import { ThemeToggle, MobileMenuToggle } from './buttons';
import {
  HomeLink,
  HomeLinkSpan,
  ToolbarLinksContainer,
  ToolbarNavLinks,
} from './nav-links';
import { Header, Nav } from './toolbar.styles';

export const Toolbar: FC = () => {
  const [isExpanded, expand] = useState(false);
  return (
    <Header data-expanded={isExpanded} id={'header'}>
      <Nav>
        <HomeLink href={'/'} title={'Home page'} className={'group/animoji'}>
          <LogoAnimoji />
          <HomeLinkSpan>Jahir Fiquitiva</HomeLinkSpan>
        </HomeLink>
        <ToolbarNavLinks />
        <ToolbarLinksContainer>
          <ThemeToggle />
          <li>
            <MobileMenuToggle
              title={`${isExpanded ? 'Collapse' : 'Expand'} menu`}
              aria-expanded={isExpanded}
              aria-controls={'header'}
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
