import { CSSProperties, FC, ReactNode } from 'react';

export interface ComponentProps {
  children?: ReactNode | ReactNode[] | Element;
  className?: string;
  style?: CSSProperties;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Component<T extends ComponentProps = ComponentProps> = FC<T>;
