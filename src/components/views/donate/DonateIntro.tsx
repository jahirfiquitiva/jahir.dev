/* eslint-disable max-lines-per-function */
import { useMemo } from 'react';

import { OpenDoodle } from '@/components/compounds';
import { Heading, Link } from '@/components/core';
import { useHasMounted } from '@/hooks/useHasMounted';
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

const List = styled('ul', {
  m: 0,
  p: 0,
  ml: '$12',
  pl: '$4',
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
        alt={img.alt || 'Doodle'}
        flip={img.key < 3}
        shadowColor={'$colors$shadow-red'}
      />
    );
  }, [hasMounted, img]);

  return (
    <>
      <IntroGrid>
        <IntroTexts>
          <Heading
            as={'h2'}
            shadow={'brand'}
            gradient={'brand-to-blue'}
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
        <List>
          <li>
            Since 2015, I&apos;ve been making three open-source Android
            dashboards:{' '}
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
            . They have helped countless designers create hundreds – if not
            thousands – of apps and publish them on{' '}
            <Link
              title={
                "Apps on Play Store built using Jahir Fiquitiva's dashboards"
              }
              href={
                'https://play.google.com/store/search?q=Jahir%20Fiquitiva&c=apps'
              }
            >
              Play Store
            </Link>
            .
          </li>
          <li>
            I make some of my personal{' '}
            <Link title={'Projects page'} href={'/projects'}>
              projects
            </Link>{' '}
            public, including Android apps, web apps, services, and bots.
          </li>
        </List>
      </IntroTexts>
    </>
  );
};
