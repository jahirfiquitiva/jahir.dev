import tw, { styled } from 'twin.macro';

const baseFieldStyles = tw`
  bg-transparent
  text-text-primary
  border
  border-divider
  rounded
  min-h-field
  px-8
  py-4
  flex-1

  hocus:(
    outline-accent
    border-accent
  )

  disabled:(
    opacity-50
    pointer-events-none
    cursor-not-allowed
  )
`;

const Label = tw.label`
    mt-10
    font-medium
`;

const Input = styled.input`
  ${baseFieldStyles}
  &.with-icon {
    ${tw`pr-field-icon`}
  }
`;

const TextArea = styled.textarea`
  ${baseFieldStyles}
  ${tw`
    py-10
    resize-y
    h-full
    min-h-textarea
    max-h-textarea-max
  `}
  
  &.with-icon {
    ${tw`pr-8 pb-field-icon`}
  }
`;

const BaseFieldWrapper = tw.div`
  relative
  flex
  flex-row
  items-center
  mt-4
`;

const FieldWrapper = styled(BaseFieldWrapper)`
  ${tw`svg:(
    absolute
    top-0
    right-0
    transform
    translate-x-1/2
    mr-8
    pointer-events-none
    select-none
    text-text-tertiary
  )`}

  & textarea + svg {
    top: unset;
    ${tw`bottom-0 transform -translate-x-1/2`}
  }
`;

const LabeledFieldWrapper = styled.div`
  ${tw`flex flex-col pt-4`}

  & label.hidden {
    ${tw`hidden opacity-0 pointer-events-none`}
  }
`;

const ErrorText = tw.small`
  opacity-100
  mt-4
  text-gradients-red
`;
