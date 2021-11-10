import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { Dispatch, SetStateAction } from 'react';

import { Component, ComponentProps } from '~/types';

const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.4rem;

  & label.hidden {
    display: none;
    opacity: 0;
    pointer-events: none;
  }
`;

const Error = styled.p`
  opacity: 1;
  margin-top: 0.4rem;
  color: var(--error-color);
  font-size: var(--font-size-xxs);
`;

interface InputProps extends ComponentProps {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  iconPath?: string;
  hideLabel?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (newValue: string) => void | Dispatch<SetStateAction<string>>;
}

const FieldWrapper: Component<InputProps> = (props) => {
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
    <LabelInputWrapper className={className}>
      <label htmlFor={name} className={hideLabel ? 'hidden' : undefined}>
        {label || placeholder}
      </label>
      <InputWrapper>
        {children}
        {iconPath && <Icon path={iconPath} size={1} />}
      </InputWrapper>
      {error && <Error>!! {error}</Error>}
    </LabelInputWrapper>
  );
};

const Input: Component<InputProps> = (props) => {
  const {
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

  return (
    <FieldWrapper iconPath={iconPath} name={name} {...otherProps}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={iconPath ? 'with-icon' : undefined}
        disabled={disabled}
        required={required}
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
      />
    </FieldWrapper>
  );
};

const TextArea: Component<Omit<InputProps, 'type'>> = (props) => {
  const {
    name,
    placeholder,
    iconPath,
    disabled,
    required,
    value,
    onChange,
    ...otherProps
  } = props;

  return (
    <FieldWrapper iconPath={iconPath} name={name} {...otherProps}>
      <textarea
        name={name}
        placeholder={placeholder}
        className={iconPath ? 'with-icon' : undefined}
        disabled={disabled}
        required={required}
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
      />
    </FieldWrapper>
  );
};

interface FieldProps extends InputProps {
  tag: 'input' | 'textarea';
}

export const Field: Component<FieldProps> = (props) => {
  const { tag, ...otherProps } = props;
  if (tag === 'input') return <Input {...otherProps} />;
  if (tag === 'textarea') return <TextArea {...otherProps} />;
  return null;
};
