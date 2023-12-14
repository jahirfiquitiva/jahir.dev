import tw from 'tailwind-styled-components';

export const StyledButton = tw.button<{ $outlined?: boolean }>`
  inline-flex
  items-center
  justify-center
  self-start
  min-h-[2.625rem]
  rounded-6
  py-6
  px-12
  gap-6
  font-bold
  font-manrope
  tracking-wide
  transition
  truncate
  ${(p) => (p.$outlined ? 'bg-[#fff] dark:bg-accent-dark/[0.12]' : 'bg-accent')}
  ${(p) => (p.$outlined ? 'border border-divider' : 'border-none')}
  ${(p) => (p.$outlined ? 'text-secondary-txt' : 'text-on-accent')}
  ${(p) => (p.$outlined ? 'shadow-sm' : 'shadow')}
  hocus:transform
  hocus:-translate-y-1
  hocus:no-underline
  ${(p) => (p.$outlined ? 'hocus:shadow' : 'hocus:shadow-md')}
  ${(p) =>
    p.$outlined
      ? 'hocus:bg-accent-dark/[0.12] dark:hocus:bg-accent-dark/[0.18]'
      : 'hocus:bg-accent-dark'}
  ${(p) => (p.$outlined ? 'hocus:border-accent-dark' : '')}
  ${(p) => (p.$outlined ? 'hocus:text-primary-txt' : 'hocus:text-on-accent')}
  disabled:opacity-50
  disabled:cursor-not-allowed
  [&>svg:only-child]:mx-auto
  [&>svg:only-child]:my-0
`;
