import { mdiPlayCircle } from '@mdi/js';
import Icon from '@mdi/react';
import useSound from 'use-sound';

import { Button, Link, Heading } from '@/components/atoms';
import { WavingHello } from '@/components/compounds';
import { Section } from '@/components/elements';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const NameButton = styled(Button, {
  background: 'none',
  color: '$text-primary',
  p: 0,
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
        css={{ fontSize: 'inherit', fontWeight: 800 }}
      >
        Jahir Fiquitiva
      </Heading>
      <Icon path={mdiPlayCircle} size={1.25} />
    </NameButton>
  );
};

export const Intro: FC = () => {
  return (
    <Section id={'intro'}>
      <WavingHello />
      <Heading as={'h1'} shadow={'blue'} css={{ fontSize: '$xl' }}>
        I am&nbsp;
        <PronunciationButton />
      </Heading>
      <p>
        Passionate and creative full-stack software engineer based in{' '}
        <Link
          title={'Colombia on Google Maps'}
          href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
        >
          Colombia 🇨🇴
        </Link>
      </p>
      <Button>
        <span>Click</span>
      </Button>
    </Section>
  );
};
