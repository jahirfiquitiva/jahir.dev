import type { NextPage } from 'next';

import { MdxContent } from '@/components/mdx';
import { Layout, Seo } from '@/components/molecules';
import { Uses } from '@/components/views';
import { buildOgImageUrl } from '@/utils/og';

const usesPageKeywords = [
  'hardware',
  'software',
  'apps',
  'tools',
  'extensions',
  'stack',
  'website',
  'tech',
  'uses',
];

const UsesPage: NextPage = () => (
  <Layout>
    <Seo
      title={'Uses – Jahir Fiquitiva'}
      description={
        'Get to know the hardware, software and tools I use on a daily basis'
      }
      exactUrl={'https://jahir.dev/uses'}
      keywords={usesPageKeywords}
      image={buildOgImageUrl('uses', 'Uses')}
    />
    <MdxContent
      content={{
        title: 'What do I use?',
        hero: '/static/images/uses/setup-2022.jpeg',
        slug: 'uses',
        date: '',
        fullHeightHero: true,
      }}
    >
      <Uses />
    </MdxContent>
  </Layout>
);

export default UsesPage;
