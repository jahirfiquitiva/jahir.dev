import { CSS } from '@stitches/react';

export type UtilFunc<T> = (value: T) => CSS;

export type UtilsObject<T> = Record<string, UtilFunc<T>>;
