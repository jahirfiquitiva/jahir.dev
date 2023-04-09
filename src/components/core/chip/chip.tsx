import { cx } from 'classix';

import type { ComponentProps } from '@/tw';

import { Chip, imageChipClasses } from './chip.styles';

export const ImageChip = (props: ComponentProps<'span'>) => (
  <Chip {...props} className={cx(imageChipClasses, props.className)} />
);
