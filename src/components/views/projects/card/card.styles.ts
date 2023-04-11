import tw from 'tailwind-styled-components';

import { Link } from '@/components/core/link';

export const StyledProjectCard = tw(Link)`
  relative
  flex
  flex-col
  py-12
  px-14
  gap-10
  bg-inverse/[0.006]
  border
  border-solid
  border-divider
  rounded-8
  text-secondary-txt
  transition-all
  dark:bg-inverse/[0.008]
`;