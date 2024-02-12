'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';
import { tw } from '@/utils/cx';

import { Navbar } from './navbar';

const StyledHeader = tw.header`
  fixed top-0 h-full
  w-screen z-3
  left-0 right-0
  bg-gradient-to-b from-light to-light/10
  dark:from-dark dark:to-dark/10
  p-3
  bg-blend-hard-light
  backdrop-blur
  transform-gpu
  transition-[max-height]
  duration-300
  max-h-20 tablet-sm:max-h-21
  [&[data-expanded="true"]]:tablet-sm:h-[unset]
  [&[data-expanded="true"]]:max-tablet-sm:max-h-full
  [&[data-expanded="true"]]:max-tablet-sm:to-light/50
  [&[data-expanded="true"]]:max-tablet-sm:dark:to-dark/50
`;

export const Header = () => {
  const pathname = usePathname();
  const [isExpanded, setExpanded] = useState(false);
  const hasMounted = useHasMounted();

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
        onNavToggleClick={() => {
          setExpanded(!isExpanded);
        }}
      />
    </StyledHeader>
  );
};
