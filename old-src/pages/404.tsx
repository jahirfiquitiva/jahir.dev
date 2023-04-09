import type { NextPage } from 'next';

import { Layout, Seo } from '@/components/molecules';
import { FourOhFour as FourOhFourSection } from '@/components/views';
import { buildOgImageUrl } from '@/utils/og';

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
        image={buildOgImageUrl('404', 'Page not found')}
      />
      <FourOhFourSection />
    </Layout>
  );
};

export default FourOhFour;
