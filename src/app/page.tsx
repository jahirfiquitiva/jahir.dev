
import Icon from '@mdi/react';

import { Button } from '@/components/core/button';
import { Link } from '@/components/core/link';
import { mdiAccountCircleOutline } from 'old-src/components/icons';

export default function Home() {
  return (
    <main
      className={'flex min-h-screen flex-col items-center justify-between p-24'}
    >
      <Button title={'test'}>Hola button</Button>
      <Button title={'test'}>
        <Icon path={mdiAccountCircleOutline} size={2} />
      </Button>
      <Button title={'test'} outlined>
        Outlined Button
      </Button>
      <Button title={'test'} className={'rounded-full'}>
        Custom Button
      </Button>
      <Link href={'#test'}>Test</Link>
    </main>
  );
}
