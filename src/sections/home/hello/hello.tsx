import styled from '@emotion/styled';
import Image from 'next/image';
import { useRef } from 'react';

import { HelloHeading } from '~/components/hello-heading';
import { ExtLink } from '~/elements/base/ext-link';
import { Component } from '~/elements/base/fc';
import { gradientToClassName } from '~/elements/props';
import { Heading } from '~/elements/simple/heading';
import { mediaQueries } from '~/types';

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

const ClickableName = styled.span`
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
            className={gradientToClassName('brand-to-blue')}
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
          <ExtLink to={'https://www.google.com/maps/place/Colombia/@4,-72z/'}>
            Colombia 🇨🇴
          </ExtLink>
        </HeadingParagraph>
      </HeadingContainer>

      <ImageContainer>
        <Image
          src={'/static/images/jahir/jahir.jpg'}
          alt={"Jahir's Photo"}
          height={180}
          width={180}
        />
      </ImageContainer>
    </>
  );
};
