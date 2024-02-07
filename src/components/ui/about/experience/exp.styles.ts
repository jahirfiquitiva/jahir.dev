import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

export const ExperienceItem = tw(Link)`
  font-normal
  group/exp no-underline
  relative flex flex-row items-start
  gap-2.5 mobile-lg:gap-3 tablet-md:gap-3.5
  p-2.5 mobile-lg:p-3
  tablet-md:rounded-2.5
  -mx-3
  w-[calc(100%_+_1.5rem)]
  bg-transparent
  transition-colors
  hocus:bg-tint-bg
`;

export const ExperienceItemWithLine = tw(ExperienceItem)`
  before:absolute 
  before:w-px 
  before:bg-divider
  before:h-full 
  before:top-[3.625rem] 
  before:mobile-lg:top-[3.75rem]
  before:left-[2.125rem]
  before:mobile-lg:left-[2.25rem]
`;
