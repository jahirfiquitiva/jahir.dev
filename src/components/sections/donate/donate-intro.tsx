import styled from '@emotion/styled';

import { SectionHeading } from '~/components/atoms/complex';
import { Link } from '~/components/atoms/simple';
import { DonationLinks } from '~/components/elements';
import { Component, mediaQueries } from '~/types';

const ParagraphsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.8rem;
  margin: 1.2rem 0;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
`;

const OptionsContainer = styled.div`
  margin: 1.2rem 0;
  & > p {
    margin-bottom: 0.6rem;
  }
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

      <OptionsContainer>
        <p>
          <b>Donation options:</b>
        </p>
        <DonationLinks />
      </OptionsContainer>
    </section>
  );
};
