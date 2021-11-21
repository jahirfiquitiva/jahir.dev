import styled from '@emotion/styled';

import { Link } from '~/components/atoms/simple';
import { SocialLinks } from '~/components/elements';
import { Component, mediaQueries } from '~/types';

const ParagraphsContainer = styled.div`
  margin-top: 0.8rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  text-align: justify;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 1.2rem;
  }

  & > p:first-of-type {
    padding-right: 0;
    ${mediaQueries.tablet.sm} {
      padding-right: 2rem;
    }
  }
`;

const SecondPart = styled.div`
  margin: 1.2rem 0 0.6rem;

  & > p:last-of-type {
    margin-top: 1rem;

    & + div {
      margin-top: 0.6rem;
    }
  }
`;

export const Intro: Component = () => {
  return (
    <>
      <ParagraphsContainer>
        <p>
          I consider myself a curious and inquisitive person, so on my spare
          time I like to work on{' '}
          <Link href={'#projects'} title={'Link to projects'}>
            side projects
          </Link>{' '}
          and try to constantly learn something new to improve my skillset.
        </p>

        <p>
          When not coding, I like to watch TV shows and movies, play some games
          with friends or hang out with them. I&apos;m also{' '}
          <Link title={'Link to music page'} href={'/music'}>
            listening to music
          </Link>{' '}
          98% of the time.
        </p>
      </ParagraphsContainer>
      <SecondPart>
        <p>
          Learn more about me on{' '}
          <Link
            title={"Link to Jahir's polywork timeline"}
            href={'https://timeline.jahir.dev/'}
          >
            my timeline
          </Link>{' '}
          and please don&apos;t hesitate to{' '}
          <Link title={'Link to contact page'} href={'/contact'}>
            contact me
          </Link>
          !
          <br />
          If curious, you can click on my name to hear its{' '}
          <Link
            title={"Link to Jahir's name pronunciation audio file"}
            href={'/static/audio/name-pronunciation.mp3'}
          >
            pronunciation
          </Link>
          .
        </p>
        <p>
          <b>You can also find me on:</b>
        </p>
        <SocialLinks />
      </SecondPart>
    </>
  );
};
