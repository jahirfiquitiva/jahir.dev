import tw, { styled } from 'twin.macro';

const baseChipStyles = tw`
  flex
  items-center
  content-center
  py-4
  px-8
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

  &:hover,
  &:focus {
    background-color: var(--bg-color);
  }

  & > :first-of-type {
    ${tw`mr-4`}
  }
`;

export const ImageChip = styled(Chip)`
  ${tw`p-4 pr-8`}

  & > :first-of-type {
    ${tw`mr-4!`}
  }

  & img {
    ${tw`rounded-half`}
  }
`;

const baseChipGroupStyles = tw`
  flex
  flex-wrap
  list-none
  py-10
`;

export const ChipGroup = styled.ul`
  ${baseChipGroupStyles}

  & > * {
    ${tw`mb-6`}
    &:not(:last-child) {
      ${tw`mr-6`}
    }
  }
`;
