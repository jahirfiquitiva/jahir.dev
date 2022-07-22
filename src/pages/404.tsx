import type { NextPage } from 'next';

import { Layout, Seo } from '@/components/molecules';
import { FourOhFour as FourOhFourSection } from '@/sections';

const FourOhFour: NextPage = () => {
  return (
    <Layout>
      <Seo
        title={'Page not found – Jahir Fiquitiva'}
        description={
          "The page you're looking for doesn't exist or has been moved."
        }
        exactUrl={'https://jahir.dev/404'}
        keywords={['404', 'not found', 'page not found']}
      />
      <FourOhFourSection />
    </Layout>
  );
};

export default FourOhFour;
