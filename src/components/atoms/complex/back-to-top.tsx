import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mdiChevronUp } from '@mdi/js';
import { useState, useEffect, useCallback } from 'react';

import { Button } from '~/components/atoms/simple';
import useHasMounted from '~/hooks/useHasMounted';
import { mediaQueries } from '~/types';

const visibleStyles = css`
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
`;

const hiddenStyles = css`
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
`;

const BackToTopButton = styled(Button)`
  z-index: 2;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 0 16px 16px 0;
  background: var(--accent-light);
  min-height: 42px;
  min-width: 42px;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(var(--shadow-color), 0.24);
  color: var(--on-accent);
  font-size: var(--font-3xs);
  letter-spacing: 0.0625rem;
  line-height: 1.5;
  padding: 0.7rem;
  gap: 0;
  text-transform: uppercase;
  transition-duration: 0.3s;

  &:hover,
  &:focus {
    background: var(--accent);
  }

  & span {
    height: 0;
    width: 0;
    font-size: 0;
  }

  & > *:not(:last-child) {
    display: inline-block;
    visibility: visible;
    pointer-events: none;
    opacity: 1;
    margin-right: 0;
  }

  ${mediaQueries.tablet.sm} {
    margin: 0 24px 24px 0;
  }

  ${mediaQueries.desktop} {
    border-radius: 9999px;
    padding: 14px 20px;
    margin: 0 32px 32px 0;

    & span {
      height: unset;
      width: unset;
      font-size: unset;
    }

    & > *:not(:last-child) {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
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
      title={'Go back to top'}
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
