import { Hello } from './hello';
import { Intro } from './intro';
import { Skills } from './skills';

import { Component } from '~/types';

export const Home: Component = () => {
  return (
    <>
      <section id={'about'}>
        <Hello />
        <Intro />
      </section>
      <Skills />
    </>
  );
};
