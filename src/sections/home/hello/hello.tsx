import styled from '@emotion/styled';
import Image from 'next/image';

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

  ${mediaQueries.tablet.sm} {
    grid-row: 1;
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

export const Hello: Component = () => {
  return (
    <>
      <HeadingContainer>
        <HelloHeading />
        <Heading size={'3'} shadowColor={'blue'}>
          I am{' '}
          <span className={gradientToClassName('brand-to-blue')}>
            Jahir Fiquitiva
          </span>
        </Heading>
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
