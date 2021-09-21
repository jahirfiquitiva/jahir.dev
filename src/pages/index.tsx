import { FC } from 'react';

import { Intro } from '~/blocks/home/intro';
import { Projects } from '~/blocks/home/projects';
import { Page } from '~/blocks/page';

const Home: FC = () => {
  return (
    <Page>
      <Intro />
      <Projects />
    </Page>
  );
};

export default Home;
