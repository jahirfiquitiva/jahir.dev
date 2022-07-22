import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/molecules';
import { FourOhFour as FourOhFourSection } from '@/sections';

const GitHubRelease: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Site not found</title>
      </Head>
      <FourOhFourSection />
    </Layout>
  );
};

export default GitHubRelease;
