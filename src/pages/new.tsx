import { mdiSatelliteVariant } from '@mdi/js';
import { FC } from 'react';

import { Page } from '~/blocks/page';
import Button from '~/new-components/atoms/simple/button';
import Link from '~/new-components/atoms/simple/link';
import LinkButton from '~/new-components/atoms/simple/link-button';

const FourHundredFour: FC = () => {
  return (
    <Page
      title={'New components! ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/new'}
    >
      <div className={'flex max-w-3xl mx-auto my-32'}>
        <Button title={'Hola mundo btn'}>Hola mundo</Button>
        <Button title={'hola mundo butn 2'} icon={mdiSatelliteVariant}>
          <span>Hola mundo</span>
        </Button>

        <LinkButton href={'/dashboard'} icon={mdiSatelliteVariant}>
          <span>Hola mundo</span>
        </LinkButton>
        <Link href={'/'}>Home page</Link>
      </div>
    </Page>
  );
};

export default FourHundredFour;
