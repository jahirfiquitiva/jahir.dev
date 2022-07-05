import { FC } from 'react';

import { Button, Logo } from '@/components/atoms';
import { useTheme } from '@/providers/theme';
import { styled, theme } from '~/stitches';

import { ToolbarLinksContainer, ToolbarLink } from './ToolbarLink';

const Header = styled('header', {
  $$toolbarHeight: '56px',
  $$floatingMargin: '8px',
  zIndex: 2,
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  pt: '$$floatingMargin',
  height: 'calc($$toolbarHeight + $$floatingMargin)',
  width: 'calc(100% - calc($$floatingMargin * 2))',
  maxWidth: '$max-site-width',

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
});

const Nav = styled('nav', {
  $$glowColor: '45 82 171',
  position: 'relative',
  display: 'grid',
  alignItems: 'center',
  height: '100%',
  backgroundColor: '$toolbar',
  backdropFilter: 'blur(6px) saturate(150%)',
  borderRadius: '10px',
  boxShadow: '0 0 6px 1px rgba($$glowColor / .24)',
  border: '1px solid rgba($$glowColor / .12)',
  p: 'calc($$floatingMargin / 1.5)',
  transition: 'box-shadow ease-in-out .2s',

  '&:hover': {
    border: '1px solid rgba($$glowColor / .24)',
    boxShadow: '0 0 8px 2px rgba($$glowColor / .36)',
  },

  '@tablet-lg': {
    gap: '$$floatingMargin',
    gridTemplateRows: 'minmax(0px, 1fr)',
    gridTemplateColumns: 'auto 1fr auto',
  },

  '& svg': {
    width: '24px',
    height: '24px',
  },
});

export const Toolbar: FC = () => {
  const { toggleTheme } = useTheme();
  return (
    <Header>
      <Nav>
        <ToolbarLink home href={'/'} title={'Home page'}>
          <Logo fillColor={theme.colors['gradient-brand']?.value} />
          <span>Jahir Fiquitiva</span>
        </ToolbarLink>
        <ToolbarLinksContainer css={{ justifyContent: 'flex-end' }}>
          <li>
            <ToolbarLink index={0} href={'/about'} title={'About page'}>
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
          <li>
            <Button
              onClick={() => {
                toggleTheme?.();
              }}>
              T
            </Button>
          </li>
          <li>
            <Button>M</Button>
          </li>
        </ToolbarLinksContainer>
      </Nav>
    </Header>
  );
};
