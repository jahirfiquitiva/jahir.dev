import type { GetStaticProps, NextPage } from 'next';

import imagesBlurData from '@/blur/about';
import { Layout, Seo } from '@/components/molecules';
import { useRandomImage } from '@/hooks/useRandomImage';
import { About as AboutSection } from '@/sections';
import type { ImageBlurDataObject, RandomPageImage } from '@/types';

const About: NextPage<{ images: Array<RandomPageImage> }> = (props) => {
  const image = useRandomImage(props.images);
  return (
    <Layout>
      <Seo
        title={'About – Jahir Fiquitiva'}
        description={'Learn a bit about me, my career and more'}
        exactUrl={'https://jahir.dev/about'}
        keywords={['bio', 'biography', 'information', 'about']}
      />
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
  "Visiting a small town – Dec '21",
  "Trip to San Andrés – Dec '21",
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
