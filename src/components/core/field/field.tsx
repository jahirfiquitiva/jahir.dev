import { type ComponentProps } from 'react';

import { cx } from '@/tw';

import {
  LabeledFieldWrapper,
  FieldWrapper,
  Input,
  FieldIcon,
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
      <label htmlFor={name} className={cx(hideLabel && 'hidden')}>
        {label || otherProps.placeholder}
      </label>
      <FieldWrapper>
        <Input {...otherProps} />
        {iconPath ? (
          <FieldIcon path={iconPath} size={1} className={'fill-tertiary-txt'} />
        ) : null}
      </FieldWrapper>
    </LabeledFieldWrapper>
  );
};
