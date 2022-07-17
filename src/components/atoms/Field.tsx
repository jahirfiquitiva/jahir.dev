import Icon from '@mdi/react';
import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from 'react';

import type { FC } from '@/types';
import { styled } from '~/stitches';

const LabeledFieldWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const FieldWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translateY(50%)',
    mr: '$12',
    pointerEvents: 'none',
    color: '$text-tertiary',
  },
});

const Label = styled('label', {
  mt: '$16',
  mb: '$6',
  fontWeight: 500,
  variants: {
    hidden: {
      true: {
        hidden: true,
      },
    },
  },
});

const Input = styled('input', {
  backgroundColor: '$transparent',
  color: '$text-primary',
  border: '1px solid $divider',
  borderRadius: '$space$6',
  minHeight: 48,
  py: '.4rem',
  px: '.8rem',
  flex: 1,
  hocus: {
    borderColor: '$accent-light',
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  variants: {
    withIcon: {
      true: {
        pr: '2.8rem',
      },
    },
  },
});

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
