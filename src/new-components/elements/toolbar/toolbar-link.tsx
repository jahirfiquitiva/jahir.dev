import { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import { BaseToolbarButtonStyles } from './toolbar-button';

import { LinkButton, LinkButtonProps } from '~/new-components/atoms/simple';
import {
  Component,
  ComponentWithGradientProps,
  gradientToTailwind,
} from '~/types';

const BaseToolbarLink = styled(LinkButton)`
  ${BaseToolbarButtonStyles}
  ${tw`max-w-unset [span.emoji]:(hidden sm:(block text-text-primary))`}
`;

const GradientToolbarLinkSpan = tw.span`
  text-transparent
  bg-gradient-to-r
  bg-clip-text
  hocus:(text-transparent)
`;

interface ToolbarLinkProps
  extends LinkButtonProps,
    Omit<ComponentWithGradientProps, 'forceGradient'> {
  emoji?: string;
  outOfSpanChildren?: ReactNode | ReactNode[] | Element;
}

export const ToolbarLink: Component<ToolbarLinkProps> = (props) => {
  const { emoji, gradientColor, children, outOfSpanChildren, ...otherProps } =
    props;

  return (
    <BaseToolbarLink {...otherProps} wrapChildrenInSpan={false}>
      {emoji ? <span className={'emoji'}>{emoji}</span> : null}
      {outOfSpanChildren}
      {gradientColor ? (
        <GradientToolbarLinkSpan css={gradientToTailwind(gradientColor)}>
          {children}
        </GradientToolbarLinkSpan>
      ) : (
        <span>{children}</span>
      )}
    </BaseToolbarLink>
  );
};
