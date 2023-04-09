import { cx } from 'classix';
import {
  type ElementType,
  ComponentProps,
  ReactNode,
  ReactElement,
  ReactComponentElement,
  cloneElement,
} from 'react';

import type { TailwindClass } from './tw.types';

const possibleElements: Array<ElementType> = [
  'a',
  'button',
  'div',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'strong',
  'em',
  'section',
  'article',
  'hr',
  'input',
  'ul',
  'ol',
  'li',
  'span',
];

export const twx = (classes: TemplateStringsArray): string => {
  return (classes || '')
    .join(' ')
    .split(/\r?\n/)
    .map((it) => it.trim() as TailwindClass)
    .join(' ')
    .trim();
};

const componentBuilder =
  (tag: ElementType) => (classes: TemplateStringsArray) => {
    const Component = tag;
    // eslint-disable-next-line react/display-name
    return (props: ComponentProps<typeof Component> & { as?: ElementType }) => {
      const { as, ...otherProps } = props;
      const FinalComponentTag = as || Component;
      return (
        <FinalComponentTag
          {...otherProps}
          className={cx(twx(classes), otherProps.className)}
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
  (
    element: (props?: unknown) => ReactElement | JSX.Element,
    classes: TemplateStringsArray,
  ) =>
  () =>
    cloneElement(element(), { className: twx(classes) });
