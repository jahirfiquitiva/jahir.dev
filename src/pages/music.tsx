import { FC } from 'react';

import { Page } from '~/blocks/page';
import { Music } from '~/sections/music';

const MusicPage: FC = () => {
  return (
    <Page
      title={'Music ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/music'}
    >
      <Music />
    </Page>
  );
};

export default MusicPage;
