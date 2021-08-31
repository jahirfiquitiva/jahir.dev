import { FC } from 'react';

import { Page } from '~/blocks/page';
import { Button } from '~/elements/button';

const Home: FC = () => {
  return (
    <Page>
      <p>Main site</p>
      <Button>Hola</Button>
    </Page>
  );
};

export default Home;
