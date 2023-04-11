'use client';

import { useState } from 'react';

import { LogoAnimoji } from '@/components/core/logo-animoji';
import { mdiMenu, mdiPlus } from '@/components/icons';
import type { FC } from '@/types';

import { ThemeToggle, MobileMenuToggle, MobileMenuIcon } from './buttons';
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
          <li>
            <ThemeToggle />
          </li>
          <li>
            <MobileMenuToggle
              title={`${isExpanded ? 'Collapse' : 'Expand'} menu`}
              aria-expanded={isExpanded}
              aria-controls={'header'}
              onClick={() => {
                expand(!isExpanded);
              }}
            >
              <MobileMenuIcon path={isExpanded ? mdiPlus : mdiMenu} size={1} />
            </MobileMenuToggle>
          </li>
        </ToolbarLinksContainer>
      </Nav>
    </Header>
  );
};
