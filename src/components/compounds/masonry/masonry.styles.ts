import tw from 'tailwind-styled-components';

export const MasonryGrid = tw.div`
  grid
  grid-cols-1
  tablet-sm:grid-cols-2
  w-full
  max-w-full
`;

export const MasonryColumn = tw.div`
  flex
  flex-col
  justify-start
  flex-1
`;