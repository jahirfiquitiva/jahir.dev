import tw from 'tailwind-styled-components';

export const Chip = tw.span`
  flex
  items-center
  justify-center
  py-[0.4375rem]
  px-[0.6875rem]
  text-3xs
  rounded-full
  border
  border-divider
  bg-accent-dark/[0.012]
  text-secondary-txt
  transition
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
`;

export const ChipGroup = tw.ul`
  flex
  flex-wrap
  py-16
  gap-10
`;
