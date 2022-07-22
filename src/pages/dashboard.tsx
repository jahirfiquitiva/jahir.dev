import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/elements';
import { UnderConstruction as UnderConstructionSection } from '@/sections';

const UnderConstruction: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <UnderConstructionSection />
    </Layout>
  );
};

export default UnderConstruction;
