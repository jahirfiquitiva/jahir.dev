import { useMemo } from 'react';

import { Img, Link, Heading } from '@/components/atoms';
import { Section } from '@/components/elements';
import { useHasMounted } from '@/hooks';
import type { FC } from '@/types';
import { getRandomItem } from '@/utils';
import { styled } from '~/stitches';

interface AboutPhoto {
  key: string;
  alt: string;
}

const possibleImages: Array<AboutPhoto> = [
  {
    key: '0',
    alt: "Visiting Lima, Perú – Oct '19",
  },
  {
    key: '1',
    alt: "Visiting Sativa Norte, Boyacá, Colombia – Jan '22",
  },
  {
    key: '2',
    alt: "Hiking in my hometown – Mar '20",
  },
  {
    key: '3',
    alt: "Hanging out with friends at a cafe – Dec '20",
  },
  {
    key: '4',
    alt: "Hanging out with friends in Iza, Boyacá, Colombia – Mar '21",
  },
  {
    key: '5',
    alt: "Hanging out with friends in Playa Blanca, Boyacá, Colombia – Jul '21",
  },
  {
    key: '6',
    alt: "Hanging out with friends at a cafe – Feb '22",
  },
  {
    key: '7',
    alt: "Visiting a small town – Dec '22",
  },
  {
    key: '8',
    alt: "Trip to San Andrés – Dec '22",
  },
];

const PhotoFigure = styled('figure', {
  display: 'flex',
  flexDirection: 'column',
  my: '1.2rem',
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    border: '1px solid $divider',
  },
});

const Intro = styled('p', {
  color: '$text-primary',
  mt: '.4rem',
  mb: '1.2rem',
  fontSize: 'calc($xs * 1.15)',
});

const Paragraph = styled(Intro, {
  color: '$text-secondary',
  my: '.6rem',
  fontSize: '$xs',
});

// eslint-disable-next-line max-lines-per-function
export const About: FC = () => {
  const hasMounted = useHasMounted();

  const rightImage: AboutPhoto = useMemo<AboutPhoto>(() => {
    return getRandomItem(possibleImages);
  }, []);

  const photoComponent = useMemo(() => {
    if (!hasMounted) return null;
    return (
      <PhotoFigure>
        <Img
          src={`/static/images/about/ab-${rightImage.key}.jpg`}
          alt={rightImage.alt}
          quality={100}
          width={768}
          height={320}
        />
        <figcaption>📸&nbsp;&nbsp;{rightImage.alt}</figcaption>
      </PhotoFigure>
    );
  }, [hasMounted, rightImage]);

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
    </Section>
  );
};
