/* eslint-disable max-lines-per-function */
import { useMemo } from 'react';

import { Heading, Link } from '@/components/atoms';
import { OpenDoodle } from '@/components/compounds';
import { useHasMounted } from '@/hooks';
import type { FC, RandomPageImage } from '@/types';
import { styled } from '~/stitches';

const IntroGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  '@tablet-sm': {
    gap: 'calc($$verticalContentPadding / 2)',
    gridTemplateColumns: '1fr auto',
    alignItems: 'center',
  },
  '& > img': {
    gridRow: 1,
    '@tablet-sm': {
      gridRow: 1,
      gridColumn: 2,
    },
  },
});

const IntroTexts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 'calc($$verticalContentPadding / 4)',
});

interface DonateIntroProps {
  image?: RandomPageImage;
}

export const DonateIntro: FC<DonateIntroProps> = (props) => {
  const { image: img } = props;

  const hasMounted = useHasMounted();

  const imageComponent = useMemo(() => {
    if (!hasMounted || !img) return null;
    return (
      <OpenDoodle
        key={img.key}
        src={`/static/images/donate/${img.key}.png`}
        alt={img.alt}
        flip={img.key < 3}
        shadowColor={'$colors$shadow-red'}
        css={{
          maxWidth: 192,
          '@mobile-lg': { maxWidth: 220 },
          '@tablet-sm': { minWidth: 220 },
        }}
      />
    );
  }, [hasMounted, img]);

  return (
    <>
      <IntroGrid>
        <IntroTexts>
          <Heading
            as={'h3'}
            shadow={'orange'}
            gradient={'orange-to-red'}
            css={{ mb: 'calc($$verticalContentPadding / 4)' }}
          >
            Donate
          </Heading>
          <p>
            I strive to build great products and many of them are{' '}
            <Link
              href={'https://github.com/jahirfiquitiva'}
              title={"Jahir's GitHub Profile"}
            >
              open source
            </Link>
            . But this wouldn’t be possible without the support of my{' '}
            <Link href={'#thanks'} title={'Navigate to sponsors section'}>
              sponsors
            </Link>
            !
          </p>
          <p>
            If you use any of my projects, please consider donating so that I
            can continue maintaining them.
          </p>
        </IntroTexts>
        {imageComponent}
      </IntroGrid>
      <IntroTexts>
        <Heading as={'h4'}>Why donate?</Heading>
        <p>
          Since 2015, I&apos;ve been working on open source projects, mostly
          focused on 3 android dashboards:{' '}
          <Link title={'Blueprint'} href={'/projects/blueprint'}>
            Blueprint
          </Link>
          ,{' '}
          <Link title={'Frames'} href={'/projects/frames'}>
            Frames
          </Link>{' '}
          and{' '}
          <Link title={'Kuper'} href={'/projects/kuper'}>
            Kuper
          </Link>
          . My work with those dashboards has helped tens of
          designers/developers who have been able to create hundreds – if not
          thousands – of{' '}
          <Link
            title={
              "Apps on Play Store built using Jahir Fiquitiva's dashboards"
            }
            href={
              'https://play.google.com/store/search?q=Jahir%20Fiquitiva&c=apps'
            }
          >
            apps on Play Store
          </Link>
          .
        </p>
        <p>
          I&apos;ve also been maintaining a popular android library named{' '}
          <Link
            title={'Piracy Checker'}
            href={'https://github.com/javiersantos/PiracyChecker'}
          >
            Piracy Checker
          </Link>
          , translating a few things in{' '}
          <Link
            title={'Unicorn Utterances'}
            href={'https://unicorn-utterances.com'}
          >
            Unicorn Utterances
          </Link>{' '}
          to Spanish, contributing to other open-source projects every now and
          then, and making some of my personal{' '}
          <Link title={'Projects page'} href={'/projects'}>
            projects
          </Link>{' '}
          public, which include android apps, web apps, sites and services and
          bots.
        </p>
      </IntroTexts>
    </>
  );
};
