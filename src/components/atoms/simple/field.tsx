import Icon from '@mdi/react';
import cn from 'classnames';
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

  hover:(border-accent-light)
  focus:(outline-accent border-accent)
  disabled:(opacity-50 pointer-events-none cursor-not-allowed)
`;

const Label = tw.label`
  mt-10
  mb-4
  font-medium
`;

const Input = styled.input`
  ${baseFieldStyles}
  ${tw`[&.with-icon]:(pr-field-icon)`}
`;

const TextArea = styled.textarea`
  ${baseFieldStyles}
  ${tw`
    py-10
    resize-y
    h-full
    min-h-textarea
    max-h-textarea-max
    [&.with-icon]:(pr-8 pb-field-icon)
  `}
`;

const BaseFieldWrapper = tw.div`
  relative
  flex
  items-center
`;

const FieldWrapper = tw(BaseFieldWrapper)`
  svg:(
    absolute
    top-0
    right-0
    transform
    translate-y-1/2
    mr-8
    pointer-events-none
    text-text-tertiary
  )

  [textarea + svg]:(
    top-unset
    bottom-0
    transform
    -translate-y-1/2
  )
`;

const LabeledFieldWrapper = tw.div`
  flex flex-col pt-4
  [label.hidden]:(hidden opacity-0 pointer-events-none)
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
      <Label htmlFor={name} className={cn({ hidden: hideLabel })}>
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
    className: cn({ 'with-icon': (iconPath?.length || 0) > 0 }),
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
