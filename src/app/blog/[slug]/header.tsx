import type { CSSProperties } from 'react';

import { Heading } from '@/components/core/heading';
import { Link } from '@/components/core/link';
import { getReadableColor } from '@/utils/color/get-readable-color';
import { hexToRGB } from '@/utils/color/hex-to-rgb';

interface HeaderProps {
  title: string;
  color?: string;
}

const Header = (props: HeaderProps) => {
  const { title, color } = props;
  const shadowColor = color ? hexToRGB(color, 0.36) : null;
  const readableColor = getReadableColor(color, true);

  return (
    <>
      <Link
        href={'/blog'}
        title={'Navigate back to blog posts list page'}
        className={'inline-flex items-end gap-8 leading-none py-4'}
      >
        <span className={'font-manrope font-bold mb-1'}>{'<-'}</span>
        <span>Back to blog posts</span>
      </Link>
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
    </>
  );
};

export default Header;
