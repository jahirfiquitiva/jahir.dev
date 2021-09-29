import { FC } from 'react';

import { Error } from '~/blocks/error';
import { Page } from '~/blocks/page';

const SentPage: FC = () => {
  return (
    <Page
      title={'Email sent! ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/sent'}
    >
      <Error errorType={'sent'} />
    </Page>
  );
};

export default SentPage;
