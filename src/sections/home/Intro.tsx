import { mdiAccountCircleOutline, mdiPlayCircle } from '@mdi/js';
import Icon from '@mdi/react';
import useSound from 'use-sound';

import { Button, Link, LinkButton, Heading, Img } from '@/components/atoms';
import { WavingHello } from '@/components/compounds';
import { Section } from '@/components/elements';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const IntroSection = styled(Section, {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  rowGap: '1rem',
  '@tablet-sm': {
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    columnGap: '1.6rem',
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

const NameButton = styled(Button, {
  background: 'none',
  color: '$text-primary',
  p: 0,
  m: 0,
  borderRadius: 0,
  letterSpacing: 'unset',
  minHeight: 'unset',
  hocus: {
    background: 'none',
    transform: 'none',
  },
  '& > svg': {
    filter:
      'drop-shadow($$textShadowSize $$textShadowSize 0 $$textShadowColor)',
    dark: {
      filter: 'none',
      color: '$gradient-blue',
    },
  },
  '@mobile-md': {
    ml: '10px',
  },
});

const PronunciationButton: FC = () => {
  const [playName] = useSound('/static/audio/name-pronunciation.mp3', {
    interrupt: true,
  });
  return (
    <NameButton
      title={"Press to hear Jahir's name pronunciation"}
      onClick={() => {
        playName();
      }}
    >
      <Heading
        as={'span'}
        gradient={'brand-to-blue'}
        css={{ fontSize: 'inherit', fontWeight: 700 }}
      >
        Jahir Fiquitiva
      </Heading>
      <Icon path={mdiPlayCircle} size={1.25} />
    </NameButton>
  );
};

const Paragraph = styled('p', {
  mt: '0.8rem',
  mb: '1.2rem',
  maxWidth: '325px',
  '@mobile-lg': {
    maxWidth: '410px',
  },
});

const PhotoContainer = styled('div', {
  borderRadius: '50%',
  backgroundColor: '#223e80',
  width: 168,
  height: 168,
});

const Photo = styled(Img, {
  borderRadius: '50%',
  backgroundColor: '$accent-animoji',
  border: '1px solid rgba($toolbar-glow / 0.12)',
  objectFit: 'cover',
  objectPosition: 'center',
  canHover: {
    filter: 'grayscale(100%) contrast(.75) brightness(175%)',
    transition: 'all .25s ease-in-out',
    mixBlendMode: 'hard-light',
    opacity: 0.75,
    dark: {
      opacity: 0.55,
    },
  },
  hocus: {
    cursor: 'grab',
    filter: 'unset',
    mixBlendMode: 'normal',
    opacity: 1,
  },
});

export const Intro: FC = () => {
  return (
    <IntroSection id={'intro'}>
      <TextsContainer>
        <WavingHello />
        <Heading as={'h1'} shadow={'blue'} css={{ fontSize: '$xl' }}>
          I am
          <PronunciationButton />
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
