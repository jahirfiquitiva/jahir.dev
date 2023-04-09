import cx from 'classix';

import type { ComponentProps } from '@/tw';

import { buttonClasses, outlinedButtonClasses } from './button.styles';

interface ButtonProps extends ComponentProps<'button'> {
  title: string;
  outlined?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { outlined, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      aria-label={props.title}
      name={props.title}
      type={props.type || 'button'}
      className={cx(
        buttonClasses,
        outlined && outlinedButtonClasses,
        props.className as string,
      )}
    />
  );
};
