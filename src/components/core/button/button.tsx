import cx from 'classix';

import type { ComponentProps } from '@/tw';

import { buttonClasses, outlinedClasses } from './button.styles';

interface ButtonProps extends ComponentProps<'button'> {
  title: string;
  outlined?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { outlined, ...otherProps } = props;
  return (
    <button
      {...props}
      aria-label={props.title}
      name={props.title}
      type={props.type || 'button'}
      className={cx(
        buttonClasses,
        outlined && outlinedClasses,
        props.className as string,
      )}
    />
  );
};
