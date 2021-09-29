import styled from '@emotion/styled';

import { CenteredSection } from '~/blocks/section';
import { SectionHeading } from '~/components/section-heading';
import { ExtLink } from '~/elements/base/ext-link';
import { Component, ComponentProps } from '~/elements/base/fc';
import {
  MasonryGrid,
  MasonryBreakpoints,
} from '~/elements/complex/masonry-grid';
import { viewports } from '~/types';
import { CodingChallenge } from '~/types/challenge';

const ChallengesGrid = styled(MasonryGrid)`
  margin: var(--content-bottom-margin) 0;
`;

const ChallengeItem = styled.li`
  margin-inline-start: 0.4rem;
`;

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints[viewports.default] = 1;
masonryBreakpoints[viewports.tablet.lg] = 2;

interface ChallengesProps extends ComponentProps {
  challenges?: Array<CodingChallenge>;
}

export const Challenges: Component<ChallengesProps> = (props) => {
  const { challenges } = props;
  return (
    <CenteredSection>
      <SectionHeading
        size={'3'}
        shadowColor={'orange'}
        gradientColor={'orange-to-red'}
        emoji={'👨‍💻'}
      >
        Coding Challenges
      </SectionHeading>
      <ChallengesGrid breakpoints={masonryBreakpoints} gap={'1rem'}>
        {challenges?.map((challenge, i) => {
          return (
            <ChallengeItem key={i}>
              <ExtLink to={`/coding/${challenge.slug}`} newTab={false}>
                {challenge?.title}
              </ExtLink>
            </ChallengeItem>
          );
        })}
      </ChallengesGrid>
    </CenteredSection>
  );
};
