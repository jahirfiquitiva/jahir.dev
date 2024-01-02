import { tw } from '@/utils/cx';

export const TestimonialCard = tw.div`
  relative
  border border-divider
  flex flex-col
  w-full p-4
  gap-2.5 rounded-3
  text-xs
  text-secondary-txt
  transition
  bg-white/50
  dark:bg-brand-800/15
  group/testimonial
  hocus:shadow-sm
  hocus:text-primary-txt
  hocus:border-brand-600/35
  dark:hocus:border-brand-200/35
`;

export const SponsorName = tw.span`
  text-2xs
  font-manrope
  font-semibold
  transition-colors
  text-tertiary-txt
  group-hocus/testimonial:text-secondary-txt
`;
