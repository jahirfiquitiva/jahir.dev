import type { GetStaticProps, NextPage } from 'next';

import { Layout, Seo } from '@/components/molecules';
import { Donate as DonateSection } from '@/components/views';
import { useRandomImage } from '@/hooks/useRandomImage';
import type { RandomPageImage } from '@/types';

const Donate: NextPage<{ images: Array<RandomPageImage> }> = (props) => {
  const image = useRandomImage(props.images);
  return (
    <Layout>
      <Seo
        title={'Donate – Jahir Fiquitiva'}
        description={
          // eslint-disable-next-line max-len
          'Support Jahir Fiquitiva. Donate or sponsor him as a recognition for his work on different projects'
        }
        exactUrl={'https://jahir.dev/donate'}
        keywords={[
          'donate',
          'support',
          'sponsor',
          'open-source',
          'supporter',
          'sponsorship',
        ]}
      />
      <DonateSection image={image} />
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
