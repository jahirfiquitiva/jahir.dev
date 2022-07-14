import { useEffect, useState } from 'react';

import { Heading } from '@/components/atoms';
import type { FC } from '@/types';
import { styled, keyframes } from '~/stitches';

const wave = keyframes({
  'from, 50%, to': { transform: 'rotate(0deg)' },
  '10%, 30%': { transform: 'rotate(-10deg)' },
  '20%': { transform: 'rotate(12deg)' },
  '40%': { transform: 'rotate(9deg)' },
});

const WaveSpan = styled('span', {
  display: 'inline-block',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  animationName: wave,
  animationDuration: '2.5s',
  animationIterationCount: 'infinite',
  transformOrigin: '70% 70%',
});

const hellos = [
  'Hello, world',
  'Hola, mundo',
  'Ciao, mondo',
  'Hallo, Welt',
  'Salut, monde',
  'Olá, mundo',
];

export const WavingHello: FC = () => {
  const [hello, setHello] = useState(0);

  useEffect(() => {
    const changeHello = setInterval(() => {
      setHello((helloo) => (helloo >= hellos.length - 1 ? 0 : helloo + 1));
    }, 2500);
    return () => clearInterval(changeHello);
  }, []);

  return (
    <Heading
      as={'span'}
      shadow={'yellow'}
      css={{
        fontSize: '$xl',
        fontWeight: 700,
        useFont: 'manrope',
        color: '$text-primary',
      }}
    >
      <WaveSpan>👋</WaveSpan>
      &nbsp;&nbsp;{hellos[hello]}!
    </Heading>
  );
};
