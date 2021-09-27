import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { Dispatch, SetStateAction } from 'react';

import { Component, ComponentProps } from '~/elements/fc';

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 0.4rem;

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
  value?: string;
  onChange?: (newValue: string) => void | Dispatch<SetStateAction<string>>;
}

export const Input: Component<InputProps> = (props) => {
  const {
    type = 'text',
    name,
    placeholder,
    label,
    iconPath,
    hideLabel = !placeholder && !label,
    value,
    onChange,
  } = props;

  return (
    <LabelInputWrapper>
      <label htmlFor={name} className={hideLabel ? 'hidden' : undefined}>
        {label || placeholder}
      </label>
      <InputWrapper>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={iconPath ? 'with-icon' : undefined}
          value={value}
          onChange={(e) => {
            if (onChange) onChange(e.target.value);
          }}
        />
        {iconPath && <Icon path={iconPath} size={1} />}
      </InputWrapper>
    </LabelInputWrapper>
  );
};
