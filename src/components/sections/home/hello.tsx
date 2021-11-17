import { useRef, useMemo } from 'react';
import tw from 'twin.macro';

import { Image, Heading, GradientSpan, Link } from '~/components/atoms/simple';
import { HelloHeading } from '~/components/elements';
import { useTheme } from '~/providers/theme';
import { Component } from '~/types';

const Container = tw.div`
  grid
  grid-cols-1

  md:(grid-template-columns[55% 1fr])
`;

const ContentContainer = tw.div`
  flex
  flex-col
  justify-end
  grid-row[2]
  md:(grid-row[1])
`;

const NameAudio = tw.audio`
  h-0 w-0
  opacity-0
  hidden invisible
  pointer-events-none
  select-none
`;

const PhotoContainer = tw.div`
  flex
  justify-start
  filter
  drop-shadow
  mb-8
  grid-row[1]
  md:(justify-end mb-0)
`;

const Photo = tw(Image)`
  rounded-half
  filter
  drop-shadow-md
  p-4!
  [img]:(filter drop-shadow)
`;

export const Hello: Component = () => {
  const { isDark, themeReady } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const shouldForceGradient = useMemo<boolean>(() => {
    if (!themeReady) return false;
    return isDark;
  }, [themeReady, isDark]);

  const playName = () => {
    try {
      audioRef?.current?.play();
    } catch (e) {}
  };

  return (
    <Container>
      <ContentContainer>
        <HelloHeading />
        <Heading size={'3'} shadowColor={'blue'}>
          I am{' '}
          <GradientSpan
            gradientColor={'brand-to-blue'}
            forceGradient={shouldForceGradient}
            onClick={playName}
            tw={'cursor-pointer'}
          >
            Jahir Fiquitiva
          </GradientSpan>
          <NameAudio ref={audioRef}>
            <source
              src={'/static/audio/name-pronunciation.mp3'}
              type={'audio/mpeg'}
            />
          </NameAudio>
        </Heading>
        <p tw={'mt-8 mb-4'}>
          Passionate and creative full-stack software engineer based in{' '}
          <Link
            title={'Link to Colombia on Google Maps'}
            href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
          >
            Colombia 🇨🇴
          </Link>
        </p>
      </ContentContainer>
      <PhotoContainer>
        <Photo
          src={'/static/images/jahir/jahir-hd.jpg'}
          alt={"Jahir's Photo"}
          size={168}
          priority
        />
      </PhotoContainer>
    </Container>
  );
};
