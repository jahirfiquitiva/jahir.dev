import type { NextPage } from 'next';

import { Layout, Seo } from '@/old/components/molecules';
import { FourOhFour as FourOhFourSection } from '@/old/components/views';
import { buildOgImageUrl } from '@/old/utils/og';

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
