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
  --shadow: 0 3px 1px -2px rgba(var(--shadow-color), 0.12),
    0 2px 2px 0 rgba(var(--shadow-color), 0.09),
    0 1px 5px 0 rgba(var(--shadow-color), 0.07);
  box-shadow: none;
  text-decoration: none;

  &:hover,
  &:focus {
    box-shadow: var(--shadow);
    border-color: var(--card-shadow-border);
    transform: translateY(-0.1rem);
  }
`;

export const LinkCard = styled(Link)`
  ${baseCardStyles}
  ${linkCardStyles}
`;
