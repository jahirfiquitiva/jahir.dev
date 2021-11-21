import { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import { BaseToolbarButtonStyles } from './toolbar-button';

import {
  GradientSpan,
  LinkButton,
  LinkButtonProps,
} from '~/components/atoms/simple';
import { Component, ComponentWithGradientProps } from '~/types';

const BaseToolbarLink = styled(LinkButton)`
  ${BaseToolbarButtonStyles}
  ${tw`
    max-w-unset shadow-none
    hocus:(shadow-none)
    lg:(gap-6)
    [&.active]:(bg-toolbar-highlight)
    [span.emoji]:(
      hidden invisible pointer-events-none opacity-0
      sm:(
        inline-block
        visible pointer-events-auto opacity-100
        text-text-primary)
      )
  `}
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
        <GradientSpan gradientColor={gradientColor} forceGradient>
          {children}
        </GradientSpan>
      ) : (
        <span>{children}</span>
      )}
    </BaseToolbarLink>
  );
};
