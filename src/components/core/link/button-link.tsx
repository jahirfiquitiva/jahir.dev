import type { ComponentProps } from 'react';

import { StyledButton } from './../button/button.styles';
import { Link } from './link';

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  outlined?: boolean;
}

export const ButtonLink = (props: ButtonLinkProps) => {
  const { outlined, ...otherProps } = props;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore (tw expects otherProps to be of type StyledButton.props)
  return <StyledButton $as={Link} $outlined={outlined} {...otherProps} />;
};
