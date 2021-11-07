import tw, { styled } from 'twin.macro';

export const ButtonStyles = tw`
  inline-flex
  items-center
  content-center
  bg-accent
  text-accent-text
  border-none
  rounded
  min-h-24
  px-8
  py-4
  font-manrope
  font-semibold
  tracking-button
  cursor-pointer
  transition-all
  duration-200

  hocus:(bg-accent-dark -translate-y-1)
`;

const Button = styled.button`
  ${ButtonStyles}
  & > *:not(:last-child) {
    margin-right: 0.4rem;
  }
`;

export default Button;
