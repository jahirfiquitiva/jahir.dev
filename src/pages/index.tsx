import { FC } from 'react';

import { Page } from '~/blocks/page';
import { Intro } from '~/sections/home/intro';
import { Projects } from '~/sections/home/projects';
import { Skills } from '~/sections/home/skills';

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
