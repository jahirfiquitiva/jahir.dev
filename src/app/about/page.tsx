import { Link } from '@/components/link';
import { Section } from '@/components/section';
import { SocialLinks } from '@/components/social-links';
import { Activity } from '@/components/views/about/activity';
import { Experience } from '@/components/views/about/experience';
import { Skills } from '@/components/views/about/skills';
import { getColoredTextClasses } from '@/utils/colored-text';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import Photo from './photo';

export default function AboutPage() {
  return (
    <>
      <Section id={'about'}>
        <h1
          className={getColoredTextClasses(
            'blue',
            'blue',
            'green',
            false,
            'self-start',
          )}
        >
          About
        </h1>
        <p>
          👋 Hey there! I&apos;m Jahir Fiquitiva, a full-stack software engineer
          from{' '}
          <Link
            title={'Colombia on Google Maps'}
            href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
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
          <Link title={'GitHub'} href={'https://github.com/jahirfiquitiva'}>
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
          <Link title={'Uses page'} href={'/uses'}>
            uses
          </Link>{' '}
          page.
        </p>
        <div className={'flex flex-col gap-2 mt-2'}>
          <p className={'font-medium'}>Let&apos;s connect!</p>
          <SocialLinks />
        </div>
      </Section>
      <Skills />
      <Experience />
      <Activity />
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
