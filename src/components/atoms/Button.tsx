import type { ComponentProps } from 'react';

import { FC } from '@/types';
import { styled } from '~/stitches';

const StyledButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  minHeight: '32px',
  border: 'none',
  backgroundColor: '$accent',
  fontFamily: '$manrope',
  fontWeight: 600,
  hocus: {
    backgroundColor: '$accent-dark',
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
