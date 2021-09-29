import { FC } from 'react';

import { Error } from '~/blocks/error';
import { Page } from '~/blocks/page';

const ErrorPage: FC = () => {
  return (
    <Page title={'Error! ~ Jahir Fiquitiva 💎'}>
      <Error />
    </Page>
  );
};

export default ErrorPage;
