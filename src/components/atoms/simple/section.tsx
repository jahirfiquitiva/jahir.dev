import tw from 'twin.macro';

export const Section = tw.section`
  flex
  flex-col
  flex-1
`;

export const CenteredSection = tw(Section)`
  justify-center
`;
