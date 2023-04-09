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
        heroMeta: {
          size: {
            width: 2098,
            height: 1584,
          },
          blur64:
            // eslint-disable-next-line max-len
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAIAAACJ2loDAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nAFNAbL+AOPbw+nhzvbx4//46Ozp28C+zZyd0aqnwOTezP/45v/77fPs3ADl28To3szz7t/+/Ovf3NMwL4kvG68jC62vmqP/8s369Ofv6twA6N7G69/M9fDk//3t3N3cVFaHXFGUSUaBtqqT3s+u+/Ti7+zjAO7kyOXYw9zSxcKyl7a6uYWUoIyUlJyci6mjkIN8a+vbxO3n3gCvrJyAgYJ9foBubWuKjJGGh46BgoaQjpCMiodVVEp8dWrBrJMAWmNuQkpWMjhCOztCfXyHiZKhlKi/laS8oq7EUldiLTI1iHdgAE9WYCs3QiQpNhkYIEcoJzAlMwEaOSUlN107Ph8YGwACCTglHwB5YFtoTEtQOz8vHSE1OVERM1wPL1YbO2EyM0sXBwQAAAh/RicAxXdiyXFUml5PglNGXWyQTmWJVmmFX3aSV2N7YzYbajEO2Xc3JAysiOLwk9QAAAAASUVORK5CYII=',
        },
      }}
    >
      <Uses />
    </MdxContent>
  </Layout>
);

export default UsesPage;
