import { tw } from '@/utils/cx';

export const NoPaddingSection = tw.section`
  flex
  flex-col
  gap-16
`;

export const Section = tw(NoPaddingSection)`
  px-10
  mobile-lg:px-12
  tablet-md:px-0
`;
