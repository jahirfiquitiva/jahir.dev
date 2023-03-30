import Icon from '@mdi/react';

import { Link, LinkButton, Heading, Img, Section } from '@/components/atoms';
import { WavingHello } from '@/components/compounds';
import { mdiAccountCircleOutline } from '@/icons';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const IntroSection = styled(Section, {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  rowGap: '$16',
  '@tablet-sm': {
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    gridTemplateRows: 'minmax(0, 1fr)',
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
  backgroundColor: 
    'var(--arc-background-gradient-color1, var(--arc-palette-maxContrastColor, #223e80))',
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
    filter: 'grayscale(100%) contrast(.75) brightness(150%)',
    transition: 'all .35s ease-in-out',
    mixBlendMode: 'hard-light',
    opacity: 0.75,
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
        <Heading as={'h2'} shadow={'blue'}>
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
          src={'/static/images/jahir/jahir.jpg'}
          alt={"Jahir's Photo"}
          size={168}
          priority
        />
      </PhotoContainer>
    </IntroSection>
  );
};
