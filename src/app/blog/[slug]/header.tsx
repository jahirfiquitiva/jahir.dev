import type { CSSProperties } from 'react';

import { Heading } from '@/components/core/heading';
import { getReadableColor, hexToRgb } from '@/utils/color';

interface HeaderProps {
  title: string;
  color?: string;
}

export const Header = (props: HeaderProps) => {
  const { title, color } = props;
  const readableColor = getReadableColor(color, true);
  const shadowColor = hexToRgb(readableColor, 0.56);

  return (
    <Heading
      className={'dark:text-[var(--text-color)]'}
      style={
        {
          '--text-color': readableColor || 'var(--color-primary-txt)',
          '--text-shadow-color': shadowColor || 'var(--color-shadow-brand)',
        } as CSSProperties
      }
    >
      {title}
    </Heading>
  );
};
