import { FC } from 'react';

import { Page } from '~/blocks/page';
import { Toolbar } from '~/new-components/elements/toolbar';
import { Intro } from '~/sections/home/intro';
import { Projects } from '~/sections/home/projects';
import { Skills } from '~/sections/home/skills';

const Home: FC = () => {
  return (
    <Page>
      <Intro />
      <Toolbar />
      <Skills />
      <Projects />
    </Page>
  );
};

export default Home;
