import { cx as classix } from 'classix';
import React, { type ElementType, ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { tags as possibleElements } from './tags';
import type { TailwindClass, WebTarget } from './tw.types';

type Argument = string | boolean | null | undefined;
export const cx = (...args: Argument[]): string => twMerge(classix(...args));

export const twx = (classes: TemplateStringsArray): string => {
  return cx(
    classes
      .join(' ')
      .split(/\r?\n/)
      .map((it) => it.trim() as TailwindClass)
      .join(' ')
      .trim(),
  );
};

function baseStyled<T>(tag: WebTarget) {
  return (classes: TemplateStringsArray | string) => {
    const Component = tag;
    // eslint-disable-next-line react/display-name
    return (props?: ComponentProps<typeof Component> & T) => {
      return (
        <Component
          {...props}
          className={cx(
            Array.isArray(classes)
              ? twx(classes as TemplateStringsArray)
              : (classes as string),
            props.className,
          )}
        />
      );
    };
  };
}

const tw = baseStyled as typeof baseStyled & {
  [E in keyof JSX.IntrinsicElements]: ReturnType<typeof baseStyled>;
} & { tw: typeof twx };

// Shorthands for all valid HTML Elements
possibleElements.forEach((domElement) => {
  // @ts-expect-error someday they'll handle imperative assignment properly
  tw[domElement] = (classes: TemplateStringsArray | string) =>
    baseStyled(domElement)(classes);
});
tw.tw = twx;

export { tw, tw as default };
