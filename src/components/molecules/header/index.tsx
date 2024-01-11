'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';
import { tw } from '@/utils/cx';

import { Navbar } from './navbar';

const StyledHeader = tw.header`
  fixed top-0 h-full
  w-screen z-3
  left-0 right-0
  bg-gradient-to-b from-light to-light/5
  dark:from-dark dark:to-dark/5
  p-3
  bg-blend-hard-light
  backdrop-blur
  transform-gpu
  transition-[max-height]
  duration-300
  max-h-20 tablet-sm:max-h-21
  [&[data-expanded="true"]]:max-tablet-sm:max-h-full
  [&[data-expanded="true"]]:tablet-sm:h-[unset]
`;

const scrollThreshold = 56; //px
export const Header = () => {
  const pathname = usePathname();
  const [isExpanded, setExpanded] = useState(false);
  const [elevated, setElevated] = useState(false);
  const hasMounted = useHasMounted();

  const checkScrolledDistance = useCallback(() => {
    if (!hasMounted) return;
    const scrolledDistance = window.scrollY || window.pageYOffset;
    try {
      setElevated(scrolledDistance >= scrollThreshold);
    } catch (e) {}
  }, [hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    window.addEventListener('scroll', checkScrolledDistance);
    checkScrolledDistance();
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('scroll', checkScrolledDistance);
    };
  }, [hasMounted, checkScrolledDistance]);

  useEffect(() => {
    if (!hasMounted) return;
    if (isExpanded)
      document.body.classList.add('max-tablet-sm:overflow-hidden');
    else document.body.classList.remove('max-tablet-sm:overflow-hidden');
  }, [isExpanded, hasMounted]);

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  return (
    <StyledHeader id={'header'} data-expanded={isExpanded}>
      <Navbar
        path={pathname}
        isExpanded={isExpanded}
        className={elevated ? 'shadow-toolbar-elevated' : ''}
        onNavToggleClick={() => {
          setExpanded(!isExpanded);
        }}
      />
    </StyledHeader>
  );
};
