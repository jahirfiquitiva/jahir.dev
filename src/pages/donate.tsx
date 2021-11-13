import { FC } from 'react';

import { Page } from '~/new-components/blocks';
import { Donate } from '~/sections/donate';

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
