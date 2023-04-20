import tw from 'tailwind-styled-components';

export const TestimonialCard = tw.div`
  relative
  border border-divider
  flex flex-col
  w-full p-16
  gap-8 rounded-10
  text-xs
  text-secondary-txt
  transition
  bg-[rgba(9_17_34/0.006)]
  dark:bg-[rgba(235_240_251/0.012)]
  group/testimonial
  hocus:shadow
  hocus:text-primary-txt
  hocus:border-accent-dark
  hocus:bg-accent-dark/[0.048]
  hocus:dark:bg-accent-dark/[0.096]
`;

export const SponsorName = tw.span`
  text-2xs
  font-manrope
  font-semibold
  transition-colors
  text-tertiary-txt
  group-hocus/testimonial:text-secondary-txt
`;
