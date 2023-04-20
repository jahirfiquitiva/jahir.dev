import tw from 'tailwind-styled-components';

export const ProjectsHeader = tw.div`
  w-full
  flex
  flex-col
  items-start
  gap-16
  tablet-sm:flex-row
  tablet-sm:items-center
  tablet-sm:justify-between
`;

export const ProjectsButtons = tw.div`
  flex
  flex-row-reverse
  items-center
  justify-start
  flex-wrap
  gap-16
  tablet-sm:flex-row
  tablet-sm:justify-end
`;
