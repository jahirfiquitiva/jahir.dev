import tw from 'tailwind-styled-components';

export const StatBase = tw.span<{ $sm?: boolean }>`
  inline-flex
  items-center
  h-full
  ${(p) => (p.$sm ? 'py-3' : 'py-6')}
  ${(p) => (p.$sm ? 'px-8' : 'px-10')}
  ${(p) => (p.$sm ? 'min-h-[1.75rem]' : 'min-h-[2rem]')}
  ${(p) => (p.$sm ? 'min-w-[72px]' : 'min-w-[90px]')}
  ${(p) => (p.$sm ? 'gap-6' : 'gap-8')}
`;

export const Stat = tw(StatBase)`
  rounded-6
  transition
  bg-accent-dark/[0.042]
  dark:bg-accent-dark/[0.09]
`;
