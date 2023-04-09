import cx from 'classix';

import type { ComponentProps } from '@/tw';

import { Button as StyledButton, outlinedButtonClasses } from './button.styles';

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
      className={cx(
        outlined && outlinedButtonClasses,
        props.className as string,
      )}
    />
  );
};
