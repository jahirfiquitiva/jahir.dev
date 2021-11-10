import Icon from '@mdi/react';
import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from 'react';
import tw, { styled } from 'twin.macro';

import { Component, ComponentProps } from '~/types';

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

  hover:(
    border-accent-light
  )

  focus:(
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
  mb-4
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
`;

const FieldWrapper = styled(BaseFieldWrapper)`
  ${tw`svg:(
    absolute
    top-0
    right-0
    transform
    translate-y-1/2
    mr-8
    pointer-events-none
    select-none
    text-text-tertiary
  )`}

  & textarea + svg {
    top: unset;
    ${tw`bottom-0 transform -translate-y-1/2`}
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

interface BaseFieldProps extends ComponentProps {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  iconPath?: string;
  hideLabel?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (newValue: string) => void | Dispatch<SetStateAction<string>>;
}

const BaseField: Component<BaseFieldProps> = (props) => {
  const {
    name,
    placeholder,
    label,
    iconPath,
    hideLabel = !placeholder && !label,
    error,
    children,
    className,
  } = props;

  return (
    <LabeledFieldWrapper className={className}>
      <Label htmlFor={name} className={hideLabel ? 'hidden' : undefined}>
        {label || placeholder}
      </Label>
      <FieldWrapper>
        {children}
        {iconPath && <Icon path={iconPath} size={1} />}
      </FieldWrapper>
      {error && <ErrorText>!! {error}</ErrorText>}
    </LabeledFieldWrapper>
  );
};

interface FieldProps extends BaseFieldProps {
  tag: 'input' | 'textarea';
}

export const Field: Component<FieldProps> = (props) => {
  const {
    tag,
    type,
    name,
    placeholder,
    iconPath,
    disabled,
    required,
    value,
    onChange,
    ...otherProps
  } = props;
  const inputProps = {
    name,
    placeholder,
    className: iconPath ? 'with-icon' : undefined,
    disabled,
    required,
    value,
    onChange: (e: { target: HTMLInputElement | HTMLTextAreaElement }) => {
      if (onChange) onChange(e.target.value);
    },
  };

  return (
    <BaseField iconPath={iconPath} name={name} {...otherProps}>
      {tag === 'input' ? (
        <Input type={type} {...inputProps} />
      ) : (
        <TextArea {...inputProps} />
      )}
    </BaseField>
  );
};
