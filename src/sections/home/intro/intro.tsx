import styled from '@emotion/styled';

import { SocialLinks } from '~/blocks/social-links';
import { ExtLink } from '~/elements/base/ext-link';
import { Component } from '~/elements/base/fc';
import { Details } from '~/elements/simple/details';
import { Hello, HelloParagraph } from '~/sections/home/hello';
import { mediaQueries } from '~/types';

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
          <ExtLink to={'#projects'} newTab={false} title={'Link to projects'}>
            side projects
          </ExtLink>{' '}
          and try to constantly learn something new to improve my skillset.
        </IntroParagraph>

        <IntroParagraph>
          When not coding, I like to watch TV shows and movies, play some games
          with friends or hang out with them. I&apos;m also{' '}
          <ExtLink to={'/music'} newTab={false}>
            listening to music
          </ExtLink>{' '}
          98% of the time.
        </IntroParagraph>
      </ParagraphsContainer>
      <div>
        <ExtraParagraph>
          Learn more about me on{' '}
          <ExtLink
            to={'https://timeline.jahir.dev/'}
            title={'Link to my timeline'}
          >
            my timeline
          </ExtLink>{' '}
          and please don&apos;t hesitate to{' '}
          <ExtLink to={'contact'} newTab={false}>
            contact me
          </ExtLink>
          !
          <br />
          If curious, you can click on my name to hear its{' '}
          <ExtLink to={'/static/audio/name-pronunciation.mp3'}>
            pronunciation
          </ExtLink>
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
