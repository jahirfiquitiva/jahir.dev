import type { ComponentProps } from 'react';

import { StyledButton } from './button.styles';

interface ButtonProps extends ComponentProps<'button'> {
  title: string;
  outlined?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { outlined, ...otherProps } = props;
  return (
    <StyledButton
      {...otherProps}
      aria-label={props.title}
      name={props.title}
      type={props.type || 'button'}
      $outlined={outlined}
    />
  );
};
