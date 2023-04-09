import { cx as classix } from 'classix';
import React, { type ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentProps, FC } from '@/types';

import { tags as possibleElements } from './tags';
import type { WebTarget } from './tw.types';

type Argument = string | boolean | null | undefined;
export const cx = (...args: Argument[]): string => twMerge(classix(...args));

export const twx = (classes: TemplateStringsArray): string => {
  return cx(
    classes
      .join(' ')
      .split(/\r?\n/)
      .map((it) => it.trim())
      .join(' ')
      .trim(),
  );
};

function baseStyled<T>(tag: WebTarget) {
  return (classes: TemplateStringsArray | string): FC => {
    const Component = tag;
    // eslint-disable-next-line react/display-name
    return (
      props?: ComponentProps<typeof Component> & { as?: ElementType } & T,
    ) => {
      const { as: asTag, ...otherProps } = props || {};
      const FinalComponentTag = asTag || Component;
      return (
        <FinalComponentTag
          {...otherProps}
          className={cx(
            Array.isArray(classes)
              ? twx(classes as TemplateStringsArray)
              : (classes as string),
            otherProps.className,
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
