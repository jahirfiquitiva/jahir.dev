import styled from '@emotion/styled';
import { Hello, HelloParagraph } from '~/blocks/home/hello';
import { SocialLinks } from '~/blocks/social-links';
import { ExtLink } from '~/elements/ext-link';
import { Component } from '~/elements/fc';
import { mediaQueries } from '~/types/viewports';

const ParagraphsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 1.2rem;

  ${mediaQueries.tablet.sm} {
    grid-column-gap: 3rem;
    grid-row-gap: 0;
    grid-template-columns: 1fr 1fr;
  }
`;

const IntroParagraph = styled(HelloParagraph)`
  text-align: justify;
`;

export const Intro: Component = () => {
  return (
    <section>
      <Hello />
      <ParagraphsContainer>
        <IntroParagraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          nostrum incidunt, odio, architecto non voluptates iure quod tempora
          odit nihil praesentium porro vero eaque dolores, laborum doloribus
          possimus? Soluta, expedita!
        </IntroParagraph>
        <div>
          <IntroParagraph>
            I consider myself a curious and inquisitive person, so on my spare
            time I like to work on{' '}
            <ExtLink to={'#projects'} newTab={false} title={'Link to projects'}>
              side projects
            </ExtLink>{' '}
            and try to constantly learn something new to improve my skillset.
          </IntroParagraph>
          <IntroParagraph>
            Learn more about me on{' '}
            <ExtLink
              to={'https://timeline.jahir.dev/'}
              title={'Link to my timeline'}
            >
              my timeline
            </ExtLink>
            .
          </IntroParagraph>
        </div>
        <div>
          <IntroParagraph>
            <b>You can find me on:</b>
          </IntroParagraph>
          <SocialLinks />
        </div>
      </ParagraphsContainer>
    </section>
  );
};
