import { Img, type ImgProps } from '@/components/img';
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
  dark:text-transparent
  dark:bg-gradient-to-r
  dark:from-brand-300
  dark:to-blue-400
  dark:saturate-150
  dark:bg-clip-text
`;

export const Photo = tw(Img)<ImgProps>`
  rounded-full
  [@media(hover:hover)]:filter
  [@media(hover:hover)]:grayscale
  [@media(hover:hover)]:brightness-150
  [@media(hover:hover)]:transition
  [@media(hover:hover)]:[transition-duration:.25s]
  [@media(hover:hover)]:mix-blend-hard-light
  [@media(hover:hover)]:opacity-75
  hover:filter-none
  hover:mix-blend-normal
  hover:opacity-100
`;
