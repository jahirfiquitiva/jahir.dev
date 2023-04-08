import { styled, theme } from '~/stitches';

import { Logo } from '../icons';

import { Img } from './img';

export const logoAnimojiHoveredStyles = {
  '& > svg': {
    visibility: 'hidden',
    opacity: 0,
    transform: 'translateY(-50%) scale(0)',
  },
  '& > img': {
    visibility: 'visible',
    opacity: 1,
    transform: 'rotate(-8deg) translateX(2px) translateY(-50%) scale(1)',
  },
};

const Container = styled('span', {
  display: 'block',
  position: 'relative',
  width: 24,
  height: 24,
  '& > *': {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    transition: 'all ease-in-out .15s',
  },
  '& > img': {
    userSelect: 'none',
    pointerEvents: 'none',
    visibility: 'hidden',
    transform: 'rotate(-1deg) translateX(2px) translateY(-50%) scale(0)',
  },
  // hocus: logoAnimojiHoveredStyles,
});

export const LogoAnimoji = () => {
  return (
    <Container>
      <Logo fill={theme.colors['gradient-brand']?.value} />
      <Img
        src={'/static/images/jahir/animoji.png'}
        alt={'Animoji representation of Jahir'}
        size={40}
      />
    </Container>
  );
};
