import type { NextPage } from 'next';
import Head from 'next/head';

import imagesBlurData from '@/blur/contact';
import { Layout } from '@/components/elements';
import { Contact as ContactSection } from '@/sections';

const Contact: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact | Jahir Fiquitiva</title>
      </Head>
      <ContactSection blurData={imagesBlurData} />
    </Layout>
  );
};

export default Contact;
