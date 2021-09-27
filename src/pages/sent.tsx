import { FC } from 'react';

import { Error } from '~/blocks/error';
import { Page } from '~/blocks/page';

const FourHundredFour: FC = () => {
  return (
    <Page title={'Email sent! ~ Jahir Fiquitiva 💎'}>
      <Error errorType={'sent'} />
    </Page>
  );
};

export default FourHundredFour;
