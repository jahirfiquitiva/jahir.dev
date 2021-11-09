import tw, { styled, css } from 'twin.macro';

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
  `;

const baseFirstDivChildStyles = tw`
  rounded
  transition-all
  duration-300
  motion-reduce:transition-none
`;

const baseFullCardStyles = css`
  ${baseCardStyles}

  & > div {
    ${baseFirstDivChildStyles}
  }
`;

export const Card = styled.div`
  ${baseFullCardStyles}
`;

const linkCardHocusStyles = tw`hocus:(
  shadow-md
  border-card-shadow-border
  -translate-y-1
)`;

export const LinkCard = styled(Link)`
  --shadow-color: var(--card-base);
  --shadow-color-full: var(--card-shadow);
  ${baseFullCardStyles}
  ${tw`shadow-none no-underline`}
  ${linkCardHocusStyles}
`;
