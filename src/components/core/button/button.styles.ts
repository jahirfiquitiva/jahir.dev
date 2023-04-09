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
  hover:bg-accent-dark
  hover:text-on-accent
  hover:transform
  hover:-translate-y-1
  hover:no-underline
  hover:shadow-md
  disabled:opacity-50
  disabled:pointer-events-none
  disabled:cursor-not-allowed
  [&>svg:only-child]:mx-auto
  [&>svg:only-child]:my-0
`;

// export const Button = tw.button('button')(buttonClasses);

export const outlinedButtonClasses = tw.tw`
  bg-transparent
  border
  !border-solid
  border-divider
  text-secondary-txt
  shadow-sm
  hover:shadow
  hover:bg-accent-dark/[0.16]
  hover:border-accent-dark
  hover:text-primary-txt
`;
