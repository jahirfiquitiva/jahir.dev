import { FC } from 'react';

import { Intro } from '~/blocks/home/intro';
import { Projects } from '~/blocks/home/projects';
import { Page } from '~/blocks/page';
import { Divider } from '~/elements/divider';

const Home: FC = () => {
  return (
    <Page>
      <Intro />
      <Divider gradientColor={'brand-to-blue'} />
      <Projects />
    </Page>
  );
};

export default Home;
