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
        className={
          elevated ? 'max-tablet-sm:shadow-toolbar-elevated gap-2' : ''
        }
        onNavToggleClick={() => {
          setExpanded(!expanded);
        }}
      />
    </StyledHeader>
  );
};
