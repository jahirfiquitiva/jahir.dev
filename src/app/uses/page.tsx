import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { Coding } from '@/components/ui/uses/coding';
import { ExtensionsGrid } from '@/components/ui/uses/extensions';
import { EverydayHardware } from '@/components/ui/uses/hardware';
import { Software } from '@/components/ui/uses/software';
import { Tabs } from '@/components/ui/uses/tabs';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

import { UsesHero } from './hero';

const Notice = () => (
  <blockquote
    className={cx(
      'bg-brand-500/[0.024] dark:bg-brand-100/5',
      'border border-dashed border-divider',
      'p-4 rounded-3 my-1',
      'motion-safe:animate-fade-in motion-safe:[animation-delay:0s]',
    )}
  >
    <span role={'img'} aria-label={'lightning emoji'}>
      ⚡
    </span>{' '}
    Make sure to check out{' '}
    <Link href={'https://uses.tech'} title={'uses.tech'}>
      uses.tech
    </Link>{' '}
    for a list of everyone&apos;s /uses pages!
  </blockquote>
);

const Colophon = () => (
  <p>
    Please check out the brand new{' '}
    <Link title={'Colophon page'} href={'/colophon'}>
      Colophon page
    </Link>
    !{' '}
    <span role={'img'} aria-label={'party popper'}>
      🎉
    </span>
  </p>
);

export default function UsesPage() {
  return (
    <>
      <Section id={'uses'} className={'flex-1 gap-6'}>
        <h1 className={getColoredTextClasses('blue', 'self-start')}>
          What do I use?
        </h1>
        <Tabs heroComponent={<UsesHero />} noticeComponent={<Notice />}>
          <EverydayHardware />
          <Software />
          <ExtensionsGrid />
          <Coding />
          <Colophon />
        </Tabs>
      </Section>
    </>
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
});
