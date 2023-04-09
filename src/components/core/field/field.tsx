import Icon from '@mdi/react';
import { type ComponentProps } from 'react';

import { cx } from '@/tw';

import {
  LabeledFieldWrapper,
  Label,
  FieldWrapper,
  Input,
} from './field.styles';

interface FieldProps extends ComponentProps<'input'> {
  name: string;
  label: string;
  iconPath?: string;
  hideLabel?: boolean;
}

export const Field = (props: FieldProps) => {
  const { name, label, iconPath, hideLabel, ...otherProps } = props;

  return (
    <LabeledFieldWrapper>
      <Label htmlFor={name} className={cx(hideLabel && 'hidden')}>
        {label || otherProps.placeholder}
      </Label>
      <FieldWrapper>
        <Input {...otherProps} />
        {iconPath ? <Icon path={iconPath} size={1} /> : null}
      </FieldWrapper>
    </LabeledFieldWrapper>
  );
};
