'use client';

import { useNavbarState } from '@/hooks/use-navbar-state';

import { StyledHeader, expandedClasses } from './header.styles';
import { Navbar } from './navbar';

export const Header = () => {
  const { pathname, elevated, expanded, setExpanded } = useNavbarState();

  return (
    <StyledHeader id={'header'} className={expanded ? expandedClasses : ''}>
      <Navbar
        path={pathname}
        expanded={expanded}
        className={elevated ? 'shadow-toolbar-elevated' : ''}
        onNavToggleClick={() => {
          setExpanded(!expanded);
        }}
      />
    </StyledHeader>
  );
};
