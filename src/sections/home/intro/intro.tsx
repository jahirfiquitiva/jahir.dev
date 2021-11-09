import styled from '@emotion/styled';

import { SocialLinks } from '~/blocks/social-links';
import Link from '~/new-components/atoms/simple/link';
import { Hello, HelloParagraph } from '~/sections/home/hello';
import { Component, mediaQueries } from '~/types';

const ParagraphsContainer = styled.div`
  margin-top: 0.8rem;
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 1.2rem;

  ${mediaQueries.tablet.sm} {
    grid-column-gap: 3rem;
    grid-row-gap: 0rem;
    grid-template-columns: 1fr 1fr;
  }
`;

const IntroParagraph = styled(HelloParagraph)`
  text-align: justify;
`;

const ExtraParagraph = styled(IntroParagraph)`
  margin: 0 0 1.2rem;
`;

export const Intro: Component = () => {
  return (
    <section id={'about'}>
      <ParagraphsContainer>
        <Hello />
        <IntroParagraph>
          I consider myself a curious and inquisitive person, so on my spare
          time I like to work on{' '}
          <Link href={'#projects'} title={'Link to projects'}>
            side projects
          </Link>{' '}
          and try to constantly learn something new to improve my skillset.
        </IntroParagraph>

        <IntroParagraph>
          When not coding, I like to watch TV shows and movies, play some games
          with friends or hang out with them. I&apos;m also{' '}
          <Link title={'Link to music page'} href={'/music'}>
            listening to music
          </Link>{' '}
          98% of the time.
        </IntroParagraph>
      </ParagraphsContainer>
      <div>
        <ExtraParagraph>
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
        </ExtraParagraph>
        <IntroParagraph>
          <b>You can also find me on:</b>
        </IntroParagraph>
        <SocialLinks />
      </div>
    </section>
  );
};
