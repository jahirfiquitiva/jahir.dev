import { FC } from 'react';

import { Page } from '~/components/blocks';
import { Donate } from '~/components/sections';

const DonatePage: FC = () => {
  return (
    <Page
      title={'Donate ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/donate'}
    >
      <Donate />
    </Page>
  );
};

export default DonatePage;
