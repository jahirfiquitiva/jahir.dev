import Head from 'next/head';

import { About as AboutSection } from '@/sections';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Jahir Fiquitiva</title>
      </Head>
      <AboutSection />
    </>
  );
}
