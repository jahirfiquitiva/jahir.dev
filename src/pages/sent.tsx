import { FC } from 'react';

import { Page, Sent } from '~/new-components/blocks';

const SentPage: FC = () => {
  return (
    <Page
      title={'Email sent! ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/sent'}
    >
      <Sent />
    </Page>
  );
};

export default SentPage;
