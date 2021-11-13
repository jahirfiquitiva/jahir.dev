import { FC } from 'react';

import { Page } from '~/new-components/blocks';
import { Dashboard } from '~/sections/dashboard';

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
