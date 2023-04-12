import tw from 'tailwind-styled-components';

export const Grid = tw.div`
  grid
  grid-cols-1
  tablet-sm:grid-cols-2
  tablet-sm:gap-16
`;

export const GridColumn = tw.div`
  flex flex-col w-full
`;
