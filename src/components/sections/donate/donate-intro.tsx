import tw from 'twin.macro';

import { SectionHeading } from '~/components/atoms/complex';
import { Link } from '~/components/atoms/simple';
import { DonationLinks } from '~/components/elements';
import { Component } from '~/types';

const ParagraphsContainer = tw.div`
  grid
  grid-cols-1
  gap-8
  my-12
  md:(grid-cols-2 gap-10)
`;

export const DonateIntro: Component = () => {
  return (
    <section id={'donate'}>
      <SectionHeading
        size={'3'}
        shadowColor={'red'}
        gradientColor={'red-to-purple'}
        emoji={'🧡'}
      >
        Donate
      </SectionHeading>

      <ParagraphsContainer>
        <p>
          I try really hard to build great apps and provide the best possible
          experience and products to all users, and most of them are{' '}
          <Link
            title={"Link to Jahir Fiquitiva's GitHub profile"}
            href={'https://github.com/jahirfiquitiva'}
          >
            open source
          </Link>
          . However, that wouldn&apos;t be possible without the help and the
          motivation from{' '}
          <Link title={'Link to supporters page'} href={'#thanks'}>
            supporters
          </Link>
          !
        </p>

        <p>
          <b>
            If you like and/or use any of{' '}
            <Link title={'Link to projects list'} href={'/#projects'}>
              my projects
            </Link>
            , or want to support my work, please kindly consider donating, so I
            can continue maintaining and improving them as well as creating new
            ones.
          </b>
        </p>
      </ParagraphsContainer>

      <p>
        Whatever I receive, will be highly appreciated. Thanks in advance! 🤗
      </p>

      <div tw={'my-12'}>
        <p tw={'mb-6'}>
          <b>Donation options:</b>
        </p>
        <DonationLinks />
      </div>
    </section>
  );
};
