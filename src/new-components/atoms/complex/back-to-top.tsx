import tw, { styled } from 'twin.macro';
import { mdiArrowUp, mdiChevronUp } from '@mdi/js';
import { useState, useEffect, CSSProperties } from 'react';

import { Button } from '~/new-components/atoms/simple';
import { mediaQueries } from '~/types';

const visibleStyles = tw`
  visible
  opacity-100
  pointer-events-auto
  select-auto
`;

const hiddenStyles = tw`
  invisible
  opacity-0
  pointer-events-none
  select-none
`;

const BackToTopButton = tw(Button)`
  fixed
  right-0
  bottom-0
  mr-16
  mb-16
  bg-accent-lighter
  h-fab
  min-h-fab
  w-fab
  min-w-fab
  rounded-half
  shadow-fab
  text-accent-text
  text-tiny
  p-12
  uppercase
  duration-300

  all-child:(not-last:(
    inline-block
    visible
    pointer-events-auto
    opacity-100
    mr-0
  ))

  dark:(bg-accent-darker)
  2xl:(rounded-full)
`;

const StyledBackToTopButton = styled(BackToTopButton)`
  & span {
    ${tw`h-0 w-0 invisible opacity-0 select-none`}
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
    <StyledBackToTopButton
      title={'Button to go back to top'}
      icon={mdiChevronUp}
      iconSize={1.1}
      onClick={scrollToTop}
      css={showButton ? visibleStyles : hiddenStyles}
    >
      Back to top
    </StyledBackToTopButton>
  );
};
