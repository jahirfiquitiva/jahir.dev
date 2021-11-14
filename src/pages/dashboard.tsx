import { FC } from 'react';

import { Page } from '~/components/blocks';
import { Dashboard } from '~/components/sections';

const DashboardPage: FC = () => {
  return (
    <Page
      title={'Dashboard ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/dashboard'}
    >
      <Dashboard />
    </Page>
  );
};

export default DashboardPage;
