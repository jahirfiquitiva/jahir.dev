import illustration from '@/assets/images/donate/3.png';
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { List, ListItem } from '@/components/atoms/list';
import { Section } from '@/components/atoms/section';
import { DonateButtons } from '@/components/ui/donate/buttons';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

import Sponsorships from './sponsorships';

export default function DonatePage() {
  return (
    <>
      <Section id={'donate'} className={'gap-3'}>
        <h1 className={getColoredTextClasses('yellow', 'self-start')}>
          Donate
        </h1>
        <div className={'block space-y-3 -mt-2'}>
          <Img
            src={illustration}
            alt={'Illustration of person with big heart'}
            width={144}
            height={144}
            className={cx(
              'rounded-0 m-0 -scale-x-100',
              'tablet-sm:float-right tablet-sm:mr-4 tablet-sm:-mt-6',
              'max-w-24 mobile-lg:max-w-28 tablet-sm:max-w-36 tablet-md:max-w-40',
              'drop-shadow-doodle shadow-brand-200 select-none',
            )}
          />
          <p style={{ maxWidth: '50ch' }}>
            I&apos;m passionate about building amazing open-source projects, but
            it wouldn&apos;t be possible to keep them going without your help!
          </p>
          <p style={{ maxWidth: '50ch' }}>
            If you&apos;ve benefited from any of them, consider donating to
            ensure their continued development.
          </p>
        </div>
        <h2 className={'text-md mt-6'}>Why donate?</h2>
        <p>
          Since 2015, I&apos;ve crafted three open-source Android dashboards –{' '}
          <Link
            title={'Blueprint'}
            href={'https://github.com/jahirfiquitiva/blueprint'}
          >
            Blueprint
          </Link>
          ,{' '}
          <Link
            title={'Frames'}
            href={'https://github.com/jahirfiquitiva/frames'}
          >
            Frames
          </Link>
          , and{' '}
          <Link
            title={'Kuper'}
            href={'https://github.com/jahirfiquitiva/kuper'}
          >
            Kuper
          </Link>{' '}
          – empowering designers to create countless apps for the{' '}
          <Link
            title={'Apps built using my dashboards on Google Play Store'}
            href={
              'https://play.google.com/store/search?q=Jahir%20Fiquitiva&c=apps'
            }
          >
            Google Play Store
          </Link>
          . I also share personal{' '}
          <Link title={'Side projects'} href={'/projects'}>
            projects
          </Link>{' '}
          like other Android apps, websites, and more.
        </p>
        <Link title={'Testimonials'} href={'#testimonials'}>
          Don&apos;t just take my word for it!
        </Link>
        <h3 className={'text-xs mt-4'}>Your donation comes with perks:</h3>
        <List>
          <ListItem>Featured on this page</ListItem>
          <ListItem>Priority for bug reports or feature requests</ListItem>
          <ListItem>A stylish one-page static website</ListItem>
          <ListItem>
            Early and free access to future projects and{' '}
            <Link
              title={'Sponsor Jahir Fiquitiva on GitHub'}
              href={'https://github.com/sponsors/jahirfiquitiva/'}
            >
              more
            </Link>
            !
          </ListItem>
        </List>
        <h3 className={'text-xs mt-4'}>Where does your contribution go?</h3>
        <List>
          <ListItem>
            Cover domain and platform services for various projects
          </ListItem>
          <ListItem>Support my continuous learning through courses</ListItem>
          <ListItem>Fuel the creation of more open-source projects</ListItem>
          <ListItem>Allow me to sponsor other talented individuals</ListItem>
        </List>
        <p>
          Join the cause and donate today – let&apos;s make a lasting impact
          together!
        </p>
        <DonateButtons />
      </Section>
      <Sponsorships />
    </>
  );
}

export const metadata = createMetadata({
  title: 'Donate – Jahir Fiquitiva',
  description:
    // eslint-disable-next-line max-len
    'Support Jahir Fiquitiva. Donate or sponsor him as a recognition for his work on different projects.',
  exactUrl: 'https://jahir.dev/donate',
  keywords: [
    'donate',
    'support',
    'sponsor',
    'open-source',
    'supporter',
    'sponsorship',
  ],
});
