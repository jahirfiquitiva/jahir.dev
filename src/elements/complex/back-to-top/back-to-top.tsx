import styled from '@emotion/styled';
import { mdiArrowUp } from '@mdi/js';
import { useState, useEffect, CSSProperties } from 'react';

import Button from '~/new-components/atoms/simple/button';
import { mediaQueries } from '~/types';

const visibleStyles: CSSProperties = {
  visibility: 'visible',
  opacity: 1,
  pointerEvents: 'auto',
  userSelect: 'auto',
};

const hiddenStyles: CSSProperties = {
  visibility: 'hidden',
  opacity: 0,
  pointerEvents: 'none',
  userSelect: 'none',
};

const BTTButton = styled(Button)`
  background: var(--accent-lighter);
  border-radius: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.24);
  color: var(--on-accent-inverted);
  font-size: var(--font-size-xxs);
  letter-spacing: 0.0625rem;
  line-height: 1.5rem;
  padding: 12px;
  text-transform: uppercase;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 0 16px 16px 0;
  transition-duration: 0.35s;

  & > *:not(:last-child) {
    display: inline-block;
    visibility: visible;
    pointer-events: auto;
    opacity: 1;
    margin-right: 0;
  }

  & span {
    height: 0;
    width: 0;
    font-size: 0;
  }

  ${mediaQueries.tablet.sm} {
    margin: 0 24px 24px 0;
  }

  ${mediaQueries.desktop} {
    padding: 12px 24px;
    margin: 0 32px 32px 0;

    & span {
      height: unset;
      width: unset;
      font-size: unset;
    }

    & > *:not(:last-child) {
      display: none;
      visibility: hidden;
      pointer-events: none;
      opacity: 0;
    }
  }

  &:hover,
  &:focus {
    background: var(--accent-light);
  }
`;

const scrollToTop = () => {
  try {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  } catch (error) {
    if (window) window.scrollTo(0, 0);
  }
};

const SCROLL_OFFSET = 425;
export const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const checkScrollTop = () => {
    const scrolledDistance = window ? window.scrollY || window.pageYOffset : 0;
    const screenHeight = window
      ? document.body.scrollHeight - window.screen.availHeight
      : 0;
    try {
      setShowButton(
        scrolledDistance > SCROLL_OFFSET &&
          scrolledDistance < screenHeight - Math.ceil(SCROLL_OFFSET / 2.5),
      );
    } catch (e) {}
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    checkScrollTop();
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BTTButton
      name={'Back to top button'}
      icon={mdiArrowUp}
      iconSize={1.1}
      onClick={scrollToTop}
      style={showButton ? visibleStyles : hiddenStyles}
    >
      Back to top
    </BTTButton>
  );
};
