import tw from '@/tw';

export const Chip = tw.span`
  flex
  items-center
  justify-center
  py-6
  px-12
  text-3xs
  rounded-full
  border
  border-solid
  border-divider
  bg-accent-dark/[0.006]
  text-secondary-txt
  transition-all
  leading-[1.65]
  gap-6
  truncate
  dark:bg-accent-dark/[0.008]
  hover:underline-none
  hover:text-primary-txt
  hover:bg-divider
  dark:hover:bg-divider
  hover:transform
  hover:scale-[1.0125]
  hover:cursor-pointer
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
