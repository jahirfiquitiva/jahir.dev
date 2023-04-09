import type { TailwindClass } from './tw.types';

export const tw = (strings: TemplateStringsArray): TailwindClass => {
  return strings
    .join(' ')
    .split(/\r?\n/)
    .map((it) => it.trim() as TailwindClass)
    .join(' ')
    .trim() as TailwindClass;
};
