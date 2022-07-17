import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/elements';
import { About as AboutSection } from '@/sections';

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>About | Jahir Fiquitiva</title>
      </Head>
      <AboutSection />
    </Layout>
  );
};

export default About;
