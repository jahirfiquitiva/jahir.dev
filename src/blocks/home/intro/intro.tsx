import { Hello, HelloParagraph } from '~/blocks/home/hello';
import { SocialLinks } from '~/blocks/social-links';
import { ExtLink } from '~/elements/ext-link';
import { Component } from '~/elements/fc';

export const Intro: Component = () => {
  return (
    <>
      <Hello />
      <HelloParagraph>
        I consider myself a curious and inquisitive person, so on my spare time
        I like to work on{' '}
        <ExtLink to={'#projects'} newTab={false} title={'Link to projects'}>
          side projects
        </ExtLink>{' '}
        and try to constantly learn something new to improve my skillset.
      </HelloParagraph>
      <HelloParagraph>
        Learn more about me on{' '}
        <ExtLink
          to={'https://timeline.jahir.dev/'}
          title={'Link to my timeline'}
        >
          my timeline
        </ExtLink>
        .
      </HelloParagraph>
      <HelloParagraph>
        <b>You can find me on:</b>
      </HelloParagraph>
      <SocialLinks />
    </>
  );
};
