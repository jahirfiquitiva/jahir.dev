import type { CSS } from '~/stitches';

export type UtilFunc<T> = (value: T) => CSS;

export type UtilsObject<T> = Record<string, UtilFunc<T>>;
