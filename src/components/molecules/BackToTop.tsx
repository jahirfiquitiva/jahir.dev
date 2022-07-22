import { mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import { useState, useEffect, useCallback } from 'react';

import { Button } from '@/components/atoms';
import { useHasMounted } from '@/hooks';
import { styled } from '~/stitches';

const Fab = styled(Button, {
  zIndex: 2,
  position: 'fixed',
  right: 0,
  bottom: 0,
  mr: '$16',
  mb: '$16',
  p: '$12',
  borderRadius: '50%',
  minHeight: 50,
  maxWidth: 50,
  gap: 0,
  visibility: 'hidden',
  pointerEvents: 'none',
  userSelect: 'none',
  opacity: 0,
  transform: 'translateY(72px)',
  backgroundColor: '$accent-light',
  textTransform: 'uppercase',
  letterSpacing: '0.0625rem',
  fontSize: '$3xs',
  border: '1px solid rgba($colors$toolbar-glow / .12)',
  boxShadow:
    '0 0 1px 1px $colors$divider, 0 0 6px 1px rgba($colors$toolbar-glow / .24)',

  hocus: {
    backgroundColor: '$accent',
    border: '1px solid rgba($colors$toolbar-glow / .24)',
    boxShadow:
      '0 0 1px 1px $colors$divider, 0 0 8px 2px rgba($colors$toolbar-glow / .32)',
  },
  dark: {
    backgroundColor: '$accent-light',
    hocus: {
      backgroundColor: '$accent',
    },
  },

  '& span': {
    hidden: true,
  },

  '@tablet-sm': {
    mr: '$24',
    mb: '$24',
  },

  '@desktop': {
    maxWidth: 'unset',
    mr: '$32',
    mb: '$32',
    p: '$14 $20',
    borderRadius: 9999,
    '& span': {
      visible: 'block',
    },
    '& svg': {
      hidden: true,
    },
  },

  variants: {
    shown: {
      true: {
        visible: 'flex',
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  },
});

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
export const BackToTop = () => {
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
    <Fab title={'Scroll back to top'} onClick={scrollToTop} shown={showButton}>
      <Icon path={mdiChevronUp} size={1} />
      <span>Back to top</span>
    </Fab>
  );
};
