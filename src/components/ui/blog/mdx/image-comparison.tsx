'use client';

import {
  Children,
  cloneElement,
  useRef,
  type ComponentProps,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
  type Ref,
  useEffect,
} from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  useReactCompareSliderRef,
} from 'react-compare-slider';

import cx from '@/utils/cx';

interface ImageComparisonProps
  extends PropsWithChildren,
    Omit<ComponentProps<typeof ReactCompareSlider>, 'itemOne' | 'itemTwo'> {
  description?: string;
  fitStrategy?: 'taller' | 'wider';
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

const addRefToElement = (
  element: ReactNode | null | undefined,
  ref: Ref<HTMLImageElement>,
) => {
  if (!element) return null;
  try {
    return cloneElement(element as ReactElement, { ref });
  } catch (e) {
    return null;
  }
};

export const ImageComparison = (props: ImageComparisonProps) => {
  const {
    children: childrenFromProps,
    description,
    fitStrategy,
    ...otherProps
  } = props;

  const reactCompareSliderRef = useReactCompareSliderRef();
  const itemOneRef = useRef<HTMLImageElement>(null);
  const itemTwoRef = useRef<HTMLImageElement>(null);

  const children = getChildrenArray(childrenFromProps);

  useEffect(() => {
    const rootContainer = reactCompareSliderRef.current.rootContainer;
    const itemOne = itemOneRef.current;
    const itemTwo = itemTwoRef.current;

    if (!rootContainer || !itemOne || !itemTwo) {
      return;
    }

    if (typeof fitStrategy === 'undefined') {
      rootContainer.style.aspectRatio = 'auto';
      return;
    }

    const itemOneAspectRatio = itemOne.naturalHeight / itemOne.naturalWidth;
    const itemTwoAspectRatio = itemTwo.naturalHeight / itemTwo.naturalWidth;

    const aspectRatio =
      fitStrategy === 'wider'
        ? Math.max(itemOneAspectRatio, itemTwoAspectRatio)
        : Math.min(itemOneAspectRatio, itemTwoAspectRatio);

    rootContainer.style.aspectRatio = `${aspectRatio}`;
  }, [fitStrategy, reactCompareSliderRef]);

  return (
    <figure className={'image-comparison'}>
      <ReactCompareSlider
        {...otherProps}
        ref={reactCompareSliderRef}
        position={(otherProps.position || 0.5) * 100}
        handle={<Handle portrait={otherProps.portrait} />}
        itemOne={addRefToElement(children[0], itemOneRef)}
        itemTwo={addRefToElement(children[1], itemTwoRef)}
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
