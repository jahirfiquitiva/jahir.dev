import styled from '@emotion/styled';

import { Heading, Image } from '~/components/atoms/simple';
import { Component, mediaQueries } from '~/types';

const NowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;

  ${mediaQueries.tablet.sm} {
    gap: 1.6rem;
    align-items: center;
  }
`;

const NowHeading = styled(Heading)`
  align-self: flex-start;
  margin-top: 1.2rem;
  ${mediaQueries.tablet.sm} {
    margin-top: 0;
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
        <Animoji
          src={'/static/images/jahir/animoji.png'}
          alt={'Jahir as an Animoji'}
          size={144}
          quality={100}
          priority
        />
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
