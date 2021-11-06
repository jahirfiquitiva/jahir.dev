import styled from '@emotion/styled';
import { CSSProperties } from 'react';

import buildStyles from '~/utils/build-styles';
import hexToRGB from '~/utils/hex-to-rgb';

export const Chip = styled.span`
  --bg-color: var(--divider);
  --border-color: var(--divider);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  border: 1px solid var(--border-color);
  border-radius: 999999px;
  background-color: transparent;
  color: var(--text-secondary);
  cursor: default;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--bg-color);
    color: var(--text-primary);
    text-decoration: none;
  }

  & > :first-of-type {
    margin-right: 0.4rem;
  }
`;

export const ImageChip = styled(Chip)`
  padding: 0.4rem;
  padding-right: 0.8rem;

  & > :first-of-type {
    margin-right: 0.4rem !important;
  }

  & img {
    border-radius: 50%;
  }
`;

export const ChipGroup = styled.ul`
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  & > * {
    margin-bottom: 0.6rem;
    &:not(:last-child) {
      margin-right: 0.6rem;
    }
  }
`;

export const buildChipStyles = (color?: string | null): CSSProperties => {
  if (!color) return {};
  return buildStyles({
    '--bg-color': hexToRGB(color, 0.2),
    '--border-color': hexToRGB(color, 0.6),
  });
};
