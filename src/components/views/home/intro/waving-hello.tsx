import { useEffect, useState } from 'react';

import { Heading } from '@/components/core';
import type { FC } from '@/types';

import { WaveSpan } from './intro.styles';

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
      shadow={'yellow'}
      css={{
        color: '$text-primary',
        // look like h2
        fontSize: '$2xl',
      }}
    >
      <WaveSpan>👋</WaveSpan>
      &nbsp;&nbsp;{hellos[hello]}!
    </Heading>
  );
};
