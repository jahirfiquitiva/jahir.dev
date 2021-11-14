import { FC } from 'react';

import { allInspirationItems } from '.contentlayer/data';
import { Page } from '~/new-components/blocks';
import { Inspiration, InspirationProps } from '~/new-components/sections';

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
