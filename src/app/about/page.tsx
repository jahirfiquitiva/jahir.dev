import { Heading } from '@/components/core/heading';
import { Link } from '@/components/core/link/link';
import { Section } from '@/components/core/section';
import { NowPlaying } from '@/components/molecules/now-playing/now-playing';
import { ReadingCard } from '@/components/molecules/now-playing/reading';
import { LetsConnect } from '@/components/views/home/lets-connect';
import { Skills } from '@/components/views/home/skills/skills';
import cx from '@/utils/cx';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import Photo from './photo';

export default function AboutPage() {
  return (
    <>
      <Section id={'about'} className={'gap-24'}>
        <Heading shadow={'blue'} from={'blue'} to={'green'}>
          About
        </Heading>
        <p>
          <span role={'img'} aria-label={'waving hand'}>
            👋
          </span>{' '}
          Hey there! I&apos;m <strong>Jahir Fiquitiva</strong>, a full-stack
          software engineer from{' '}
          <Link
            href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
            title={'Colombia 🇨🇴'}
          >
            Colombia 🇨🇴
          </Link>{' '}
          with over five (5) years of professional experience. My pronouns are
          he/they.
        </p>
        <p>
          I focus on details and I&apos;m passionate about crafting software
          products that look great and are both accessible and easy to maintain.
        </p>

        <Photo />

        <p>
          I&apos;m a huge advocate for open source and collaborating with the
          community. You can find my stash of websites, libraries, and apps on{' '}
          <Link href={'https://github.com/jahirfiquitiva'} title={'GitHub'}>
            GitHub
          </Link>{' '}
          which have earned over 2K stars.
        </p>

        <p>
          I&apos;m all about diving into challenges improving and expanding my
          skillset and I thrive in globally-remote teams that value people and
          embrace trust, kindness, and inclusion.
        </p>

        <p>
          If you&apos;re curious about the hardware and software tools I use
          every day, feel free to check out the{' '}
          <Link title={'uses page'} href={'/uses'}>
            uses
          </Link>{' '}
          page.
        </p>
      </Section>
      <LetsConnect />
      <Skills />
      <Section id={'activity'}>
        <Heading
          $as={'h2'}
          className={cx('text-xl')}
          shadow={'brand'}
          from={'brand'}
          to={'blue'}
        >
          Activity
        </Heading>
        <div
          className={cx(
            'grid grid-cols-1 gap-12',
            'tablet-sm:grid-cols-2 tablet-sm:gap-16',
          )}
        >
          <NowPlaying />
          <ReadingCard />
        </div>
      </Section>
    </>
  );
}

export const metadata = getStaticMetadata({
  title: 'About – Jahir Fiquitiva',
  description: 'Learn more about me (Jahir Fiquitiva), my career and more',
  exactUrl: 'https://jahir.dev/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
  image: buildOgImageUrl('about'),
});
