import styled from '@emotion/styled';

import { Heading, Image } from '~/components/atoms/simple';
import { Component, mediaQueries } from '~/types';

const NowHeading = styled(Heading)`
  margin-top: 1.2rem;
  ${mediaQueries.tablet.sm} {
    margin-top: 0;
  }
`;

const NowContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  margin-bottom: 1.2rem;

  ${mediaQueries.tablet.sm} {
    gap: 2.4rem;
    align-items: center;
  }
`;

const AnimojiContainer = styled.div`
  ${mediaQueries.tablet.sm} {
    margin: 0 auto;
  }
`;

const Animoji = styled(Image)`
  border-radius: 50%;
  background-color: var(--accent-animoji);
`;

export const Now: Component = () => {
  return (
    <>
      <NowContainer>
        <AnimojiContainer>
          <Animoji
            src={'/static/images/jahir/animoji.png'}
            alt={'Jahir as an Animoji'}
            size={144}
            quality={100}
            priority
          />
        </AnimojiContainer>
        <NowHeading
          size={'3'}
          shadowColor={'purple'}
          gradientColor={'purple-to-brand'}
        >
          Dashboard
        </NowHeading>
      </NowContainer>
    </>
  );
};
