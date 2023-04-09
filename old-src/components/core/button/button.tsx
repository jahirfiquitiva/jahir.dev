import type { ComponentProps } from 'react';

import type { FC } from '@/types';
import { styled } from '~/stitches';

import { Link } from '../link';

import { ButtonStyles } from './button.styles';

const BaseLink = styled(Link, ButtonStyles);
const StyledLinkButton = styled(BaseLink, {
  hocus: { color: '$on-accent', dark: { color: '$on-accent' } },
  variants: {
    outlined: {
      true: {
        hocus: { color: '$text-primary', dark: { color: '$text-primary' } },
      },
    },
  },
});
export const LinkButton: FC<ComponentProps<typeof StyledLinkButton>> = (
  props,
) => (<StyledLinkButton {...props} underline={false} />);

const StyledButton = styled('button', ButtonStyles);
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
