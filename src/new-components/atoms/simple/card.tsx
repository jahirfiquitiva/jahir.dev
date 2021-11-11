import tw, { styled } from 'twin.macro';

import { Link } from './link';

const baseCardStyles = tw`
  block
  rounded
  p-0
  transition-all
  duration-300
  border
  border-solid
  border-divider
  motion-reduce:transition-none

  [> div]:(
    rounded
    transition-all
    duration-300
    motion-reduce:transition-none
  )
`;

export const Card = styled.div`
  ${baseCardStyles}
`;

const linkCardStyles = tw`
  --shadow-color[var(--card-base)]
  --shadow-color-full[var(--card-shadow)]
  shadow-none no-underline
  hocus:(shadow-md border-card-shadow-border -translate-y-1)
`;

export const LinkCard = styled(Link)`
  ${baseCardStyles}
  ${linkCardStyles}
`;
