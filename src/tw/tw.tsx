/* eslint-disable @typescript-eslint/no-unused-vars */
import { cx } from 'classix';
import {
  type ElementType,
  ComponentProps,
  ReactElement,
  cloneElement,
} from 'react';
import { twMerge } from 'tailwind-merge';

import { tags as possibleElements } from './tags';
import type { TailwindClass } from './tw.types';

export const twx = (classes: TemplateStringsArray): string => {
  return twMerge(
    (classes || '')
      .join(' ')
      .split(/\r?\n/)
      .map((it) => it.trim() as TailwindClass)
      .join(' ')
      .trim(),
  );
};

const componentBuilder =
  (tag: ElementType) => (classes: TemplateStringsArray) => {
    const Component = tag;
    // eslint-disable-next-line react/display-name
    return (
      props?: ComponentProps<typeof Component> & { as?: ElementType },
    ) => {
      const { as: asTag, ...otherProps } = props || {};
      const FinalComponentTag = asTag || Component;
      return (
        <FinalComponentTag
          {...otherProps}
          className={twMerge(cx(twx(classes), otherProps.className))}
        />
      );
    };
  };

const twCreatorBuilder = () => {
  const options: Record<string, ReturnType<typeof componentBuilder>> = {};
  for (const tag of possibleElements) {
    options[tag as string] = componentBuilder(tag);
  }
  return options;
};

export const tw = twCreatorBuilder();

export const twc =
  (element: (props?: unknown) => ReactElement | JSX.Element) =>
  (classes: TemplateStringsArray) => {
    const Component = element();
    const componentProps = Component.props;
    return (props: typeof componentProps & { as?: ElementType }) => {
      return cloneElement(Component, {
        ...{ ...componentProps, ...props },
        className: twMerge(
          cx(componentProps.className, props.className, twx(classes)),
        ),
      });
    };
  };
