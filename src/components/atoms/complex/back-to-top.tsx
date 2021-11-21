import { mdiChevronUp } from '@mdi/js';
import { useState, useEffect, useCallback } from 'react';
import tw from 'twin.macro';

import { Button } from '~/components/atoms/simple';
import useHasMounted from '~/hooks/useHasMounted';

const visibleStyles = tw`
  visible
  opacity-100
  pointer-events-auto
`;

const hiddenStyles = tw`
  invisible
  opacity-0
  pointer-events-none
`;

const BackToTopButton = tw(Button)`
  z-index[2]
  fixed
  right-0
  bottom-0
  mr-10
  mb-10
  bg-accent-light
  min-h-button
  min-w-button
  rounded-half
  shadow-fab
  text-accent-text
  text-tiny
  tracking-fab
  leading-normal
  p-7
  gap-0
  uppercase
  duration-300

  hocus:(bg-accent)

  [span]:(h-0 w-0 text-0)

  all-child:(not-last:(
    inline-block
    visible
    pointer-events-none
    opacity-100
    mr-0
  ))

  md:(mr-15 mb-15)

  2xl:(
    rounded-full mr-20 mb-20
    padding[0.875rem 1.25rem]
    all-child:(not-last:(
      hidden
      invisible
      opacity-0
    ))

    [span]:(h-unset w-unset text-unset)
  )
`;

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

const SCROLL_OFFSET = 425;
export const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const hasMounted = useHasMounted();

  const checkScrollTop = useCallback(() => {
    if (!hasMounted) return;
    const scrolledDistance = window.scrollY || window.pageYOffset;
    const screenHeight = document.body.scrollHeight - window.screen.availHeight;
    try {
      setShowButton(
        scrolledDistance > SCROLL_OFFSET &&
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
      title={'Button to go back to top'}
      icon={mdiChevronUp}
      iconSize={1.1}
      onClick={scrollToTop}
      css={showButton ? visibleStyles : hiddenStyles}
      wrapChildrenInSpan={false}
    >
      <span>Back to top</span>
    </BackToTopButton>
  );
};
