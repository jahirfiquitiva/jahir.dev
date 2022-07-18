import type { NextPage } from 'next';
import Head from 'next/head';

import { Heading, Link } from '@/components/atoms';
import { Layout, Section } from '@/components/elements';
import { InspirationGrid } from '@/sections';

const Inspiration: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Inspiration | Jahir Fiquitiva</title>
      </Head>
      <InspirationGrid />
    </Layout>
  );
};

export default Inspiration;
