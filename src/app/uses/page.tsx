// import { Heading } from '@/components/core/heading';
// import { Section } from '@/components/core/section';
// import { Coding } from '@/components/views/uses/coding/coding';
// import { ExtensionsGrid } from '@/components/views/uses/extensions';
// import { Everyday, GamingPc } from '@/components/views/uses/hardware/hardware';
// import { Software } from '@/components/views/uses/software/software';
// import { Tabs } from '@/components/views/uses/tabs/tabs';
// import { Website } from '@/components/views/uses/website/website';
import { Section } from '@/components/atoms/section';
import { EverydayHardware } from '@/components/views/uses/hardware';
import { Tabs } from '@/components/views/uses/tabs';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

export default function UsesPage() {
  return (
    <Section id={'uses'} className={'flex-1 gap-6'}>
      <h1
        className={getColoredTextClasses(
          'brand',
          'brand',
          'blue',
          'self-start',
        )}
      >
        What do I use?
      </h1>
      <Tabs>
        <EverydayHardware />
        <p>Software</p>
        <p>Browser</p>
        <p>Coding</p>
      </Tabs>
    </Section>
  );
}

export const metadata = createMetadata({
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
