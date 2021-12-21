import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button, LinkButton } from '~/components/atoms/simple';

const outlinedButtonStyles = css`
  --divider-alpha: 0.24;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgba(var(--divider-opaque), var(--divider-alpha, 0.12));
  box-shadow: none;
  color: var(--text-secondary);

  &:hover,
  &:focus {
    background-color: rgba(45, 82, 171, 0.08);
    border-color: var(--accent-dark);
    box-shadow: var(--shadow-sm);
    color: var(--text-primary);
    .dark & {
      background-color: rgba(56, 103, 214, 0.16);
      color: var(--text-primary);
    }
  }
`;

export const OutlinedButton = styled(Button)`
  ${outlinedButtonStyles}
`;

export const OutlinedLinkButton = styled(LinkButton)`
  ${outlinedButtonStyles}
`;
