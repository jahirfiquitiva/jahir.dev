import styled from '@emotion/styled';

import { SocialLinks } from '~/blocks/social-links';
import { ExtLink } from '~/elements/base/ext-link';
import { Component } from '~/elements/base/fc';
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

const CollapsedIntro = styled.details`
  margin-bottom: 1.2rem;
  & summary {
    cursor: pointer;
  }

  & div:first-of-type {
    opacity: 0;
    height: 0;
    transition: all 0.25s ease-in-out;
  }

  &[open] div:first-of-type {
    height: unset;
    opacity: 1;
  }
`;

export const Intro: Component = () => {
  return (
    <section id={'about'}>
      <ParagraphsContainer>
        <Hello />
        <IntroParagraph>
          I am also currently working part time as an associate professor for a
          Colombian government program called{' '}
          <ExtLink to={'https://www.misiontic2022.gov.co/portal/'}>
            Misión TIC 2022
          </ExtLink>
          , where I teach to people of all ages and different background topics
          such as: git, javascript, react, nodejs, express and mongodb.
        </IntroParagraph>
        <IntroParagraph>
          Before getting into software development, I wanted to be a
          mechatronics engineer and build robots like transformers 😅. When I
          started programming my first robots, I realized what my real passion
          was.
        </IntroParagraph>
      </ParagraphsContainer>
      <CollapsedIntro>
        <summary>More about me...</summary>
        <ParagraphsContainer>
          <IntroParagraph>
            When not coding, I like to watch TV shows and movies, play some
            games with friends or hang out with them. I&apos;m also{' '}
            <ExtLink to={'/music'} newTab={false}>
              listening to music
            </ExtLink>{' '}
            98% of the time.
          </IntroParagraph>
          <IntroParagraph>
            I&apos;m passionate for crafting great-looking things.
            <br />
            Please don&apos;t hesitate to{' '}
            <ExtLink to={'contact'}>contact me</ExtLink>!
          </IntroParagraph>
          <IntroParagraph>
            I&apos;m currently taking the Beginner JavaScript course by Wes Bos:
            going back to basics aiming to understand things better.
          </IntroParagraph>
          <div>
            <IntroParagraph>
              I consider myself a curious and inquisitive person, so on my spare
              time I like to work on{' '}
              <ExtLink
                to={'#projects'}
                newTab={false}
                title={'Link to projects'}
              >
                side projects
              </ExtLink>{' '}
              and try to constantly learn something new to improve my skillset.
            </IntroParagraph>
            <IntroParagraph>
              Learn even more about me on{' '}
              <ExtLink
                to={'https://timeline.jahir.dev/'}
                title={'Link to my timeline'}
              >
                my timeline
              </ExtLink>
              .
            </IntroParagraph>
          </div>
        </ParagraphsContainer>
      </CollapsedIntro>
      <div>
        <IntroParagraph>
          <b>You can find me on:</b>
        </IntroParagraph>
        <SocialLinks />
      </div>
    </section>
  );
};
