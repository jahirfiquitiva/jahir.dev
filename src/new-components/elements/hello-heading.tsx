import { useEffect, useState } from 'react';
import { styled } from 'twin.macro';

import { Heading } from '~/new-components/atoms/simple';
import { Component } from '~/types';

const WaveSpan = styled.span`
  display: inline-block;
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const hellos = [
  'Hello, world',
  'Hola, mundo',
  'Ciao, mondo',
  'Hallo, Welt',
  'Salut, monde',
  'Olá, mundo',
];

export const HelloHeading: Component = () => {
  const [hello, setHello] = useState(0);

  useEffect(() => {
    const changeHello = setInterval(() => {
      setHello((helloo) => (helloo >= hellos.length - 1 ? 0 : helloo + 1));
    }, 2500);
    return () => clearInterval(changeHello);
  }, []);

  return (
    <Heading size={'3'} shadowColor={'yellow'}>
      <WaveSpan>👋</WaveSpan>
      &nbsp;&nbsp;{hellos[hello]}!
    </Heading>
  );
};
