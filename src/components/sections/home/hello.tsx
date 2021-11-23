import styled from '@emotion/styled';
import { useMemo } from 'react';
import useSound from 'use-sound';

import { Image, Heading, GradientSpan, Link } from '~/components/atoms/simple';
import { HelloHeading } from '~/components/elements';
import { useTheme } from '~/providers/theme';
import { Component, mediaQueries } from '~/types';

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);

  ${mediaQueries.tablet.sm} {
    grid-template-columns: 55% 1fr;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-row: 2;

  ${mediaQueries.tablet.sm} {
    grid-row: 1;
  }

  & > p:last-of-type {
    margin: 0.8rem 0 0.4rem;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  grid-row: 1;
  filter: drop-shadow(0 4px 3px rgba(var(--shadow-color), 0.12));

  ${mediaQueries.tablet.sm} {
    justify-content: flex-end;
    margin-bottom: 0;
  }
`;

const Photo = styled(Image)`
  border-radius: 50%;
  padding: 0.4rem !important;
  filter: drop-shadow(0 1px 2px rgba(var(--shadow-color), 0.04));
`;

const AudioButton = styled.button`
  padding: 0;
  margin: 0;
  font-family: var(--manrope-font);
  font-weight: 700;
  border: none;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-shadow: inherit;
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
        <p>
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
