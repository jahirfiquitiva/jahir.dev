import type { NextPage } from 'next';
import Head from 'next/head';

import imagesBlurData from '@/blur/about';
import { Layout } from '@/components/elements';
import { About as AboutSection } from '@/sections';

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>About | Jahir Fiquitiva</title>
      </Head>
      <AboutSection blurData={imagesBlurData} />
    </Layout>
  );
};

export default About;
