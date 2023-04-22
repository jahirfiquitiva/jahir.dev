'use client';

import { useState, useEffect, useCallback } from 'react';

import { mdiChevronUp } from '@/components/icons';
import { useHasMounted } from '@/hooks/use-has-mounted';

import { Fab, FabIcon, FabText } from './back-to-top.styles';

export const scrollToTop = () => {
  try {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  } catch (error) {
    window.scrollTo(0, 0);
  }
};

const SCROLL_OFFSET = 287;
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
    <Fab title={'Scroll back to top'} onClick={scrollToTop} $shown={showButton}>
      <FabIcon path={mdiChevronUp} size={1} />
      <FabText>Back to top</FabText>
    </Fab>
  );
};
