import { cx } from 'classix';

import type { ComponentProps } from '@/tw';

import {
  buttonClasses,
  outlinedButtonClasses,
} from './../button/button.styles';
import { Link } from './link';

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  outlined?: boolean;
}

export const ButtonLink = (props: ButtonLinkProps) => {
  const { outlined, ...otherProps } = props;
  return (
    <Link
      {...otherProps}
      className={cx(
        buttonClasses,
        outlined && outlinedButtonClasses,
        props.className,
      )}
    />
  );
};
