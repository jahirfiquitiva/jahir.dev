import { CSSInterpolation } from '@emotion/serialize';
import { CSSProperties, FC, ReactNode } from 'react';

export type ComponentChild =
  | ReactNode
  | ReactNode[]
  | null
  | undefined;

export interface ComponentProps {
  children?: ComponentChild;
  className?: string;
  css?: CSSInterpolation;
  style?: CSSProperties;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Component<T extends ComponentProps = ComponentProps> = FC<T>;
