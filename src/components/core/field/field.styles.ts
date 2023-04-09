import tw from '@/tw';

export const LabeledFieldWrapper = tw.div`
  flex
  flex-col
`;

export const Label = tw.label`
  mt-16
  mb-6
  font-normal
`;

export const FieldWrapper = tw.div`
  relative
  flex
  align-center
  [&>svg]:absolute
  [&>svg]:top-0
  [&>svg]:right-0
  [&>svg]:transform
  [&>svg]:translate-y-1/2
  [&>svg]:mr-12
  [&>svg]:pointer-events-none
  [&>svg]:text-tertiary-txt
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
  hover:border-accent
  disabled:opacity-50
  disabled:cursor-not-allowed
`;
