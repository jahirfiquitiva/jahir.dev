import { CSSProperties, FC, ReactNode } from 'react';

export type ComponentChild = ReactNode | ReactNode[] | Element | null | undefined;

export interface ComponentProps {
  children?: ComponentChild;
  className?: string;
  style?: CSSProperties;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Component<T extends ComponentProps = ComponentProps> = FC<T>;
