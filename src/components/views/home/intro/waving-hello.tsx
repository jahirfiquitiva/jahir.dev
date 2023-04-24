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

const greetings = {
  en: 'Hello, world',
  es: 'Hola, mundo',
  it: 'Ciao, mondo',
  de: 'Hallo, Welt',
  fr: 'Salut, monde',
  pt: 'Olá, mundo',
};

const allGreetings = Object.keys(greetings).map(
  (key) => greetings[key as keyof typeof greetings],
);

const getHelloForCountry = (
  country?: string | null,
  lang?: string | null,
): string | null => {
  if (!country || !lang) return null;
  try {
    const hello = greetings[lang as keyof typeof greetings];
    if (!hello) return null;
    return `${hello.substring(0, hello.indexOf(',') + 1)} ${country}`;
  } catch (e) {
    console.error({ country, lang });
    return null;
  }
};

interface WavingHelloProps {
  country?: string | null;
  lang?: string | null;
  emoji?: string | null;
}

export const WavingHello = (props: WavingHelloProps) => {
  const { country, lang, emoji } = props;
  const countryHello = getHelloForCountry(country, lang);
  const [hello, setHello] = useState(0);

  useEffect(() => {
    if (countryHello) return;
    const changeHello = setInterval(() => {
      setHello((helloo) =>
        helloo >= allGreetings.length - 1 ? 0 : helloo + 1,
      );
    }, 2500);
    return () => clearInterval(changeHello);
  }, [countryHello]);

  return (
    <Heading
      shadow={'yellow'}
      // look like h2
      className={'text-2xl'}
    >
      <WavingSpan role={'img'} aria-label={'waving hand'}>
        👋
      </WavingSpan>
      &nbsp;&nbsp;{countryHello || allGreetings[hello]}&nbsp;
      <span
        className={'text-secondary-txt'}
        role={'img'}
        aria-label={country ? `flag for country: "${country}"` : 'world map'}
      >
        {emoji || '🗺️'}
      </span>
      !
    </Heading>
  );
};
