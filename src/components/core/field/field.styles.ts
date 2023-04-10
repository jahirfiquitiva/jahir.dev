import Icon from '@mdi/react';
import tw from 'tailwind-styled-components';

export const LabeledFieldWrapper = tw.div`
  flex
  flex-col
  gap-6
`;

export const FieldWrapper = tw.div`
  relative
  flex
  align-center
  [&:has(svg)>input]:pr-48
`;

export const Input = tw.input`
  bg-transparent
  text-primary-txt
  border
  border-solid
  border-divider
  rounded-6
  min-h-[3rem]
  py-6
  px-12
  flex-1
  hocus:border-accent
  disabled:opacity-50
  disabled:cursor-not-allowed
`;

export const FieldIcon = tw(Icon)`
  absolute
  top-0
  right-0
  transform
  translate-y-1/2
  mr-12
  pointer-events-none
  text-tertiary-txt
  fill-tertiary-txt
`;
