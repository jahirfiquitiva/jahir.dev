import { FC } from 'react';

import { allInspirationItems } from '.contentlayer/data';
import { Page } from '~/blocks/page';
import { Inspiration, InspirationProps } from '~/sections/inspiration';

const InspirationPage: FC<InspirationProps> = () => {
  return (
    <Page
      title={'Inspiration ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/inspiration'}
    >
      <Inspiration inspirationItems={allInspirationItems} />
    </Page>
  );
};

export default InspirationPage;
