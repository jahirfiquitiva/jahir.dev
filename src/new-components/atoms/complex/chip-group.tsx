import tw from 'twin.macro';

export const ChipGroup = tw.ul`
  flex
  flex-wrap
  list-none
  py-10

  all-child:(mb-6 not-last:(mr-6))
`;
