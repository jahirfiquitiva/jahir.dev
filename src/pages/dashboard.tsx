import { Page } from '~/components/blocks';
import { Dashboard } from '~/components/sections';
import { Component } from '~/types';

const DashboardPage: Component = () => {
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
