import { CSSProperties, FC, ReactNode, ForwardedRef } from 'react';

export interface ComponentProps {
  children?: ReactNode | ReactNode[] | Element;
  className?: string;
  style?: CSSProperties;
  ref?: ForwardedRef<unknown>;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Component<T extends ComponentProps = ComponentProps> = FC<T>;
