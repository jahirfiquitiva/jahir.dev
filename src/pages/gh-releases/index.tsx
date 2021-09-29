import { FC } from 'react';

import { Error } from '~/blocks/error';
import { Page } from '~/blocks/page';

const FourHundredFour: FC = () => {
  return (
    <Page title={'Not found! ~ Jahir Fiquitiva 💎'}>
      <Error errorType={'four-hundred-four'} />
    </Page>
  );
};

export default FourHundredFour;
