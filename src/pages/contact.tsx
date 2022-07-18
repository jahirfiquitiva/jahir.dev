import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useMemo } from 'react';

import imagesBlurData from '@/blur/contact';
import { Layout } from '@/components/elements';
import { Contact as ContactSection } from '@/sections';
import type { ImageBlurDataObject, RandomPageImage } from '@/types';
import { getRandomItem } from '@/utils';

const Contact: NextPage<{ images: Array<RandomPageImage> }> = (props) => {
  const { images } = props;
  const image = useMemo(() => {
    return getRandomItem(images);
  }, [images]);
  return (
    <Layout>
      <Head>
        <title>Contact | Jahir Fiquitiva</title>
      </Head>
      <ContactSection image={image} />
    </Layout>
  );
};

export default Contact;

const imagesAlts: Array<string> = [
  'Person within a box',
  'Person dancing',
  'Person meditating',
  'Person sitting on the floor',
  'Person reading a book',
  'Person listening to music',
  'Person walking',
  'Person walking like a zombie',
  'Person taking a selfie with a t-shirt that says hi',
];

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      images: Object.keys(imagesBlurData as ImageBlurDataObject).map((key) => ({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...(imagesBlurData[key] || {}),
        alt: imagesAlts[+key],
      })),
    },
  };
};
