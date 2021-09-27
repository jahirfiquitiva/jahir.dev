import { FC } from 'react';

import { Error } from '~/blocks/error';
import { Page } from '~/blocks/page';

const FourHundredFour: FC = () => {
  return (
    <Page title={'Not found! ~ Jahir Fiquitiva 💎'}>
      <Error isFourHundredFour />
    </Page>
  );
};

export default FourHundredFour;
