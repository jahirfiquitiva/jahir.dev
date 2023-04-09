/* eslint-disable @typescript-eslint/no-unused-vars */
import { cx as classix } from 'classix';
import {
  type ElementType,
  ComponentProps,
  ReactElement,
  cloneElement,
} from 'react';
import { twMerge } from 'tailwind-merge';

import { tags as possibleElements } from './tags';
import type { TailwindClass } from './tw.types';

type Argument = string | boolean | null | undefined;
export const cx = (...args: Argument[]): string => twMerge(classix(...args));

export const twx = (classes: TemplateStringsArray): string => {
  return cx(
    (classes || '')
      .join(' ')
      .split(/\r?\n/)
      .map((it) => it.trim() as TailwindClass)
      .join(' ')
      .trim(),
  );
};

function componentBuilder<T>(tag: ElementType) {
  return (classes: TemplateStringsArray | string) => {
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

const twCreatorBuilder = () => {
  const options: Record<string, ReturnType<typeof componentBuilder>> = {};
  for (const tag of possibleElements) {
    options[tag as string] = componentBuilder(tag);
  }
  return options;
};

export const tw = twCreatorBuilder();

export function twc<T>(
  element: (props?: unknown) => ReactElement | JSX.Element,
) {
  return (classes: TemplateStringsArray | string) => {
    const Component = element();
    const componentProps = Component.props;
    return (props: typeof componentProps & { as?: ElementType } & T) => {
      return cloneElement(Component, {
        ...{ ...componentProps, ...props },
        className: cx(
          componentProps.className,
          props.className,
          Array.isArray(classes)
            ? twx(classes as TemplateStringsArray)
            : (classes as string),
        ),
      });
    };
  };
}
