import { useMemo } from 'react';
import tw from 'twin.macro';
import useSound from 'use-sound';

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

const PhotoContainer = tw.div`
  flex
  justify-start
  mb-8
  grid-row[1]
  md:(justify-end mb-0)
  filter[drop-shadow(0 4px 3px rgba(var(--shadow-color), 0.12))]
`;

const Photo = tw(Image)`
  rounded-half
  p-4!
  filter[drop-shadow(0 1px 2px rgba(var(--shadow-color), 0.04))]
`;

const AudioButton = tw.button`
  p-0 m-0
  font-manrope
  font-bold
  border-none
  bg-transparent
  cursor-pointer
  text-shadow[inherit]
`;

const audioButtonTitle = "Press to hear Jahir's name pronunciation";

export const Hello: Component = () => {
  const { isDark, themeReady } = useTheme();
  const [playName] = useSound('/static/audio/name-pronunciation.mp3', {
    interrupt: true,
  });

  const shouldForceGradient = useMemo<boolean>(() => {
    if (!themeReady) return false;
    return isDark;
  }, [themeReady, isDark]);

  return (
    <Container>
      <ContentContainer>
        <HelloHeading />
        <Heading size={'3'} shadowColor={'blue'}>
          I am{' '}
          <AudioButton
            title={audioButtonTitle}
            name={audioButtonTitle}
            aria-label={audioButtonTitle}
            onClick={() => {
              playName();
            }}
          >
            <GradientSpan
              gradientColor={'brand-to-blue'}
              forceGradient={shouldForceGradient}
            >
              Jahir Fiquitiva
            </GradientSpan>
          </AudioButton>
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
