import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { Reactions } from '@/components/views/mdx/ui/reactions/reactions';
import { Coding } from '@/components/views/uses/coding/coding';
import { ExtensionsGrid } from '@/components/views/uses/extensions';
import { Everyday, GamingPc } from '@/components/views/uses/hardware/hardware';
import { Software } from '@/components/views/uses/software/software';
import { Tabs } from '@/components/views/uses/tabs/tabs';
import { Website } from '@/components/views/uses/website/website';
import { ReactionsProvider } from '@/providers/reactions-provider';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

export default function UsesPage() {
  return (
    <Section id={'uses'} className={'flex-1 gap-24'}>
      <Heading shadow={'brand'} from={'brand'} to={'blue'}>
        What do I use?
      </Heading>
      <ReactionsProvider slug={'blog--uses'}>
        <Reactions />
      </ReactionsProvider>
      <Tabs
        tabsNames={[
          'Everyday',
          'Gaming PC',
          'Software',
          'Browser',
          'Coding',
          'Website',
        ]}
      >
        <Everyday />
        <GamingPc />
        <Software />
        <ExtensionsGrid />
        <Coding />
        <Website />
      </Tabs>
    </Section>
  );
}

export const metadata = getStaticMetadata({
  title: 'Uses – Jahir Fiquitiva',
  description:
    'Get to know the hardware, software and tools I use on a daily basis',
  exactUrl: 'https://jahir.dev/uses',
  keywords: [
    'hardware',
    'software',
    'apps',
    'tools',
    'extensions',
    'stack',
    'website',
    'tech',
    'uses',
  ],
  image: buildOgImageUrl('uses'),
});
