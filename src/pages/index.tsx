import { FC } from 'react';

import { Page } from '~/new-components/blocks';
import { Home } from '~/new-components/sections';
import { Intro } from '~/sections/home/intro';
import { Projects } from '~/sections/home/projects';
import { Skills } from '~/sections/home/skills';

const HomePage: FC = () => {
  return (
    <Page>
      <Home />
      <Projects />
    </Page>
  );
};

export default HomePage;
