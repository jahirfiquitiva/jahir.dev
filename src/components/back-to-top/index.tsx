'use client';

import { useCallback, useEffect, useState } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';

import {
  BackToTopButton,
  BackToTopIcon,
  BackToTopText,
} from './back-to-top.styles';

export const scrollToTop = () => {
  const reducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches === true;
  try {
    window.scroll({
      top: 0,
      left: 0,
      behavior: reducedMotion ? 'instant' : 'smooth',
    });
  } catch (error) {
    window.scrollTo(0, 0);
  }
};

const SCROLL_OFFSET = 56;
export const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const hasMounted = useHasMounted();

  const checkScrollTop = useCallback(() => {
    if (!hasMounted) return;
    const scrolledDistance = window.scrollY || window.pageYOffset;
    const screenHeight = document.body.scrollHeight - window.screen.availHeight;
    try {
      setShowButton(
        scrolledDistance / screenHeight > 0.25 &&
          scrolledDistance < screenHeight - Math.ceil(SCROLL_OFFSET / 2.5),
      );
    } catch (e) {}
  }, [hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    window.addEventListener('scroll', checkScrollTop);
    checkScrollTop();
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [hasMounted, checkScrollTop]);

  return (
    <BackToTopButton
      title={'Scroll back to top'}
      className={showButton ? 'shown' : ''}
      data-umami-event={'Back to top'}
      data-umami-event-src={'FAB'}
      onClick={scrollToTop}
    >
      <svg
        viewBox={'0 0 24 24'}
        role={'presentation'}
        className={BackToTopIcon}
        aria-hidden={'true'}
      >
        <path
          className={'fill-current'}
          d={'M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z'}
        ></path>
      </svg>
      <BackToTopText>Back to Top</BackToTopText>
    </BackToTopButton>
  );
};
