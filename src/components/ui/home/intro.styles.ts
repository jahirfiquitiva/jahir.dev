import { tw } from '@/utils/cx';

export const WavingSpan = tw.span`
  inline-block
  text-primary-txt
  motion-safe:animate-wave
  motion-safe:origin-waving
`;

export const SubHeader = tw.span`
  flex flex-row
  items-center
  gap-2
  text-shadow
  shadow-brand-300
  dark:shadow-transparent
`;

export const Name = tw.span`
  dark:text-accent
`;
