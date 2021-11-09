import styled from '@emotion/styled';

import { BmacButton, GitHubButton, PayPalButton } from '~/components/buttons';
import { SectionHeading } from '~/components/section-heading';
import ButtonGroup from '~/new-components/atoms/complex/button-group';
import Link from '~/new-components/atoms/simple/link';
import { Component, mediaQueries } from '~/types';

const ParagraphsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.2rem;
  }
`;

const Paragraph = styled.p`
  margin: 0.8rem 0;
`;

const DonationOptionsContainer = styled.div`
  margin: 2rem 0 0;
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
        <Paragraph>
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
        </Paragraph>

        <Paragraph>
          <b>
            If you like and/or use any of{' '}
            <Link title={'Link to projects list'} href={'/#projects'}>
              my projects
            </Link>
            , or want to support my work, please kindly consider donating, so I
            can continue maintaining and improving them as well as creating new
            ones.
          </b>
        </Paragraph>
      </ParagraphsContainer>

      <Paragraph>
        Whatever I receive, will be highly appreciated. Thanks in advance! 🤗
      </Paragraph>

      <DonationOptionsContainer>
        <Paragraph>
          <b>Donation options:</b>
        </Paragraph>
        <ButtonGroup>
          <GitHubButton>GitHub Sponsors</GitHubButton>
          <BmacButton>Buy me a Pizza</BmacButton>
          <PayPalButton>PayPal</PayPalButton>
        </ButtonGroup>
      </DonationOptionsContainer>
    </section>
  );
};
