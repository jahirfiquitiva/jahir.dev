import { Heading, Section } from '@/components/core';
import type { FC } from '@/types';

import { InspirationGrid } from './InspirationGrid';

export const Inspiration: FC = () => {
  return (
    <Section
      id={'inspiration'}
      css={{ gap: 'calc($$verticalContentPadding / 1.5)' }}
    >
      <Heading as={'h2'} shadow={'brand'} gradient={'brand-to-blue'}>
        Inspiration
      </Heading>
      <p>
        These are some people I admire or sites I like that might have even
        somehow inspired part of my website or helped with some personal
        projects. 👏
      </p>
      <InspirationGrid />
    </Section>
  );
};
