import styled from '@emotion/styled';
import { ReactNode } from 'react';

import { BaseToolbarButtonStyles } from './toolbar-button';

import {
  GradientSpan,
  LinkButton,
  LinkButtonProps,
} from '~/components/atoms/simple';
import { Component, ComponentWithGradientProps, mediaQueries } from '~/types';

const BaseToolbarLink = styled(LinkButton)`
  ${BaseToolbarButtonStyles}
  max-width: unset;
  box-shadow: none;

  ${mediaQueries.tablet.lg} {
    gap: 0.6rem;
  }

  &:hover,
  &:focus {
    box-shadow: none;
    color: rgba(0, 0, 0, 0);
    .dark & {
      color: rgba(0, 0, 0, 0);
    }
  }


  &.active {
    background-color: var(--toolbar-highlight);
  }

  & > span.emoji {
    display: none;
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    ${mediaQueries.mobile.lg} {
      display: inline-block;
      visibility: visible;
      pointer-events: auto;
      opacity: 1;
      color: var(--text-primary);
    }
  }
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
