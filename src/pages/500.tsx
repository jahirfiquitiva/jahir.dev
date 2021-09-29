import { FC } from 'react';

import { Error } from '~/blocks/error';
import { Page } from '~/blocks/page';

const ErrorPage: FC = () => {
  return (
    <Page
      title={'Error! ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/500'}
    >
      <Error />
    </Page>
  );
};

export default ErrorPage;
