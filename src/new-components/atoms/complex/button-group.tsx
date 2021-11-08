import tw, { styled } from 'twin.macro';

const ButtonGroup = styled.div`
  ${tw`
    inline-flex
    flex-row
    flex-wrap
    items-center
    content-start
  `}

  & > * {
    ${tw`mb-8`}
    &:not(:last-child) {
      ${tw`mr-8`}
    }
  }
`;

export default ButtonGroup;
