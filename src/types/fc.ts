import { CSSProperties, FC as ReactFunctionalComponent, ReactNode } from 'react';

export type ComponentChild = ReactNode | ReactNode[] | null | undefined;

export interface ComponentProps {
  children?: ComponentChild;
  className?: string;
  style?: CSSProperties;
}

export type FC<T = {}> = ReactFunctionalComponent<ComponentProps & T>;
