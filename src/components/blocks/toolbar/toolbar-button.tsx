import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button } from '~/components/atoms/simple';
import { mediaQueries } from '~/types';

export const BaseToolbarButtonStyles = css`
  letter-spacing: unset;
  padding: 0 0.6rem;
  min-width: 42px;
  background: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0);
  box-shadow: none;

  &:disabled {
    box-shadow: none;
  }

  ${mediaQueries.mobile.md} {
    padding: 0.4rem 0.8rem;
  }

  &:hover,
  &:focus {
    background-color: var(--toolbar-highlight);
    color: rgba(0, 0, 0, 0);
    transform: none;
    box-shadow: none;
  }
`;

export const ToolbarButton = styled(Button)`
  ${BaseToolbarButtonStyles}
  gap: 0;
  padding: 0.5rem 0.4rem 0.4rem;
  text-align: center;
  color: var(--accent);
  line-height: 1;

  ${mediaQueries.mobile.md} {
    padding: 0.5rem 0.6rem 0.4rem;
  }

  ${mediaQueries.tablet.sm} {
    padding-top: 0.4rem;
  }

  &:hover,
  &:focus {
    color: var(--accent-dark);

    .dark & {
      color: var(--accent-light);
    }
  }

  & > span {
    width: 100%;
    text-align: center;
  }
`;

export const ToolbarButtonsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  grid-column-start: 2;
  grid-column-end: 3;
  gap: 0.6rem;

  ${mediaQueries.tablet.lg} {
    gap: 0;
    grid-column-start: 3;
    grid-column-end: 4;
  }

  & > li {
    display: inline-block;
    margin: 0;
    padding: 0;
    max-height: 42px;
    max-width: 42px;

    &:last-of-type {
      display: block;
      visibility: visible;
      pointer-events: auto;
      opacity: 1;
      ${mediaQueries.tablet.lg} {
        display: none;
        visibility: hidden;
        pointer-events: none;
        opacity: 0;
      }
    }
  }
`;
