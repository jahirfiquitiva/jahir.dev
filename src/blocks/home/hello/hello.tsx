import styled from '@emotion/styled';
import Image from 'next/image';

import { HelloHeading } from '~/components/hello-heading';
import { ExtLink } from '~/elements/ext-link';
import { Component } from '~/elements/fc';
import { Heading } from '~/elements/heading';
import { gradientToClassName } from '~/elements/props';

const HelloContainer = styled.div`
  margin-top: 2.6rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media (min-width: 960px) {
    grid-template-columns: 1fr auto;
  }
`;

const HeadingContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const HeadingParagraph = styled.p`
  margin-top: 1.2rem;
`;

export const HelloParagraph = styled(HeadingParagraph)`
  margin: 0.6rem 0;
`;

const ImageContainer = styled(HeadingContainer)`
  align-items: center;
  padding: 0 2rem 0.8rem;

  & * {
    border-radius: 50%;
    filter: drop-shadow(0 4px 4px var(--toolbar-shadow-c));
  }
`;

export const Hello: Component = () => {
  return (
    <HelloContainer>
      <HeadingContainer>
        <HelloHeading />
        <Heading size={'3'} shadowColor={'blue'}>
          I am{' '}
          <span className={gradientToClassName('brand-to-blue')}>
            Jahir Fiquitiva
          </span>
        </Heading>
        <HeadingParagraph>
          Passionate and creative full-stack software engineer from{' '}
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
    </HelloContainer>
  );
};
