import tw from '@/tw';

export const buttonClasses = tw.tw`
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
  shadow
  hocus:bg-accent-dark
  hocus:text-on-accent
  hocus:transform
  hocus:-translate-y-1
  hocus:no-underline
  hocus:shadow-md
  disabled:opacity-50
  disabled:pointer-events-none
  disabled:cursor-not-allowed
  [&>svg:only-child]:mx-auto
  [&>svg:only-child]:my-0
`;

export const StyledButton = tw.button(buttonClasses);

export const outlinedButtonClasses = tw.tw`
  bg-transparent
  border
  !border-solid
  border-divider
  text-secondary-txt
  shadow-sm
  hocus:shadow
  hocus:bg-accent-dark/[0.16]
  hocus:border-accent-dark
  hocus:text-primary-txt
`;
