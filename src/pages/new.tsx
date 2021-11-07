import { mdiSatelliteVariant } from '@mdi/js';
import Icon from '@mdi/react';
import { FC } from 'react';

import { Error } from '~/blocks/error';
import { Page } from '~/blocks/page';
import { Button as OldButton } from '~/elements/simple/button';
import Button from '~/new-components/elements/simple/button';
import Link from '~/new-components/elements/simple/link';

const FourHundredFour: FC = () => {
  return (
    <Page
      title={'Not found! ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/404'}
    >
      <div className={'flex max-w-3xl mx-auto my-32'}>
        <Button>Hola mundo</Button>
        <Button>
          <Icon path={mdiSatelliteVariant} size={1} />
          <span>Hola mundo</span>
        </Button>
        <Link href={'/'}>Home page</Link>
      </div>
    </Page>
  );
};

export default FourHundredFour;
