import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/elements';
import { Inspiration as InspirationSection } from '@/sections';

const Inspiration: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Inspiration | Jahir Fiquitiva</title>
      </Head>
      <InspirationSection />
    </Layout>
  );
};

export default Inspiration;
