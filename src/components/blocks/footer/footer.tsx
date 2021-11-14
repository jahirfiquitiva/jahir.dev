import tw from 'twin.macro';

import { FooterContent } from './footer-content';
import { FooterLink } from './footer-link';

import { Link, GradientSpan, Logo } from '~/components/atoms/simple';
import { SocialLinks, Stack } from '~/components/elements';
import { Component } from '~/types';

const StyledFooter = tw.footer`
  block
  overflow-hidden
  border
  border-b-0
  border-l-0
  border-r-0
  border-divider
  bg-primary
  py-20 px-10
`;

const sectionTwoLinks: Array<FooterLink> = [
  {
    title: 'Link to blog posts page',
    href: '/blog',
    emoji: '📝',
    text: 'Blog',
    gradientColor: 'blue-to-green',
  },
  {
    title: 'Link to uses page',
    href: '/uses',
    emoji: '⚡️',
    text: 'Uses',
    gradientColor: 'yellow-to-orange',
  },
  {
    title: 'Link to donate page',
    href: '/donate',
    emoji: '🧡',
    text: 'Donate',
    gradientColor: 'red-to-purple',
  },
  {
    title: 'Link to contact page',
    href: '/contact',
    emoji: '📬',
    text: 'Contact',
    gradientColor: 'brand-to-blue',
  },
];

const sectionThreeLinks: Array<FooterLink> = [
  {
    title: 'Link to dashboard page',
    href: '/dashboard',
    emoji: '✨',
    text: 'Dashboard',
    gradientColor: 'yellow-to-orange',
  },
  {
    title: 'Link to inspiration page',
    href: '/inspiration',
    emoji: '🌎',
    text: 'Inspiration',
    gradientColor: 'brand-to-blue',
  },
];

const sectionFourLinks: Array<FooterLink> = [
  {
    title: 'Link to supporters section',
    href: '/thanks',
    emoji: '🧡',
    text: 'Supporters',
    gradientColor: 'red-to-purple',
  },
  {
    title: 'Link to projects section',
    href: '/#projects',
    emoji: '👨‍💻',
    text: 'Projects',
    gradientColor: 'green-to-yellow',
  },
];

const FooterLogoLink = tw(Link)`
  min-h-button
  inline-flex
  self-start
  items-center
  justify-start
  gap-6
  text-sm
  [span]:(
    text-transparent
    bg-gradient-to-r
    bg-clip-text
    from-gradients-brand
    to-gradients-blue
  )
  [svg]:(inline-block w-15 h-15 text-gradients-brand)

  hocus:(
    [span]:(underline text-decoration[underline solid var(--gradient-brand)])
  )
`;

const FooterSocialLinks = tw(SocialLinks)`my-6 mx-0`;

const StackContainer = tw.div`flex items-center justify-start gap-6 my-4`;

export const Footer: Component = () => {
  return (
    <StyledFooter>
      <FooterContent
        sectionTwoLinks={sectionTwoLinks}
        sectionThreeLinks={sectionThreeLinks}
        sectionFourLinks={sectionFourLinks}
      >
        <FooterLogoLink title={'Link to go back to home page'} href={'/'}>
          <Logo />
          <GradientSpan gradientColor={'brand-to-blue'} forceGradient>
            Jahir Fiquitiva
          </GradientSpan>
        </FooterLogoLink>
        <FooterSocialLinks />
        <StackContainer>
          <small>Website built using: </small>
          <Stack
            stack={[
              'react',
              'nextjs',
              'typescript',
              'styled components',
              'tailwind',
            ]}
          />
        </StackContainer>
        <small>
          <Link
            title={'Link to view website source code on GitHub'}
            href={'https://github.com/jahirfiquitiva/jahir.dev'}
          >
            View source code
          </Link>
        </small>
      </FooterContent>
    </StyledFooter>
  );
};
