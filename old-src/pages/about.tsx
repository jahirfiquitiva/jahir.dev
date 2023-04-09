import type { NextPage } from 'next';

import { Layout, Seo } from '@/old/components/molecules';
import { About as AboutSection } from '@/old/components/views';
import { buildOgImageUrl } from '@/old/utils/og';

const About: NextPage = () => {
  return (
    <Layout>
      <Seo
        title={'About – Jahir Fiquitiva'}
        description={'Learn a bit about me, my career and more'}
        exactUrl={'https://jahir.dev/about'}
        keywords={['bio', 'biography', 'information', 'about']}
        image={buildOgImageUrl('about', 'About')}
      />
      <AboutSection />
    </Layout>
  );
};

export default About;
