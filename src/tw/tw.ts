import type { TailwindClass } from './tw.types';

export const tw = (strings: TemplateStringsArray): string => {
  return strings
    .join(' ')
    .split(/\r?\n/)
    .map((it) => it.trim() as TailwindClass)
    .join(' ')
    .trim();
};
