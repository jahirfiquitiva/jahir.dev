import animojiImage from '@/assets/images/animoji.png';

import { Container, StyledLogo, StyledImg } from './logo-animoji.styles';

export const LogoAnimoji = () => (
  <Container>
    <StyledLogo />
    <StyledImg
      src={animojiImage}
      alt={'Animoji representation of Jahir'}
      size={40}
    />
  </Container>
);
