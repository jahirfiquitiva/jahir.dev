'use client';

import { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';

import { Heading } from '@/components/core/heading';

const WavingSpan = tw.span`
  inline-block
  text-primary-txt
  motion-safe:animate-wave
  motion-safe:origin-waving
`;

const greetings = [
  'Hello, world',
  'Hola, mundo',
  'Ciao, mondo',
  'Hallo, Welt',
  'Salut, monde',
  'Olá, mundo',
];

const getHelloWithCountry = (
  helloIndex: number,
  country?: string | null,
): string => {
  const hello = greetings[helloIndex];
  if (!country) return hello;
  return `${hello.substring(0, hello.indexOf(',') + 1)} ${country}`;
};

export const WavingHello = (props: { country?: string | null }) => {
  const { country } = props;
  const [hello, setHello] = useState(0);

  useEffect(() => {
    const changeHello = setInterval(() => {
      setHello((helloo) => (helloo >= greetings.length - 1 ? 0 : helloo + 1));
    }, 2500);
    return () => clearInterval(changeHello);
  }, []);

  return (
    <Heading
      shadow={'yellow'}
      // look like h2
      className={'text-2xl'}
    >
      <WavingSpan role={'img'} aria-label={'waving hand'}>
        👋
      </WavingSpan>
      &nbsp;&nbsp;{getHelloWithCountry(hello, country)}!
    </Heading>
  );
};
