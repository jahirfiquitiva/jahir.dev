import { FC } from 'react';

import { Page } from '~/blocks/page';
import { Error } from '~/new-components/blocks';

const ErrorPage: FC = () => {
  return (
    <Page
      title={'Error! ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/error'}
    >
      <Error />
    </Page>
  );
};

export default ErrorPage;
