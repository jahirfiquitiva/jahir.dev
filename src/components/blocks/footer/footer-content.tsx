import tw from 'twin.macro';

import { FooterLink, transformLink } from './footer-link';

import { Component, ComponentProps } from '~/types';

const FooterGrid = tw.div`
  w-full
  overflow-hidden
  grid
  grid-cols-1
  max-w-3xl
  my-0 mx-auto
  gap-10
  xs:(grid-template-columns[auto 1fr])
  md:(grid-cols-2)
`;

const FooterGridWithin = tw(FooterGrid)`
  gap-0
  grid-row[2]
  xs:(grid-row[1])
  lg:(gap-x-10)
`;

const FooterSectionOne = tw.div`
  flex
  flex-col
  justify-center
  col-start-1
  col-end-2
  grid-row[1]
`;

const FooterSectionTwo = tw(FooterSectionOne)`
  hidden
  invisible
  pointer-events-none
  opacity-0

  xs:(col-start-1 col-end-2 grid-row[1])
  lg:(flex visible pointer-events-auto opacity-100 items-start row-start-1 row-end-3)
`;

const FooterSectionThree = tw(FooterSectionOne)`
  items-end
  content-end
  grid-row[1]
  xs:(col-start-2 col-end-3)
`;

const FooterSectionFour = tw(FooterSectionThree)`
  grid-row[2]
  xs:(col-start-2 col-end-3)
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
