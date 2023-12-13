import type { ComponentProps, ElementType } from 'react';

import cx from '@/utils/cx';

import { StyledButton } from './../button/button.styles';
import { Link } from './link';

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  outlined?: boolean;
  $as?: ElementType;
}

export const ButtonLink = (props: ButtonLinkProps) => {
  const { $as, outlined, ...otherProps } = props;
  return (
    // @ts-expect-error (tw expects otherProps to be of type StyledButton.props)
    <StyledButton
      $as={$as || Link}
      $outlined={outlined}
      {...otherProps}
      className={cx('no-underline', otherProps.className)}
    />
  );
};
