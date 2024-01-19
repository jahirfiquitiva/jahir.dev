'use client';

import { m } from 'framer-motion';

import { tw, type TWComponentProps } from '@/utils/cx';

import { Anim } from './anim';

const StyledMain = tw(m.main)`
  flex
  flex-col
  flex-1
  z-0
  pt-28
  px-3
  pb-8
  gap-16
  w-full
  max-w-site
  mx-auto
  tablet-md:pt-32
  tablet-md:px-0
`;

export const Main = (props: TWComponentProps<typeof StyledMain>) => (
  <Anim>
    <StyledMain
      initial={{ opacity: 0, scale: 0.975 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.975 }}
      transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
      {...props}
    />
  </Anim>
);
