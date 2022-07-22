import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/molecules';
import { Dashboard as DashboardSection } from '@/sections';

const UnderConstruction: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardSection />
    </Layout>
  );
};

export default UnderConstruction;
