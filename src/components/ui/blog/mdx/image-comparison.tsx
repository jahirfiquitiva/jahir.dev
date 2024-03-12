'use client';

import {
  Children,
  cloneElement,
  useRef,
  useEffect,
  useState,
  type ComponentProps,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
  type Ref,
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

const Handle = (props: { portrait?: boolean; disabled?: boolean }) => {
  if (props.disabled) return null;
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
  onLoad?: () => void,
) => {
  if (!element) return null;
  try {
    return cloneElement(element as ReactElement, { ref, onLoad });
  } catch (e) {
    return null;
  }
};

const gcd = (w: number, h: number): number => {
  if (h === 0) return w;
  return gcd(h, w % h);
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

  const [itemOneLoaded, setItemOneLoaded] = useState(false);
  const [itemTwoLoaded, setItemTwoLoaded] = useState(false);
  const [componentReady, setComponentReady] = useState(false);

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
      setComponentReady(true);
      return;
    }

    if (!itemOneLoaded && !itemTwoLoaded) return;

    const itemOneAspectRatio = itemOne.naturalHeight / itemOne.naturalWidth;
    const itemTwoAspectRatio = itemTwo.naturalHeight / itemTwo.naturalWidth;

    const aspectRatio =
      fitStrategy === 'taller'
        ? Math.max(itemOneAspectRatio, itemTwoAspectRatio)
        : Math.min(itemOneAspectRatio, itemTwoAspectRatio);

    const w = rootContainer.getBoundingClientRect().width;
    const h = rootContainer.getBoundingClientRect().width * aspectRatio;
    const r = gcd(w, h);
    rootContainer.style.aspectRatio = `${w / r} / ${h / r}`;
    setComponentReady(true);
  }, [fitStrategy, reactCompareSliderRef, itemOneLoaded, itemTwoLoaded]);

  return (
    <figure className={'image-comparison'}>
      <ReactCompareSlider
        {...otherProps}
        ref={reactCompareSliderRef}
        position={(otherProps.position || 0.5) * 100}
        handle={
          <Handle portrait={otherProps.portrait} disabled={!componentReady} />
        }
        itemOne={addRefToElement(children[0], itemOneRef, () => {
          setItemOneLoaded(true);
        })}
        itemTwo={addRefToElement(children[1], itemTwoRef, () => {
          setItemTwoLoaded(true);
        })}
        className={cx(
          'border border-divider rounded-2',
          '[&_img]:object-contain [&_img]:h-full [&_img]:bg-background',
          !componentReady ? 'cursor-not-allowed' : '',
        )}
        transition={'.25s ease-in-out'}
        disabled={!componentReady}
        changePositionOnHover
      />
      <figcaption>{description}</figcaption>
    </figure>
  );
};
