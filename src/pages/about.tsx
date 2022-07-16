import Head from 'next/head';

import { About as AboutSection } from '@/sections';

import { type NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About | Jahir Fiquitiva</title>
      </Head>
      <AboutSection />
    </>
  );
};

export default About;
