import tw from 'tailwind-styled-components';

export const Chip = tw.span`
  flex
  items-center
  justify-center
  py-8
  px-12
  text-3xs
  rounded-full
  border
  border-solid
  border-divider
  bg-accent-dark/[0.012]
  text-secondary-txt
  transition-all
  leading-[1.65]
  gap-6
  truncate
  dark:bg-accent-dark/[0.036]
  hocus:underline-none
  hocus:text-primary-txt
  hocus:bg-divider
  dark:hocus:bg-divider
  hocus:transform
  hocus:scale-[1.015]
  hocus:cursor-pointer
`;

export const ImageChip = tw(Chip)`
  pl-6
  leading-[inherit]
  [&>img]:rounded-half
`;

export const ChipGroup = tw.ul`
  flex
  flex-wrap
  py-16
  gap-10
`;
