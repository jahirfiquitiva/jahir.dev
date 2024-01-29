import {
  Children,
  type ComponentProps,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from 'react-compare-slider';

import cx from '@/utils/cx';

interface ImageComparisonProps
  extends PropsWithChildren,
    Omit<ComponentProps<typeof ReactCompareSlider>, 'itemOne' | 'itemTwo'> {
  description?: string;
}

const Handle = (props: { portrait?: boolean }) => {
  return (
    <ReactCompareSliderHandle
      portrait={props.portrait}
      buttonStyle={{
        display: 'none',
        visibility: 'hidden',
      }}
      linesStyle={{
        width: 8,
        opacity: 0.9,
        boxShadow: 'none',
        cursor: 'default',
        background: 'var(--color-background, white)',
      }}
      style={{
        filter:
          // eslint-disable-next-line max-len
          'drop-shadow(rgba(0, 0, 0, 0.14) 0px 0px 4px) drop-shadow(rgba(0, 0, 0, 0.12) 0px 0px 2px)',
      }}
    />
  );
};

const getChildrenArray = (
  children: PropsWithChildren['children'],
): Array<Exclude<ReactNode, string | number | boolean>> =>
  Children.toArray(children).filter(
    (it) =>
      typeof it !== 'string' &&
      typeof it !== 'number' &&
      typeof it !== 'boolean',
  ) as Array<Exclude<ReactNode, string | number | boolean>>;

export const ImageComparison = (props: ImageComparisonProps) => {
  const { children: childrenFromProps, description, ...otherProps } = props;
  const children = getChildrenArray(childrenFromProps);
  return (
    <figure className={'image-comparison'}>
      <ReactCompareSlider
        {...otherProps}
        position={(otherProps.position || 0.5) * 100}
        handle={<Handle portrait={otherProps.portrait} />}
        itemOne={children[0]}
        itemTwo={children[1]}
        className={cx(
          'border border-divider rounded-2',
          '[&_img]:object-contain [&_img]:h-full [&_img]:bg-background',
        )}
        changePositionOnHover
      />
      <figcaption>{description}</figcaption>
    </figure>
  );
};
