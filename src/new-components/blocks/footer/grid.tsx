import tw, { css } from 'twin.macro';
import { GradientSpan, Link } from '~/new-components/atoms/simple';

import { Component, ComponentProps, GradientOptions } from '~/types';

export const FooterGrid = tw.div`
  w-full
  overflow-hidden
  grid
  grid-cols-1
  max-w-3xl
  my-0 mx-auto
  gap-x-8
  gap-y-0

  xs:(grid-template-columns[1fr auto])
  lg:(grid-cols-3)
`;

export const FooterSectionOne = tw.div`
  flex
  flex-col
  justify-center
  col-start-1
  col-end-2

  xs:(row-start-1 row-end-3)
`;

export const FooterSectionTwo = tw(FooterSectionOne)`
  hidden
  invisible
  pointer-events-none
  select-none
  opacity-0

  xs:(col-start-2 col-end-3 grid-row[1])
  lg:(flex visible pointer-events-auto select-auto opacity-100 items-center row-start-1 row-end-3)
`;

export const FooterSectionThree = tw(FooterSectionOne)`
  items-end
  content-end

  xs:(col-start-2 col-end-3 grid-row[1])
  md:(col-start-3 col-end-4)
`;

export const FooterSectionFour = tw(FooterSectionThree)`
  xs:(col-start-2 col-end-3 grid-row[2])
  md:(col-start-3 col-end-4 grid-row[2])
`;

const FooterLinkComponent = tw(Link)`
  my-4
  [span.emoji]:(
    hidden
    invisible
    pointer-events-none
    select-none
    opacity-0

    sm:(
      inline-block
      visible
      pointer-events-auto
      select-auto
      opacity-100
      mr-6
    )
  )
`;

export interface FooterLink {
  title: string;
  href: string;
  emoji: string;
  text: string;
  gradientColor: GradientOptions;
}

interface FooterGridProps extends ComponentProps {
  sectionTwoLinks?: Array<FooterLink>;
  sectionThreeLinks?: Array<FooterLink>;
  sectionFourLinks?: Array<FooterLink>;
}

const getTailwindForGradientColor = (gradientColor: GradientOptions) => {
  switch (gradientColor) {
    case 'blue-to-green': {
      return tw`hocus:([span]:(underline text-decoration[underline solid var(--gradient-blue)]))`;
    }
    case 'green-to-yellow': {
      return tw`hocus:([span]:(underline text-decoration[underline solid var(--gradient-green)]))`;
    }
    case 'yellow-to-orange': {
      return tw`hocus:([span]:(underline text-decoration[underline solid var(--gradient-yellow)]))`;
    }
    case 'orange-to-red': {
      return tw`hocus:([span]:(underline text-decoration[underline solid var(--gradient-orange)]))`;
    }
    case 'red-to-purple': {
      return tw`hocus:([span]:(underline text-decoration[underline solid var(--gradient-red)]))`;
    }
    case 'purple-to-brand': {
      return tw`hocus:([span]:(underline text-decoration[underline solid var(--gradient-purple)]))`;
    }
    default: {
      return tw`hocus:([span]:(underline text-decoration[underline solid var(--gradient-brand)]))`;
    }
  }
};

const transformLink = (link: FooterLink) => {
  const { title, href, emoji, text, gradientColor } = link;
  return (
    <FooterLinkComponent
      title={title}
      href={href}
      underline={false}
      css={[getTailwindForGradientColor(gradientColor)]}
    >
      <span className={'emoji'}>{emoji}</span>
      <GradientSpan gradientColor={gradientColor} forceGradient>
        {text}
      </GradientSpan>
    </FooterLinkComponent>
  );
};

export const Footer: Component<FooterGridProps> = (props) => {
  const { children, sectionTwoLinks, sectionThreeLinks, sectionFourLinks } =
    props;
  return (
    <FooterGrid>
      <FooterSectionOne>{children}</FooterSectionOne>
      <FooterSectionTwo>{sectionTwoLinks?.map(transformLink)}</FooterSectionTwo>
      <FooterSectionThree>
        {sectionThreeLinks?.map(transformLink)}
      </FooterSectionThree>
      <FooterSectionFour>
        {sectionFourLinks?.map(transformLink)}
      </FooterSectionFour>
    </FooterGrid>
  );
};
