import { FC } from 'react';

import { Page } from '~/blocks/page';
import { Card, LinkCard } from '~/new-components/atoms/simple';

const FourHundredFour: FC = () => {
  return (
    <Page
      title={'New components! ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/new'}
    >
      <div className={'flex max-w-3xl mx-auto my-32'}>
        <Card>
          <div className={'p-8'}>
            <p>Hola mundo</p>
          </div>
        </Card>

        <LinkCard href={'/'} title={'Home page'}>
          <div className={'p-8'}>
            <p>Hola mundo</p>
          </div>
        </LinkCard>
      </div>
    </Page>
  );
};

export default FourHundredFour;
