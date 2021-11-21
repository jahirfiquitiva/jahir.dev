import tw, { styled } from 'twin.macro';

import { Link } from './link';

const baseCardStyles = tw`
  block
  rounded
  p-0
  border
  border-divider
  transition[all .25s ease-in-out]
`;

export const Card = styled.div`
  ${baseCardStyles}
`;

const linkCardStyles = tw`
  --shadow-color[var(--card-base)]
  shadow-none no-underline
  hocus:(shadow-md border-card-shadow-border -translate-y-1)
`;

export const LinkCard = styled(Link)`
  ${baseCardStyles}
  ${linkCardStyles}
`;
