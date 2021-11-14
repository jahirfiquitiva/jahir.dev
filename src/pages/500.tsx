import { FC } from 'react';

import { Page, Error } from '~/components/blocks';

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
