import setupImage from '@/assets/images/setup.jpg';
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { Zoom } from '@/components/molecules/zoom';
import { Coding } from '@/components/ui/uses/coding';
import { ExtensionsGrid } from '@/components/ui/uses/extensions';
import { EverydayHardware } from '@/components/ui/uses/hardware';
import { Software } from '@/components/ui/uses/software';
import { Tabs } from '@/components/ui/uses/tabs';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';

export default function UsesPage() {
  return (
    <>
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
        <Tabs
          heroImage={
            <Img
              src={setupImage}
              alt={"Jahir's desk setup in early 2023"}
              quality={100}
              priority
            />
          }
        >
          <EverydayHardware />
          <Software />
          <ExtensionsGrid />
          <Coding />
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
        </Tabs>
      </Section>
      <Zoom />
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
