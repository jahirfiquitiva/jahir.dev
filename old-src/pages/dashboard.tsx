import type { NextPage } from 'next';

import { Layout, Seo } from '@/old/components/molecules';
import { Dashboard as DashboardSection } from '@/old/components/views';
import { buildOgImageUrl } from '@/old/utils/og';

const UnderConstruction: NextPage = () => {
  return (
    <Layout>
      <Seo
        title={'Dashboard – Jahir Fiquitiva'}
        description={
          'Get to know the latest stats and my current top listened tracks on Spotify'
        }
        exactUrl={'https://jahir.dev/dashboard'}
        keywords={[
          'dashboard',
          'stats',
          'statistics',
          'music',
          'top track',
          'spotify',
        ]}
        image={buildOgImageUrl('dashboard', 'Dashboard')}
      />
      <DashboardSection />
    </Layout>
  );
};

export default UnderConstruction;
