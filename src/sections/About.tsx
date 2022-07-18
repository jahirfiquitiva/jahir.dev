/* eslint-disable max-len */
import { useMemo } from 'react';

import { Img, Link, Heading } from '@/components/atoms';
import { InstaFeed } from '@/components/compounds';
import { Section } from '@/components/elements';
import { useHasMounted } from '@/hooks';
import type { FC, RandomPageImage } from '@/types';
import { styled } from '~/stitches';

const PhotoFigure = styled('figure', {
  display: 'flex',
  flexDirection: 'column',
  mt: '$$verticalContentPadding',
  mb: 'calc($$verticalContentPadding / 2)',
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '$space$8',
    border: '1px solid $divider',
  },
});

const Intro = styled('p', {
  color: '$text-primary',
  mt: '$6',
  mb: '$20',
  fontSize: 'calc($xs * 1.15)',
});

const Paragraph = styled(Intro, {
  color: '$text-secondary',
  my: '$10',
  fontSize: '$xs',
});

// eslint-disable-next-line max-lines-per-function
export const About: FC<{ image: RandomPageImage }> = ({ image }) => {
  const hasMounted = useHasMounted();

  const photoComponent = useMemo(() => {
    if (!hasMounted) return null;
    return (
      <PhotoFigure>
        <Img
          src={`/static/images/about/${image.key}.jpg`}
          alt={image.alt}
          quality={100}
          width={image?.width || 768}
          height={image?.height || 320}
          placeholder={'blur'}
          blurDataURL={image?.base64 || ''}
        />
        <figcaption>📸&nbsp;&nbsp;{image.alt}</figcaption>
      </PhotoFigure>
    );
  }, [hasMounted, image]);

  return (
    <Section id={'about'}>
      <Heading as={'h3'} shadow={'blue'} gradient={'blue-to-green'}>
        About
      </Heading>

      {photoComponent}

      <Intro>
        I am{' '}
        <Link title={'Home page'} href={'/'}>
          Jahir Fiquitiva
        </Link>
        , a full-stack software engineer based in{' '}
        <Link
          title={'Colombia on Google Maps'}
          href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
        >
          Colombia 🇨🇴
        </Link>
        .
      </Intro>

      <Paragraph>
        I am creative and passionate about design and technology so I always try
        to craft great-looking software products.
      </Paragraph>

      <Paragraph>
        Before getting into software development, I wanted to be a mechatronics
        engineer and build robots. When I started programming my first robots, I
        realized what my real passion was and started learning more about
        software development.
      </Paragraph>

      <Paragraph>
        When not coding, I like to watch TV shows and movies, play some games
        with friends or hang out with them. I&apos;m also{' '}
        <Link title={'Dashboard page'} href={'/dashboard'}>
          listening to music
        </Link>{' '}
        most of the time. According to Spotify Wrapped, I listened to 130437
        minutes of music in 2021. 😁
      </Paragraph>

      <Paragraph>
        I consider myself a curious and inquisitive person, so on my spare time
        I like to work on{' '}
        <Link title={'Projects page'} href={'/projects'}>
          side projects
        </Link>
        , try to contribute to open source software and aim to constantly learn
        something new to improve my skillset.
      </Paragraph>

      <Paragraph>
        Learn even more about me on{' '}
        <Link title={'Polywork timeline'} href={'https://timeline.jahir.dev/'}>
          my timeline
        </Link>{' '}
        and please don&apos;t hesitate to{' '}
        <Link title={'Contact page'} href={'/contact'}>
          contact me
        </Link>
        !
      </Paragraph>
      <Img
        css={{
          backgroundColor: '$accent-animoji',
          borderRadius: '50%',
          mx: 'auto',
          mt: 'calc($$verticalContentPadding - $10)',
        }}
        src={'/static/images/jahir/animoji.png'}
        alt={'Jahir as an Animoji'}
        size={96}
      />
      <InstaFeed />
    </Section>
  );
};
