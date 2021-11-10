import tw from 'twin.macro';

const ButtonGroup = tw.div`
  inline-flex
  flex-row
  flex-wrap
  items-center
  content-start

  all-child:(mb-8 not-last:(mr-8))
`;

export default ButtonGroup;
