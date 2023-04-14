import tw from 'tailwind-styled-components';

export const Stat = tw.span`
  inline-flex
  items-center
  py-4
  px-8
  gap-4
  rounded-6
  transition-all
  border-transparent
  min-h-[2rem]
  bg-accent-dark/[0.042]
  dark:bg-accent-dark/[0.09]
  hocus:transform-none
`;
