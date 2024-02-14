'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { useHasMounted } from './use-has-mounted';

const scrollThreshold = 56; //px
export const useNavbarState = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
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
    if (expanded) document.body.classList.add('max-tablet-sm:overflow-hidden');
    else document.body.classList.remove('max-tablet-sm:overflow-hidden');
  }, [expanded, hasMounted]);

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  return {
    pathname,
    elevated,
    expanded,
    setExpanded,
  };
};
