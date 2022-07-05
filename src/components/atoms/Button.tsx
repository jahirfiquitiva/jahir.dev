import type { ComponentProps } from 'react';

import { FC } from '@/types';
import { styled } from '~/stitches';

/*
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
*/
const StyledButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '42px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '$accent',
  color: '$on-accent',
  py: '0.4rem',
  px: '0.8rem',
  gap: '0.4rem',
  fontWeight: 700,
  letterSpacing: '0.03125rem',
  transition: 'all 0.25s ease-in-out',
  ellipsize: true,
  hocus: {
    backgroundColor: '$accent-dark',
    transform: 'translateY(-0.075rem)',
  },
  '&:disabled': {
    opacity: 0.5,
    pointerEvents: 'none',
    cursor: 'not-allowed',
  },
  '& > svg:only-child': {
    margin: '0 auto',
  },
});

export const Button: FC<ComponentProps<typeof StyledButton>> = (props) => {
  return (
    <StyledButton
      aria-label={props.title}
      name={props.title}
      type={props.type || 'button'}
      {...props}
    />
  );
};
