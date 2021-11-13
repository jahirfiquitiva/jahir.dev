import { FC } from 'react';

import { Page } from '~/blocks/page';
import { UnderConstruction } from '~/new-components/blocks';

const SentPage: FC = () => {
  return (
    <Page
      title={'Under Construction! ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/soon'}
    >
      <UnderConstruction />
    </Page>
  );
};

export default SentPage;
