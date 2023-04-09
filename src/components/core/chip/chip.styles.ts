import { tw } from '@/tw';

export const chipClasses = tw`
  flex
  items-center
  justify-center
  py-6
  pr-12
  pl-10
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
  hover:transform
  hover:scale-[1.0125]
  hover:cursor-pointer
`;

export const imageChipClasses  =tw`
  leading-[inherit]
  pl-6
  [&>img]:rounded-half
`

export const chipGroupClasses = tw`
  flex
  flex-wrap
  py-16
  gap-10
`