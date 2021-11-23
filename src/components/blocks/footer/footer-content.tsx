import styled from '@emotion/styled';

import { FooterLink, transformLink } from './footer-link';

import { Component, ComponentProps, mediaQueries } from '~/types';

const FooterGrid = styled.div`
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  max-width: 768px;
  margin: 0 auto;
  gap: 1rem;

  ${mediaQueries.mobile.md} {
    grid-template-columns: auto 1fr;
  }

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FooterGridWithin = styled(FooterGrid)`
  gap: 0;
  grid-row: 2;

  ${mediaQueries.mobile.md} {
    grid-row: 1;
  }

  ${mediaQueries.tablet.lg} {
    column-gap: 1rem;
  }
`;

const FooterSectionOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1;
`;

const FooterSectionTwo = styled(FooterSectionOne)`
  display: none;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;

  ${mediaQueries.mobile.md} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row: 1;
  }

  ${mediaQueries.tablet.lg} {
    display: flex;
    visibility: visible;
    pointer-events: auto;
    opacity: 1;
    align-items: flex-start;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const FooterSectionThree = styled(FooterSectionOne)`
  align-items: flex-end;
  justify-content: flex-end;
  grid-row: 1;

  ${mediaQueries.mobile.md} {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const FooterSectionFour = styled(FooterSectionThree)`
  grid-row: 2;
  ${mediaQueries.mobile.md} {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

interface FooterGridProps extends ComponentProps {
  sectionTwoLinks?: Array<FooterLink>;
  sectionThreeLinks?: Array<FooterLink>;
  sectionFourLinks?: Array<FooterLink>;
}

export const FooterContent: Component<FooterGridProps> = (props) => {
  const { children, sectionTwoLinks, sectionThreeLinks, sectionFourLinks } =
    props;
  return (
    <FooterGrid>
      <FooterSectionOne>{children}</FooterSectionOne>
      <FooterGridWithin>
        <FooterSectionTwo>
          {sectionTwoLinks?.map(transformLink)}
        </FooterSectionTwo>
        <FooterSectionThree>
          {sectionThreeLinks?.map(transformLink)}
        </FooterSectionThree>
        <FooterSectionFour>
          {sectionFourLinks?.map(transformLink)}
        </FooterSectionFour>
      </FooterGridWithin>
    </FooterGrid>
  );
};
