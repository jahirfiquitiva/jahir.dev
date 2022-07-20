/* eslint-disable max-lines-per-function */
import { useMemo } from 'react';

import { Heading, Link, LinkButton } from '@/components/atoms';
import { OpenDoodle } from '@/components/compounds';
import { useHasMounted } from '@/hooks';
import type { FC, RandomPageImage } from '@/types';
import { styled } from '~/stitches';

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: 'calc($$verticalContentPadding / 2)',
  '@tablet-sm': {
    gap: '$$verticalContentPadding',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  '& > img': {
    gridRow: 1,
    '@tablet-sm': {
      gridRow: 1,
      gridColumn: 2,
    },
  },
});

const Texts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 'calc($$verticalContentPadding / 6)',
  '& ul': {
    m: 0,
    p: 0,
    ml: '$12',
    pl: '$4',
  },
});

export const DonateBenefitsAndPurpose: FC = () => {
  return (
    <Container>
      <Texts>
        <Heading as={'h4'}>Benefits</Heading>
        <p>
          Depending on the amount donated, you could earn one or some of the
          following:
        </p>

        <ul>
          <li>Get featured on this page</li>
          <li>Bug reports or feature requests prioritized</li>
          <li>A simple one-page static website</li>
          <li>Early and free access to future projects</li>
        </ul>

        <p>
          and{' '}
          <Link
            title={"Jahir Fiquitiva's GitHub Sponsors Page"}
            href={'https://github.com/sponsors/jahirfiquitiva/'}
          >
            even more
          </Link>
          …
        </p>
      </Texts>
      <Texts>
        <Heading as={'h4'}>Purpose</Heading>
        <p>What are the earnings going to be used for? </p>

        <ul>
          <li>Allow me to craft more open-source side projects</li>
          <li>Pay domain and platform services for different projects</li>
          <li>
            Help fund part of the expenses for future versions of{' '}
            <Link
              href={'/projects/boyaconf'}
              title={'BoyaConf conference page'}
            >
              BoyaConf
            </Link>
          </li>
          <li>
            Allow me to buy courses to keep learning and growing my skillset
          </li>
          <li>You name it (?)</li>
        </ul>
      </Texts>
    </Container>
  );
};
