import {
  CSSProperties,
  FC as ReactFunctionalComponent,
  ReactNode,
  Component,
  ComponentType,
} from 'react';

import type { StitchesCSS as CSS } from '~/stitches';

export type ComponentChild = ReactNode | ReactNode[] | null | undefined;

export interface ComponentProps {
  children?: ComponentChild;
  className?: string;
  style?: CSSProperties;
  css?: CSS;
}

export type FC<T = Record<string, unknown>> = ReactFunctionalComponent<
  ComponentProps & T
>;

export type GetComponentProps<T> = T extends
  | ComponentType<infer P>
  | Component<infer P>
  ? P
  : never;
