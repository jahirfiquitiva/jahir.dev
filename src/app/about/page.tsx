import { Heading } from '@/components/core/heading';
import { Link } from '@/components/core/link/link';
import { Section } from '@/components/core/section';
import { SocialLinks } from '@/components/molecules/social-links/social-links';
import { NowPlaying } from '@/components/views/dashboard/now-playing/now-playing';
import { TunezCard } from '@/components/views/dashboard/now-playing/tunez';
import cx from '@/utils/cx';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import ContactButtons from './contact-buttons';
import Doodle from './doodle';
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

        <p>Thanks for reading. Hope you have an awesome day! 🌟</p>

        <div
          className={cx(
            'flex items-center transition-colors',
            'border border-divider rounded-6',
            'py-4 px-6 min-h-[2.625rem]',
            'hover:border-accent-dark self-start',
            'mx-auto my-8',
          )}
        >
          <SocialLinks className={'mx-0 mobile-lg:mx-0 tablet-sm:mx-0'} />
        </div>
      </Section>
      <Section id={'contact'}>
        <Heading $as={'h2'} shadow={'brand'} from={'brand'} to={'blue'}>
          Contact
        </Heading>
        <p>
          I&apos;m always open to chat, connect with new people and explore new
          opportunities.
        </p>
        <div
          className={cx(
            'flex flex-col-reverse gap-48',
            'tablet-sm:flex-row tablet-sm:items-start',
          )}
        >
          <Doodle />
          <div className={cx('flex flex-col gap-12')}>
            <p>
              If you have a project or idea in mind where I can contribute,
              don&apos;t hesitate contacting me!
              <br />
              But please{' '}
              <Link
                title={"Don't just say hello page"}
                href={'https://nohello.net/'}
              >
                don&apos;t just say hello
              </Link>
              .
            </p>
            <p>There&apos;s a few ways you can get it touch:</p>
            <ContactButtons />
          </div>
        </div>
      </Section>
      <Section id={'activity'}>
        <Heading $as={'h2'} className={cx('text-xl')}>
          Activity
        </Heading>
        <div
          className={cx(
            'grid grid-cols-1 gap-12',
            'tablet-sm:grid-cols-2 tablet-sm:gap-16',
          )}
        >
          <NowPlaying />
          <TunezCard />
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
