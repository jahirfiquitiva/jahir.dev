import styled from '@emotion/styled';
import { useMemo } from 'react';
import useSound from 'use-sound';

import { SectionHeading } from '~/components/atoms/complex';
import {
  Section,
  Image,
  Link,
  baseLinkStyles,
} from '~/components/atoms/simple';
import { SocialLinks } from '~/components/elements';
import { AudioButton, audioButtonTitle } from '~/components/sections/home';
import useHasMounted from '~/hooks/useHasMounted';
import getRandomItem from '~/lib/random';

interface AboutPhoto {
  key: string;
  alt: string;
}

const possibleImages: Array<AboutPhoto> = [
  {
    key: '0',
    alt: 'Me in Lima, Perú',
  },
  {
    key: '1',
    alt: 'Me in Lima, Perú',
  },
  {
    key: '2',
    alt: 'Hiking in my hometown',
  },
  {
    key: '3',
    alt: 'Hanging out with friends at a cafe',
  },
  {
    key: '4',
    alt: 'Hanging out with friends in Iza, Boyacá, Colombia',
  },
  {
    key: '5',
    alt: 'Hanging out with friends in Playa Blanca, Boyacá, Colombia',
  },
];

const Intro = styled.p`
  color: var(--text-primary);
  margin: 0.4rem 0 1.2rem;
  font-size: calc(var(--base-font-size) * 1.15);
`;

const Paragraph = styled(Intro)`
  color: var(--text-secondary);
  margin: 0.6rem 0;
  font-size: var(--font-xs);
`;

const CuriousParagraph = styled(Paragraph)`
  background-color: var(--primary);
  border: 1px dashed var(--accent-light);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  margin-bottom: 2.4rem;
  font-size: var(--font-2xs);
  & > ul {
    margin-top: 0.4rem;
    list-style: disc;
    padding-inline-start: 1.2rem;
  }
`;

const Photo = styled(Image)`
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--divider) !important;
  margin: 0 auto !important;
`;

const PhotoFigure = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 1.2rem 0;

  & > span {
    border-radius: 10px;
    box-shadow: var(--shadow-sm);
    overflow: auto !important;
    margin: 0 auto !important;
  }
`;

const AboutAudioButton = styled(AudioButton)`
  font-family: var(--inter-font);
  &:hover,
  &:focus {
    & > span {
      text-decoration: underline;
    }
  }
`;

export const About = () => {
  const hasMounted = useHasMounted();
  const [playName] = useSound('/static/audio/name-pronunciation.mp3', {
    interrupt: true,
  });

  const rightImage: AboutPhoto = useMemo<AboutPhoto>(() => {
    return getRandomItem(possibleImages);
  }, []);

  const photoComponent = useMemo(() => {
    if (!hasMounted) return null;
    return (
      <PhotoFigure>
        <Photo
          src={`/static/images/about/ab-${rightImage.key}.jpg`}
          alt={rightImage.alt}
          width={768}
          height={320}
          quality={100}
          objectFit={'cover'}
          objectPosition={'center'}
          layout={'intrinsic'}
        />
        <figcaption>📸 {rightImage.alt}</figcaption>
      </PhotoFigure>
    );
  }, [hasMounted, rightImage]);

  return (
    <Section id={'about'}>
      <SectionHeading
        size={'3'}
        shadowColor={'blue'}
        gradientColor={'blue-to-green'}
        emoji={'🙋‍♂️'}
      >
        About
      </SectionHeading>

      {photoComponent}

      <Intro>
        I am{' '}
        <Link title={'Link to home page'} href={'/'}>
          Jahir Fiquitiva
        </Link>
        , a full-stack software engineer based in{' '}
        <Link
          title={'Link to Colombia on Google Maps'}
          href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
        >
          Colombia 🇨🇴
        </Link>
        .
      </Intro>

      <Paragraph>
        I am creative and passionate about design and technology so I always try
        to craft great-looking software products 🎨
      </Paragraph>

      <Paragraph>
        Before getting into software development, I wanted to be a mechatronics
        engineer and build robots 🤖 When I started programming my first robots,
        I realized what my real passion was and started learning more about
        software development 👨‍💻
      </Paragraph>

      <Paragraph>
        When not coding, I like to watch TV shows and movies, play some games
        with friends or hang out with them 🤝 I&apos;m also{' '}
        <Link title={'Link to now page'} href={'/now'}>
          listening to music
        </Link>{' '}
        most of the time 🎧 According to Spotify Wrapped, I listened to 130437
        minutes of music in 2021 😱
      </Paragraph>

      <Paragraph>
        I consider myself a curious and inquisitive person, so on my spare time
        I like to work on{' '}
        <Link title={'Link to projects page'} href={'/projects'}>
          side projects
        </Link>
        , try to contribute to open source software and aim to constantly learn
        something new to improve my skillset 🤓
      </Paragraph>

      <Paragraph>
        Learn even more about me on{' '}
        <Link
          title={'Link to Polywork timeline'}
          href={'https://timeline.jahir.dev/'}
        >
          my timeline
        </Link>{' '}
        and please don&apos;t hesitate to{' '}
        <Link title={'Link to contact page'} href={'/contact'}>
          contact me
        </Link>
        !
      </Paragraph>

      <Paragraph>
        You can also follow my work, projects and occassional insights into my
        life on my social networks:
      </Paragraph>
      <SocialLinks />

      <br />

      <CuriousParagraph>
        If feeling curious, you can:
        <ul>
          <li>
            Hear my name{' '}
            <AboutAudioButton
              title={audioButtonTitle}
              name={audioButtonTitle}
              aria-label={audioButtonTitle}
              onClick={() => {
                playName();
              }}
            >
              <span css={baseLinkStyles}>pronunciation by clicking here</span>
            </AboutAudioButton>
            .
          </li>
          <li>
            Check out the{' '}
            <Link title={'Link to uses page'} href={'/blog/uses'}>
              tools, software and hardware
            </Link>{' '}
            that I use.
          </li>
          <li>
            Learn about{' '}
            <Link title={'Link to now page'} href={'/now'}>
              what I&apos;m currently being focused
            </Link>{' '}
            on in my life.
          </li>
        </ul>
      </CuriousParagraph>
    </Section>
  );
};
