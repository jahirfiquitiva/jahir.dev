import { FC } from 'react';

import { Page } from '~/blocks/page';
import { FourHundredFour } from '~/new-components/blocks';

const FourHundredFourPage: FC = () => {
  return (
    <Page
      title={'Not found! ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/404'}
    >
      <FourHundredFour />
    </Page>
  );
};

export default FourHundredFourPage;
