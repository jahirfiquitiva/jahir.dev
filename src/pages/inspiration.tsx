import type { NextPage } from 'next';

import { Layout, Seo } from '@/components/molecules';
import { Inspiration as InspirationSection } from '@/sections';

const Inspiration: NextPage = () => {
  return (
    <Layout>
      <Seo
        title={'Inspiration – Jahir Fiquitiva'}
        description={'People I admire or sites I like'}
        exactUrl={'https://jahir.dev/inspiration'}
        keywords={[
          'inspiration',
          'admire',
          'websites',
          'people',
          'help',
          'creative',
        ]}
      />
      <InspirationSection />
    </Layout>
  );
};

export default Inspiration;
