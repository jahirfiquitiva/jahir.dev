import { useEffect, useState } from 'react';

import { Heading } from '@/components/core';
import type { FC } from '@/types';

import { WaveSpan } from './intro.styles';

const hellos = ['Hello,', 'Hola,', 'Ciao,', 'Hallo,', 'Salut,', 'Olá,'];
const worlds = ['world', 'mundo', 'mondo', 'Welt', 'monde', 'mundo'];

interface WavingHelloProps {
  countryName?: string;
  countryEmoji?: string;
}

export const WavingHello: FC<WavingHelloProps> = (props) => {
  const { countryName, countryEmoji } = props;
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
      <WaveSpan role={'img'} aria-label={'waving hand'}>
        👋
      </WaveSpan>
      &nbsp;&nbsp;{hellos[hello]} {countryName || worlds[hello]}!
      {countryEmoji ? (
        <>
          {' '}
          <span role={'img'} aria-label={`${countryName} flag`}>
            {countryEmoji}
          </span>
        </>
      ) : null}
    </Heading>
  );
};
