import styled from '@emotion/styled';
import { ReactNode } from 'react';

import { BaseToolbarButtonStyles } from './toolbar-button';

import {
  GradientSpan,
  LinkButton,
  LinkButtonProps,
} from '~/components/atoms/simple';
import {
  Component,
  ComponentWithGradientProps,
  mediaQueries,
  gradientToCss,
} from '~/types';

const BaseToolbarLink = styled.a`
  --from-gradient-color: var(--divider);
  --to-gradient-color: var(--divider);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--on-accent);
  border: none;
  border-radius: 6px;
  min-height: 42px;
  padding: 0 0.8rem;
  font-family: var(--manrope-font);
  font-weight: 600;
  max-width: unset;
  box-shadow: none;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  ${mediaQueries.mobile.md} {
    padding: 0.4rem 1rem;
  }

  ${mediaQueries.tablet.lg} {
    gap: 0.6rem;
  }

  &:hover,
  &:focus {
    box-shadow: none;
    background-color: var(--toolbar-highlight);
  }

  &.active {
    color: var(--text-primary);
    background-color: var(--toolbar-highlight);
  }

  &:hover,
  &:focus,
  &.active {
    & > span {
      color: rgba(0, 0, 0, 0);
      background-clip: text;
      background-image: linear-gradient(
        to right,
        var(--from-gradient-color),
        var(--to-gradient-color)
      );
    }
  }
`;

interface ToolbarLinkProps
  extends LinkButtonProps,
    Omit<ComponentWithGradientProps, 'forceGradient'> {
  wrapChildren?: boolean;
  outOfSpanChildren?: ReactNode | ReactNode[] | Element;
}

export const ToolbarLink: Component<ToolbarLinkProps> = (props) => {
  const {
    gradientColor,
    children,
    wrapChildren = true,
    outOfSpanChildren,
    ...otherProps
  } = props;

  const gradientCss = gradientToCss(gradientColor);

  return (
    <BaseToolbarLink {...otherProps} css={gradientCss}>
      {outOfSpanChildren}
      {wrapChildren ? <span>{children}</span> : children}
    </BaseToolbarLink>
  );
};
