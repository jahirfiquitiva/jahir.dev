import { FC } from 'react';

import { Page } from '~/blocks/page';
import { Error } from '~/new-components/blocks';

const ErrorPage: FC = () => {
  return (
    <Page title={'Error! ~ Jahir Fiquitiva 💎'}>
      <Error />
    </Page>
  );
};

export default ErrorPage;
