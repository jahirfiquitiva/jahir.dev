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

const cardShadowStyles = css`
  --shadow-color: var(--card-base);
  --shadow-sm-color: rgba(
    var(--shadow-color),
    calc(var(--shadow-strength) + 0.09)
  );
  --shadow-sm: 0 1px 2px -1px var(--shadow-sm-color);

  --shadow-color-a: rgba(
    var(--shadow-color),
    calc(var(--shadow-strength) + 0.03)
  );
  --shadow-color-b: rgba(
    var(--shadow-color),
    calc(var(--shadow-strength) + 0.05)
  );
  --shadow: 0 3px 5px -2px var(--shadow-color-a),
    0 7px 14px -5px var(--shadow-color-b);
`;

const linkCardStyles = css`
  ${cardShadowStyles}

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
