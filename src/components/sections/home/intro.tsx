import tw from 'twin.macro';

import { Link } from '~/components/atoms/simple';
import { SocialLinks } from '~/components/elements';
import { Component } from '~/types';

const ParagraphsContainer = tw.div`
  mt-8
  grid
  grid-cols-1
  gap-10
  text-justify
  md:(grid-cols-2 mt-12)
  [p:first-of-type]:(pr-0 md:(pr-20))
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
      <div tw={'mt-12 mb-6'}>
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
        <p tw={'mt-10'}>
          <b>You can also find me on:</b>
        </p>
        <SocialLinks tw={'my-6'} />
      </div>
    </>
  );
};
