/* eslint-disable max-len */
import { useMemo } from 'react';

import { Img, Heading, Section, Link } from '@/components/core';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { useRandomItem } from '@/hooks/use-random-item';
import type { FC } from '@/types';

import { images } from './about.images';
import { Intro, PhotoFigure } from './about.styles';
import { Contact } from './contact';

// eslint-disable-next-line max-lines-per-function
export const About: FC = () => {
  const image = useRandomItem(images);
  const hasMounted = useHasMounted();

  const photoComponent = useMemo(() => {
    if (!hasMounted || !image) return null;
    return (
      <PhotoFigure>
        <Img
          src={image.src}
          alt={image.alt || 'Photo including Jahir'}
          quality={100}
          placeholder={'blur'}
          css={{ aspectRatio: '21 / 9', width: '100%', height: 'auto' }}
          priority
        />
        <figcaption>📸&nbsp;&nbsp;{image.alt}</figcaption>
      </PhotoFigure>
    );
  }, [hasMounted, image]);

  return (
    <>
      <Section id={'about'} css={{ gap: '$12' }}>
        <Heading shadow={'blue'} gradient={'blue-to-green'}>
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

        <p>
          I am creative and passionate about design and technology so I always
          try to craft great-looking software products.
        </p>

        <p>
          Before getting into software development, I wanted to be a
          mechatronics engineer and build robots. When I started programming my
          first robots, I realized what my real passion was and started learning
          more about software development.
        </p>

        <p>
          When not coding, I like to watch TV shows and movies, play some games
          with friends or hang out with them. I&apos;m also{' '}
          <Link title={'Dashboard page'} href={'/dashboard'}>
            listening to music
          </Link>{' '}
          most of the time.
        </p>

        <p>
          I consider myself a curious and inquisitive person, so on my spare
          time I like to work on{' '}
          <Link title={'Projects page'} href={'/projects'}>
            side projects
          </Link>
          , try to contribute to open source software and aim to constantly
          learn something new to improve my skillset.
        </p>

        <p>
          Learn about the hardware, software and tools I use, on my{' '}
          <Link title={'Uses page'} href={'/uses'}>
            uses page
          </Link>
          .<br />
          Or even more about me on{' '}
          <Link
            title={'Polywork timeline'}
            href={'https://timeline.jahir.dev/'}
          >
            my timeline
          </Link>
          .
        </p>
      </Section>
      <Contact />
    </>
  );
};
