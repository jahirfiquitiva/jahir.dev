import type {
  ReactNode,
  CSSProperties,
  ComponentType,
  Component,
  ComponentProps as ReactComponentProps,
  FC as ReactFunctionalComponent,
} from 'react';

export type ComponentChild = ReactNode | ReactNode[] | null | undefined;

interface DefaultComponentProps {
  children?: ComponentChild;
  className?: string;
  style?: CSSProperties;
}

type InferComponentProps<T> = T extends
  | ComponentType<infer P>
  | Component<infer P>
  ? P
  : unknown;

export type ComponentProps<T> = (
  | InferComponentProps<T>
  | ReactComponentProps<T>
) &
  DefaultComponentProps;

export type FC<T = Record<string, unknown>> = ReactFunctionalComponent<
  DefaultComponentProps & T
>;
