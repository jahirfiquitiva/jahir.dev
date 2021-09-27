import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { Dispatch, SetStateAction } from 'react';

import { Component, ComponentProps } from '~/elements/base/fc';

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 0.4rem;

  & textarea,
  & input {
    flex: 1;
    padding: 0.4rem 0.6rem;

    &.with-icon {
      padding-right: 2.8rem;
    }

    &:focus {
      outline-color: var(--accent);
      outline-width: 1px;
      border: 1px solid var(--accent);
    }
  }

  & textarea {
    min-height: 64px;
    padding: 1rem 0.8rem;

    &.with-icon {
      padding-right: 0.8rem;
      padding-bottom: 2.8rem;
    }
  }

  & svg {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(50%);
    margin-right: 0.8rem;
    pointer-events: none;
    user-select: none;
    color: var(--text-tertiary);
  }

  & textarea + svg {
    top: unset;
    bottom: 0;
    transform: translateY(-50%);
  }
`;

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

interface InputProps extends ComponentProps {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  iconPath?: string;
  hideLabel?: boolean;
  disabled?: boolean;
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
    children,
  } = props;

  return (
    <LabelInputWrapper>
      <label htmlFor={name} className={hideLabel ? 'hidden' : undefined}>
        {label || placeholder}
      </label>
      <InputWrapper>
        {children}
        {iconPath && <Icon path={iconPath} size={1} />}
      </InputWrapper>
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
