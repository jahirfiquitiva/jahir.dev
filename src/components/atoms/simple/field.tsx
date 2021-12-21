import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Icon from '@mdi/react';
import cn from 'classnames';
import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from 'react';

import { Component, ComponentProps } from '~/types';

const baseFieldStyles = css`
  background-color: rgba(0, 0, 0, 0);
  color: var(--text-primary);
  border: 1px solid var(--divider);
  border-radius: 6px;
  min-height: 48px;
  padding: 0.4rem 0.8rem;
  flex: 1;

  &:hover {
    border-color: var(--accent-light);
  }

  &:focus {
    outline: 2px solid var(--accent);
    outline-offset: 0;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

const Label = styled.label`
  margin-top: 1rem;
  margin-bottom: 0.4rem;
  font-weight: 500;
`;

const Input = styled.input`
  ${baseFieldStyles}
  &.with-icon {
    padding-right: 2.8rem;
  }
`;

const TextArea = styled.textarea`
  ${baseFieldStyles}
  padding-top: 1rem;
  padding-bottom: 1rem;
  resize: vertical;
  height: 100%;
  min-height: 96px;
  max-height: 192px;
  &.with-icon {
    padding-right: 2.8rem;
    padding-bottom: 2.8rem;
  }
`;

const BaseFieldWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const FieldWrapper = styled(BaseFieldWrapper)`
  & svg {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(50%);
    margin-right: 0.8rem;
    pointer-events: none;
    color: var(--text-tertiary);
  }

  & textarea + svg {
    top: unset;
    bottom: 0;
    transform: translateY(-50%);
  }
`;

const LabeledFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.8rem;

  & label.hidden {
    display: none;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
`;

const ErrorText = styled.small`
  opacity: 1;
  margin-top: 0.4rem;
  color: var(--gradient-red);
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
