import styled from '@emotion/styled';
import { useRef, useMemo } from 'react';

import {
  GradientSpan,
  Heading,
  Image,
  Link,
} from '~/new-components/atoms/simple';
import { HelloHeading } from '~/new-components/elements';
import { useTheme } from '~/providers/theme';
import { Component, mediaQueries } from '~/types';

const HeadingContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-row: 2;
  text-align: justify;
  margin-bottom: 1.2rem;

  ${mediaQueries.tablet.sm} {
    grid-row: 1;
    text-align: start;
  }
`;

const HeadingParagraph = styled.p`
  margin-top: 1.2rem;
`;

export const HelloParagraph = styled(HeadingParagraph)`
  margin: 0.6rem 0;
`;

const ImageContainer = styled(HeadingContainer)`
  align-items: center;
  padding: 0 0.4rem 0.4rem 0;
  grid-row: 1;

  & div:first-of-type {
    overflow: unset !important;
  }

  & img {
    border-radius: 50%;
    filter: drop-shadow(0 3px 3px var(--toolbar-shadow-c));
  }

  ${mediaQueries.tablet.sm} {
    align-items: flex-end;
  }
`;

const ClickableName = styled(GradientSpan)`
  cursor: pointer;
`;

const NameAudio = styled.audio`
  height: 0;
  width: 0;
  opacity: 0;
  display: none;
  pointer-events: none;
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
    <>
      <HeadingContainer>
        <HelloHeading />
        <Heading size={'3'} shadowColor={'blue'}>
          I am{' '}
          <ClickableName
            gradientColor={'brand-to-blue'}
            forceGradient={shouldForceGradient}
            onClick={playName}
          >
            Jahir Fiquitiva
          </ClickableName>
        </Heading>
        <NameAudio ref={audioRef}>
          <source
            src={'/static/audio/name-pronunciation.mp3'}
            type={'audio/mpeg'}
          />
        </NameAudio>
        <HeadingParagraph>
          Passionate and creative full-stack software engineer based in{' '}
          <Link
            title={'Link to Colombia on Google Maps'}
            href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
          >
            Colombia 🇨🇴
          </Link>
        </HeadingParagraph>
      </HeadingContainer>

      <ImageContainer>
        <Image
          src={'/static/images/jahir/jahir-hd.jpg'}
          alt={"Jahir's Photo"}
          size={180}
        />
      </ImageContainer>
    </>
  );
};
