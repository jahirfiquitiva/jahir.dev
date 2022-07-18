import { mdiAccountCircleOutline, mdiPlayCircle } from '@mdi/js';
import Icon from '@mdi/react';

import { Button, Link, LinkButton, Heading, Img } from '@/components/atoms';
import { WavingHello } from '@/components/compounds';
import { Section } from '@/components/elements';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const IntroSection = styled(Section, {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  rowGap: '$16',
  '@tablet-sm': {
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    columnGap: '$26',
  },
});

const TextsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gridRow: 2,
  '@tablet-sm': {
    gridRow: 1,
  },
});

const Paragraph = styled('p', {
  mt: '$12',
  mb: '$20',
  maxWidth: '325px',
  '@mobile-lg': {
    maxWidth: '410px',
  },
});

const PhotoContainer = styled('div', {
  borderRadius: '50%',
  backgroundColor: '#223e80',
  backgroundImage: "url('/static/images/jahir/jahir-neon.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'none',
  width: 168,
  height: 168,
});

const Photo = styled(Img, {
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'center',
  opacity: 1,
  transition: 'all .35s ease-in-out',
  hocus: {
    opacity: 0,
    cursor: 'grab',
  },
});

export const Intro: FC = () => {
  return (
    <IntroSection id={'intro'}>
      <TextsContainer>
        <WavingHello />
        <Heading as={'h2'} shadow={'blue'} css={{ fontSize: '$xl' }}>
          I am&nbsp;
          <Heading as={'span'} gradient={'brand-to-blue'}>
            Jahir Fiquitiva
          </Heading>
        </Heading>
        <Paragraph>
          Passionate and creative full-stack software engineer based in{' '}
          <Link
            title={'Colombia on Google Maps'}
            href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
          >
            Colombia 🇨🇴
          </Link>
        </Paragraph>
        <LinkButton title={'About page'} href={'/about'} withShadow>
          <Icon path={mdiAccountCircleOutline} size={1} />
          More about me
        </LinkButton>
      </TextsContainer>
      <PhotoContainer>
        <Photo
          src={'/static/images/jahir/jahir-hd.jpg'}
          alt={"Jahir's Photo"}
          size={168}
          priority
        />
      </PhotoContainer>
    </IntroSection>
  );
};
