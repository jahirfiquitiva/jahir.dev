import Head from 'next/head';

import { Layout } from '@/components/elements';
import { About as AboutSection } from '@/sections';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <AboutSection />
    </Layout>
  );
}
