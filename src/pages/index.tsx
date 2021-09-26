import { FC } from 'react';

import { Intro } from '~/blocks/home/intro';
import { Projects } from '~/blocks/home/projects';
import { Skills } from '~/blocks/home/skills';
import { Page } from '~/blocks/page';

const Home: FC = () => {
  return (
    <Page>
      <Intro />
      <Skills/>
      <Projects />
    </Page>
  );
};

export default Home;
