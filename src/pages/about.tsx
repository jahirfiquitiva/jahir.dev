import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useMemo } from 'react';

import imagesBlurData from '@/blur/about';
import { Layout } from '@/components/elements';
import { About as AboutSection } from '@/sections';
import type {
  ImageBlurDataObject,
  RandomPageImage,
} from '@/types';
import { getRandomItem } from '@/utils';

const About: NextPage<{ images: Array<RandomPageImage> }> = (props) => {
  const { images } = props;
  const image = useMemo(() => {
    return getRandomItem(images);
  }, [images]);
  return (
    <Layout>
      <Head>
        <title>About | Jahir Fiquitiva</title>
      </Head>
      <AboutSection image={image} />
    </Layout>
  );
};

export default About;

const imagesAlts: Array<string> = [
  "Visiting Lima, Perú – Oct '19",
  "Visiting Sativa Norte, Boyacá, Colombia – Jan '22",
  "Hiking in my hometown – Mar '20",
  "Hanging out with friends at a cafe – Dec '20",
  "Hanging out with friends in Iza, Boyacá, Colombia – Mar '21",
  "Hanging out with friends in Playa Blanca, Boyacá, Colombia – Jul '21",
  "Hanging out with friends at a cafe – Feb '22",
  "Visiting a small town – Dec '22",
  "Trip to San Andrés – Dec '22",
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
