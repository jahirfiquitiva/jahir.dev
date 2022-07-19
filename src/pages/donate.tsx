import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { Heading, Img, Link } from '@/components/atoms';
import { OpenDoodle } from '@/components/compounds';
import { Layout, Section } from '@/components/elements';
import type { RandomPageImage } from '@/types';

const Donate: NextPage<{ images: Array<RandomPageImage> }> = (props) => {
  return (
    <Layout>
      <Head>
        <title>Donate</title>
      </Head>
      <Section id={'donate'} centered>
        {(props.images || []).map((img) => {
          return (
            <OpenDoodle
              key={img.key}
              src={`/static/images/donate/${img.key}.png`}
              alt={img.alt}
              flip={img.key < 3}
            />
          );
        })}
      </Section>
    </Layout>
  );
};

export default Donate;

const imagesAlts: Array<string> = [
  'Person taking a selfie with a t-shirt that says hi',
  'Person laying on the floor and checking their phone',
  'Person reading a book',
  'Person walking like a zombie',
];

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      images: imagesAlts.map((alt, key) => ({
        key,
        alt,
        width: 384,
        height: 384,
      })),
    },
  };
};
