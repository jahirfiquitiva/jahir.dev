import { FC } from 'react';
import { styled, theme } from '~/stitches';
import { Logo } from '@/components/atoms';

const ToolbarContainer = styled('header', {
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
    height: 'calc($$toolbarHeight + $$floatingMargin + 8px)',
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
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  backgroundColor: '$toolbar',
  backdropFilter: 'blur(6px) saturate(150%)',
  borderRadius: '10px',
  boxShadow: '0 0 8px 1px rgba($$glowColor / .24)',
  border: '1px solid rgba($$glowColor / .12)',
  p: 'calc($$floatingMargin - 2px) $$floatingMargin',
  transition: 'box-shadow ease-in-out .2s',
  '&:hover': {
    boxShadow: '0 0 8px 2px rgba($$glowColor / .4)',
  },

  '& svg': {
    width: '24px',
    height: '24px',
  },
});

interface ToolbarProps {}

export const Toolbar: FC<ToolbarProps> = (props) => {
  return (
    <ToolbarContainer>
      <Nav>
        <Logo fillColor={theme.colors.accent?.value} />
      </Nav>
    </ToolbarContainer>
  );
};
