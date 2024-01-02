import { Logo } from '@/components/atoms/logo';

import type { PathName } from './logo-title';

const defaultFontSize = 36;
export const Name = (props: { path?: PathName; fontSize?: number }) => {
  const { path, fontSize = defaultFontSize } = props;
  if (!path) return null;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontSize,
      }}
    >
      <Logo
        style={{
          width: fontSize,
          height: fontSize,
          filter: 'saturate(1.5)',
          color: '#88a4e6',
          fill: '#88a4e6',
        }}
      />
      <p
        style={{
          alignSelf: 'flex-start',
          fontWeight: 700,
          color: 'rgba(0, 0, 0, 0)',
          backgroundImage: 'linear-gradient(to right, #88a4e6, #38bdf8)',
          backgroundClip: 'text',
          filter: 'saturate(1.5)',
        }}
      >
        Jahir Fiquitiva
      </p>
    </div>
  );
};
