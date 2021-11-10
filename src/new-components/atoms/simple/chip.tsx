import tw, { styled } from 'twin.macro';

const baseChipStyles = tw`
  flex
  items-center
  content-center
  py-4
  px-6
  text-tiny
  rounded-full
  border
  border-solid
  bg-transparent
  text-text-secondary
  cursor-default
  transition-all
  duration-200
  motion-reduce:transition-none
`;

const hocusChipStyles = tw`hocus:(
  no-underline
  text-text-primary
)`;

export const Chip = styled.span`
  --bg-color: var(--divider);
  --border-color: var(--divider);

  ${baseChipStyles}
  border-color: var(--border-color);

  ${hocusChipStyles}
  ${tw`all-child:(first-of-type:(mr-4))`}
  
  &:hover,
  &:focus {
    background-color: var(--bg-color);
  }
`;

export const ImageChip = styled(Chip)`
  ${tw`p-4 pr-8 all-child:(first-of-type:(mr-4!))`}

  & img {
    ${tw`rounded-half`}
  }
`;
