import { useState } from 'react';

import { mdiMenu, mdiPlus, Logo } from '@/icons';
import type { FC } from '@/types';
import { styled, theme } from '~/stitches';

import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './ToolbarButton';
import { ToolbarLinksContainer, ToolbarLink } from './ToolbarLink';
import { ToolbarNavLinks } from './ToolbarNavLinks';

const Header = styled('header', {
  $$toolbarHeight: '56px',
  $$floatingMargin: 'calc($$totalToolbarHeight - $$toolbarHeight)',
  $$baseActualHeight: 'calc($$toolbarHeight + $$floatingMargin)',
  zIndex: 2,
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  pt: '$$floatingMargin',
  height: '$$baseActualHeight',
  width: '100%',
  maxWidth: '$max-site-width',
  transition: 'height ease-in-out .25s',

  '@tablet-sm': {
    height: 'calc($$baseActualHeight + 4px)',
  },

  '&::before': {
    zIndex: 1,
    content: '',
    position: 'absolute',
    display: 'block',
    top: 0,
    height: 'calc($$floatingMargin + 6px)',
    width: 'calc(100% - calc($$floatingMargin * 2))',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(to bottom, $background, transparent)',
    backdropFilter: 'blur(8px) saturate(150%)',
  },
  '@tablet-md': {
    '&::before': {
      width: '100%',
    },
  },

  variants: {
    expanded: {
      true: {
        height:
          'calc(calc($$baseActualHeight * 2) - calc($$floatingMargin * 1.75))',
        '@tablet-sm': {
          height: 'calc($$baseActualHeight + 4px)',
        },
      },
    },
  },
});

const Nav = styled('nav', {
  $$spaceDivider: 1.25,
  zIndex: 3,
  position: 'relative',
  display: 'grid',
  height: '100%',
  backgroundColor: '$toolbar',
  backdropFilter: 'blur(10px) saturate(150%)',
  borderRadius: '$space$10',
  border: '1px solid rgba($colors$accent-shadow / .12)',
  boxShadow: '0 0 6px 1px rgba($colors$accent-shadow / .16)',
  p: 'calc($$floatingMargin / $$spaceDivider)',
  mx: '$$floatingMargin',
  transition: 'box-shadow ease-in-out .2s',
  gap: '0',
  gridTemplateRows: '1fr',
  gridTemplateColumns: 'auto 1fr',

  hocus: {
    border: '1px solid rgba($colors$accent-shadow / .24)',
    boxShadow: '0 0 8px 2px rgba($colors$accent-shadow / .28)',
  },

  '@tablet-sm': {
    $$spaceDivider: 1.5,
    gap: 'calc($$floatingMargin / $$spaceDivider)',
    gridTemplateColumns: 'auto 1fr auto',
  },

  '@tablet-md': {
    mx: 0,
  },

  '& svg': {
    width: '24px',
    height: '24px',
  },

  variants: {
    expanded: {
      true: {
        gridTemplateRows: '1fr minmax(0px, 1fr)',
        rowGap: 'calc($$floatingMargin / $$spaceDivider)',
        '@tablet-sm': {
          gridTemplateRows: 'minmax(0px, 1fr)',
        },
      },
    },
  },
});

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
            <MobileMenu
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
