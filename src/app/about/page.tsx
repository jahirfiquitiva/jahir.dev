import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import { Activity } from '@/components/ui/about/activity';
import { Education } from '@/components/ui/about/education';
import { Experience } from '@/components/ui/about/experience';
import { Skills } from '@/components/ui/about/skills';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

import Photo from './photo';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: new Date('1997-01-28T18:30:00-05:00').toISOString(),
  dateModified: new Date().toISOString(),
  mainEntity: {
    '@id': '#main-author',
    '@type': 'Person',
    name: 'Mani Ramezanpour',
    alternateName: ['maniramezanpour', 'manidotdev'],
    description:
      'Passionate and creative full-stack software engineer based in Netherland',
    sameAs: [
      'https://github.com/Maniramezanpour',
      'https://linkedin.com/in/mani-ramezanpour',
      'https://twitter.com/manirmps',
      'https://instagram.com/manirmps',
    ],
  },
});

export default function AboutPage() {
  return (
    <>
      <Section id={'about'} className={'gap-8'}>
        <div
          className={cx(
            'grid gap-6 border-b border-divider pb-8',
            'tablet-md:grid-cols-[1fr_auto] tablet-md:items-end',
          )}
        >
          <div className={'max-w-3xl'}>
            <p
              className={
                'mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-tertiary-txt'
              }
            >
              My story
            </p>
            <h1
              className={
                'mb-5 text-5xl font-bold leading-[1.05] tracking-tight tablet-sm:text-6xl'
              }
            >
              A little more <span className={'text-accent'}>about me.</span>
            </h1>
            <p
              className={
                'max-w-nice text-lg leading-relaxed text-secondary-txt'
              }
            >
              I&apos;m Mani Ramezanpour, a full-stack software developer based
              in{' '}
              <Link
                title={'The Netherlands'}
                href={'https://www.google.com/maps/place/Netherlands/'}
                data-umami-event={'Link to Netherlands map'}
              >
                the Netherlands 🇳🇱
              </Link>
              . I design and build web applications with a focus on performance,
              accessibility, and visual quality. My pronouns are he/they.
            </p>
          </div>
          <Link
            title={'Jump to education'}
            href={'#education'}
            className={cx(
              'text-sm font-medium text-secondary-txt underline decoration-divider',
              'underline-offset-4 hocus:text-primary-txt',
            )}
          >
            Education <span aria-hidden={'true'}>↓</span>
          </Link>
        </div>
        <Photo />
        <div className={'grid gap-6 tablet-md:grid-cols-2 tablet-md:gap-10'}>
          <div className={'flex flex-col gap-3'}>
            <h2 className={'text-lg font-semibold'}>Thoughtful engineering</h2>
            <p className={'max-w-nice text-secondary-txt'}>
              I focus on details and love crafting software products that look
              great, work for everyone, and stay easy to maintain. My dedication
              to detail and technical excellence was tested through my
              participation in the{' '}
              <Link title={'WorldSkills'} href={'https://worldskills.org/'}>
                WorldSkills Competition
              </Link>{' '}
              in Web Technology.
            </p>
          </div>
          <div className={'flex flex-col gap-3'}>
            <h2 className={'text-lg font-semibold'}>How I work</h2>
            <p className={'max-w-nice text-secondary-txt'}>
              I enjoy taking on challenges and continuing to grow my skillset.
              Alongside web development, I explore embedded projects with
              Arduino and procedural content generation (PCG) design. I thrive
              in globally remote teams that value people and embrace trust,
              kindness, and inclusion.
            </p>
          </div>
        </div>
      </Section>
      <Section
        id={'contact'}
        className={cx(
          'gap-5 border-t border-divider pt-7 tablet-sm:flex-row',
          'tablet-sm:items-center tablet-sm:justify-between',
        )}
      >
        <div className={'flex flex-col gap-2'}>
          <h2 className={'text-xl font-semibold'}>Let&apos;s connect</h2>
          <p className={'text-secondary-txt'}>
            Have a project or opportunity in mind? I&apos;d be glad to hear from
            you.
          </p>
          <Link
            title={'Email Mani'}
            href={'mailto:maniramznpoor2007@gmail.com?subject=Hi%20Mani!'}
          >
            maniramznpoor2007@gmail.com
          </Link>
        </div>
        <SocialLinks className={'mr-0 justify-start tablet-sm:justify-end'} />
      </Section>
      <Skills />
      <Education />
      <Experience />
      <Activity />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}

export const metadata = createMetadata({
  title: 'About – Mani Ramezanpour',
  description: 'Learn more about me (Mani Ramezanpour), my career and more',
  exactUrl: 'https://jahir.dev/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
});
