import { mdiMenu, mdiPlus } from '@mdi/js';
import { FC, useState } from 'react';

import { Logo } from '@/components/atoms';
import { styled, theme } from '~/stitches';

import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './ToolbarButton';
import { ToolbarLinksContainer, ToolbarLink } from './ToolbarLink';

const Header = styled('header', {
  $$toolbarHeight: '56px',
  $$baseActualHeight: 'calc($$toolbarHeight + $$floatingMargin)',
  $$floatingMargin: '8px',
  zIndex: 2,
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  pt: '$$floatingMargin',
  height: '$$baseActualHeight',
  width: 'calc(100% - calc($$floatingMargin * 2))',
  maxWidth: '$max-site-width',
  transition: 'height ease-in-out .25s',

  '@tablet-sm': {
    $$floatingMargin: '12px',
    height: 'calc($$toolbarHeight + $$floatingMargin + 4px)',
  },

  '&::before': {
    zIndex: 1,
    content: '',
    position: 'absolute',
    display: 'block',
    top: 0,
    height: '$$floatingMargin',
    width: '100%',
    background: 'linear-gradient(to bottom, $background, transparent)',
    backdropFilter: 'blur(8px) saturate(150%)',
  },

  variants: {
    expanded: {
      true: {
        height:
          'calc(calc($$baseActualHeight * 2) - calc($$floatingMargin * 1.75))',
        '@tablet-sm': {
          height: 'calc($$toolbarHeight + $$floatingMargin + 4px)',
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
  backdropFilter: 'blur(6px) saturate(150%)',
  borderRadius: '10px',
  border: '1px solid rgba($colors$toolbar-glow / .12)',
  boxShadow: '0 0 6px 1px rgba($colors$toolbar-glow / .16)',
  p: 'calc($$floatingMargin / $$spaceDivider)',
  transition: 'box-shadow ease-in-out .2s',
  gap: '0',
  gridTemplateRows: '1fr',
  gridTemplateColumns: 'auto 1fr',

  hocus: {
    border: '1px solid rgba($colors$toolbar-glow / .24)',
    boxShadow: '0 0 8px 2px rgba($colors$toolbar-glow / .28)',
  },

  '@tablet-sm': {
    $$spaceDivider: 1.5,
    gap: 'calc($$floatingMargin / $$spaceDivider)',
    gridTemplateColumns: 'auto 1fr auto',
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

export const Toolbar: FC = () => {
  const [isExpanded, expand] = useState(false);
  return (
    <Header expanded={isExpanded}>
      <Nav expanded={isExpanded}>
        <ToolbarLink home href={'/'} title={'Home page'}>
          <Logo fillColor={theme.colors['gradient-brand']?.value} />
          <span>Jahir Fiquitiva</span>
        </ToolbarLink>
        <ToolbarLinksContainer links expanded={isExpanded}>
          <li>
            <ToolbarLink index={0} href={'/about'} title={'About page'} active>
              <span>About</span>
            </ToolbarLink>
          </li>
          <li>
            <ToolbarLink index={1} href={'/blog'} title={'Blog page'}>
              <span>Blog</span>
            </ToolbarLink>
          </li>
          <li>
            <ToolbarLink index={2} href={'/projects'} title={'Projects page'}>
              <span>Projects</span>
            </ToolbarLink>
          </li>
          <li>
            <ToolbarLink index={3} href={'/contact'} title={'Contact page'}>
              <span>Contact</span>
            </ToolbarLink>
          </li>
        </ToolbarLinksContainer>
        <ToolbarLinksContainer>
          <ThemeToggle />
          <li>
            <MobileMenu
              title={`${isExpanded ? 'Collapse' : 'Expand'} menu`}
              expanded={isExpanded}
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
