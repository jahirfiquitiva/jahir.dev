import Icon from '@mdi/react';
import { useState, useEffect, useCallback } from 'react';

import { useHasMounted } from '@/hooks/useHasMounted';
import { mdiChevronUp } from '@/icons';
import type { FC } from '@/types';

import { Fab } from './back-to-top.styles';

const scrollToTop = () => {
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
export const BackToTop: FC = (props) => {
  const [showButton, setShowButton] = useState(false);
  const hasMounted = useHasMounted();

  const checkScrollTop = useCallback(() => {
    if (!hasMounted) return;
    const scrolledDistance = window.scrollY || window.pageYOffset;
    const screenHeight = document.body.scrollHeight - window.screen.availHeight;
    try {
      setShowButton(
        scrolledDistance / screenHeight > 0.3 &&
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
    <Fab
      title={'Scroll back to top'}
      onClick={scrollToTop}
      shown={showButton}
      css={props.css}
    >
      <Icon path={mdiChevronUp} size={1} />
      <span>Back to top</span>
    </Fab>
  );
};
