import { cx } from 'classix';

import type { ComponentProps } from '@/tw';

import { chipClasses, chipGroupClasses, imageChipClasses } from './chip.styles';

export const Chip = (props: ComponentProps<'span'>) => (
  <span {...props} className={cx(chipClasses, props.className)} />
);

export const ImageChip = (props: ComponentProps<'span'>) => (
  <span
    {...props}
    className={cx(chipClasses, imageChipClasses, props.className)}
  />
);

export const ChipGroup = (props: ComponentProps<'ul'>) => (
  <ul {...props} className={cx(chipGroupClasses, props.className)} />
);
