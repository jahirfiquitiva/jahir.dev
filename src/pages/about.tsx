import type { NextPage } from 'next';

import { Layout, Seo } from '@/components/molecules';
import { About as AboutSection } from '@/components/views';

const About: NextPage = () => {
  return (
    <Layout>
      <Seo
        title={'About – Jahir Fiquitiva'}
        description={'Learn a bit about me, my career and more'}
        exactUrl={'https://jahir.dev/about'}
        keywords={['bio', 'biography', 'information', 'about']}
      />
      <AboutSection />
    </Layout>
  );
};

export default About;
