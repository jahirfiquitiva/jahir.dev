import tw from 'tailwind-styled-components';

export const Stat = tw.span<{ $sm?: boolean }>`
  inline-flex
  items-center
  ${(p) => (p.$sm ? 'py-3' : 'py-6')}
  ${(p) => (p.$sm ? 'px-8' : 'px-10')}
  ${(p) => (p.$sm ? 'min-h-[1.75rem]' : 'min-h-[2rem]')}
  ${(p) => (p.$sm ? 'gap-6' : 'gap-8')}
  rounded-6
  transition
  border-transparent
  bg-accent-dark/[0.042]
  dark:bg-accent-dark/[0.09]
  hocus:transform-none
`;
