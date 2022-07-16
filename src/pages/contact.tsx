import Head from 'next/head';

import { Contact as ContactSection } from '@/sections';

import { type NextPageWithLayout } from './_app';

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contact | Jahir Fiquitiva</title>
      </Head>
      <ContactSection />
    </>
  );
};

export default Contact;
