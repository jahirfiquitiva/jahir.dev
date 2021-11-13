import { Hello } from './hello';
import { Intro } from './intro';
import { Skills } from './skills';

export const Home = () => {
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
