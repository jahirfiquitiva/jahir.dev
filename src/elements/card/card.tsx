import styled from '@emotion/styled';

import { ExtLink } from '~/elements/ext-link';

const baseCardStyles = `
  --border-radius: 6px;
  padding: 0;
  transition: all 0.25s ease-in-out;
  border-radius: var(--border-radius);
  border: 1px solid var(--divider);

  & * {
    border-radius: var(--border-radius);
    transition: all 0.25s ease-in-out;
  }
`;

export const Card = styled.div`
  ${baseCardStyles}
`;

const baseLinkCardStyles = `
  ${baseCardStyles}
  border: none;

  &:hover,
  &:focus {
    --shadow-color: rgba(56, 103, 214, .12);
    --border-color: rgba(56, 103, 214, .2);
    --hl-color: var(--accent);
    --shadow-one-size: 2px;
    --shadow-two-size: 4px;
    
    border-color: var(--border-color);
    -webkit-box-shadow: 0 var(--shadow-one-size) var(--shadow-two-size) var(--shadow-color);
    -moz-box-shadow: 0 var(--shadow-one-size) var(--shadow-two-size) var(--shadow-color);
    -o-box-shadow: 0 var(--shadow-one-size) var(--shadow-two-size) var(--shadow-color);
    box-shadow: 0 var(--shadow-one-size) var(--shadow-two-size) var(--shadow-color);
    -webkit-transform: translateY(-.1rem);
    -moz-transform: translateY(-.1rem);
    -ms-transform: translateY(-.1rem);
    -o-transform: translateY(-.1rem);
    transform: translateY(-.1rem);
  }
`;

export const ExtLinkCard = styled(ExtLink)`
  display: block;
  ${baseLinkCardStyles}
`;