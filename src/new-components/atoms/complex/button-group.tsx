import tw from 'twin.macro';

export const ButtonGroup = tw.div`
  inline-flex
  flex-row
  flex-wrap
  items-center
  content-start

  all-child:(mb-8 not-last:(mr-8))
`;
