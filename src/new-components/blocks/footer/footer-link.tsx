import tw from 'twin.macro';

import { Link, GradientSpan } from '~/new-components/atoms/simple';
import { GradientOptions } from '~/types';

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

export const transformLink = (link: FooterLink) => {
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
