import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Link } from './link';

const baseCardStyles = css`
  display: block;
  border-radius: 6px;
  padding: 0;
  transition: all 0.25s ease-in-out;
  border: 1px solid var(--divider);
`;

export const Card = styled.div`
  ${baseCardStyles}
`;

const linkCardStyles = css`
  --shadow-color: var(--card-base);
  box-shadow: none;
  text-decoration: none;

  &:hover,
  &:focus {
    box-shadow: 0 4px 6px -1px rgba(var(--shadow-color), 0.175),
      0 2px 4px -1px rgba(var(--shadow-color), 0.075);
    border-color: var(--card-shadow-border);
    transform: translateY(-0.1rem);
  }
`;

export const LinkCard = styled(Link)`
  ${baseCardStyles}
  ${linkCardStyles}
`;
