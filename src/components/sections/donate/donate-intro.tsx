import styled from '@emotion/styled';

import { Heading, Link } from '~/components/atoms/simple';
import { DonationLinks } from '~/components/elements';
import { Component } from '~/types';

const Paragraph = styled.p`
  margin-top: 0.6rem;
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
      <Heading
        size={'3'}
        shadowColor={'orange'}
        gradientColor={'orange-to-red'}
      >
        Donate
      </Heading>

      <Paragraph>
        I strive to build great products, and most of them are{' '}
        <Link
          title={"Link to Jahir Fiquitiva's GitHub profile"}
          href={'https://github.com/jahirfiquitiva'}
        >
          open source
        </Link>
        . But this wouldn’t be possible without the help of my{' '}
        <Link title={'Link to supporters section'} href={'#thanks'}>
          supporters
        </Link>
        !
        <br />
        If you use any of{' '}
        <Link title={'Link to projects list'} href={'/#projects'}>
          my projects
        </Link>
        , please consider donating so that I can continue maintaining them.
        <br />
        Any amount will be highly appreciated. Thanks in advance! 🤗
      </Paragraph>

      <OptionsContainer>
        <p>
          <b>Donation options:</b>
        </p>
        <DonationLinks />
      </OptionsContainer>
    </section>
  );
};
