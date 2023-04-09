import { tw } from '@/tw';

export const buttonClasses = tw`
  inline-flex
  items-center
  justify-center
  self-start
  min-h-[2.625rem]
  border-none
  rounded-6
  bg-accent
  text-on-accent
  py-6
  px-12
  gap-6
  font-bold
  font-manrope
  tracking-wide
  transition-all
  truncate
  shadow-sm
  hover:bg-accent-dark
  hover:transform
  hover:-translate-y-px
  hover:no-underline
  hover:shadow
  hover:shadow-accent
  disabled:opacity-50
  disabled:pointer-events-none
  disabled:cursor-not-allowed
  [&>svg:only-child]:mx-auto
  [&>svg:only-child]:my-0
` as string;

export const outlinedClasses = tw`
  bg-transparent
  border
  border-divider
  text-secondary
  shadow-none
  hover:shadow-sm
  hover:bg-accent-dark/[0.16]
  hover:border-accent-dark
  hover:text-primary
` as string;
