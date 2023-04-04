import Icon from '@mdi/react';
import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from 'react';

import type { FC } from '@/types';

import { LabeledFieldWrapper, Label, FieldWrapper, Input } from './field.styles';

interface FieldProps {
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

export const Field: FC<FieldProps> = (props) => {
  const {
    name,
    placeholder,
    label,
    iconPath,
    hideLabel = !placeholder && !label,
    className,
    style,
    css,
    onChange,
  } = props;

  const inputProps = {
    name,
    placeholder,
    disabled: props.disabled,
    required: props.required,
    value: props.value,
    onChange: (e: { target: HTMLInputElement | HTMLTextAreaElement }) => {
      if (onChange) onChange(e.target.value);
    },
  };

  return (
    <LabeledFieldWrapper className={className} style={style} css={css}>
      <Label htmlFor={name} hidden={hideLabel}>
        {label || placeholder}
      </Label>
      <FieldWrapper>
        <Input withIcon={!!iconPath} {...inputProps} />
        {iconPath && <Icon path={iconPath} size={1} />}
      </FieldWrapper>
    </LabeledFieldWrapper>
  );
};
