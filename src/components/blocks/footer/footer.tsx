import styled from '@emotion/styled';

import { FooterContent } from './footer-content';
import { FooterLink } from './footer-link';

import { Link, GradientSpan, Logo } from '~/components/atoms/simple';
import { SocialLinks, Stack } from '~/components/elements';
import { Component } from '~/types';

const StyledFooter = styled.footer`
  display: block;
  overflow: hidden;
  border-top: 1px solid var(--divider);
  padding: 2.4rem 1rem;
  width: 100%;
  max-width: calc(768px + 1.6rem);
  margin: 1.2rem auto 0;
`;

const FooterLogoLink = styled(Link)`
  min-height: 42px;
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  font-size: calc(var(--base-font-size) * 1.1);
  font-family: var(--manrope-font);
  font-weight: 600;

  & > span {
    padding-top: 1px;
  }

  & > svg {
    display: inline-block;
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus {
    & > span {
      text-decoration: underline;
      text-decoration: underline solid var(--gradient-brand);
    }
  }
`;

const FooterSocialLinks = styled(SocialLinks)`
  margin: 0.3rem 0 0.2rem;
`;

const StackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  margin: 0.4rem 0;
`;

const SmallLinks = styled.small`
  opacity: 0.85;
`;

const sectionTwoLinks: Array<FooterLink> = [
  {
    text: 'About',
    href: '/about',
    gradientColor: 'blue-to-green',
  },
  {
    text: 'Blog',
    href: '/blog',
    gradientColor: 'yellow-to-orange',
  },
  {
    text: 'Projects',
    href: '/projects',
    gradientColor: 'red-to-purple',
  },
  {
    text: 'Contact',
    href: '/contact',
    gradientColor: 'brand-to-blue',
  },
];

const sectionThreeLinks: Array<FooterLink> = [
  {
    href: '/blog/uses',
    text: 'Uses',
    gradientColor: 'yellow-to-orange',
  },
  {
    href: '/donate',
    text: 'Donate',
    gradientColor: 'orange-to-red',
  },
];

const sectionFourLinks: Array<FooterLink> = [
  {
    href: '/inspiration',
    text: 'Inspiration',
    gradientColor: 'brand-to-blue',
  },
  {
    href: '/dashboard',
    text: 'Dashboard',
    gradientColor: 'purple-to-brand',
  },
];

export const Footer: Component = () => {
  return (
    <StyledFooter>
      <FooterContent
        sectionTwoLinks={sectionTwoLinks}
        sectionThreeLinks={sectionThreeLinks}
        sectionFourLinks={sectionFourLinks}
      >
        <FooterLogoLink title={'Home page'} href={'/'}>
          <Logo />
          <GradientSpan gradientColor={'brand-to-blue'} forceGradient>
            Jahir Fiquitiva
          </GradientSpan>
        </FooterLogoLink>
        <FooterSocialLinks />
        <StackContainer>
          <small>Website built using: </small>
          <Stack stack={['nextjs', 'typescript', 'styled components']} />
        </StackContainer>
        <SmallLinks>
          <Link
            title={'View website source code on GitHub'}
            href={'https://github.com/jahirfiquitiva/jahir.dev'}
          >
            View source code
          </Link>
          {' • '}
          <Link title={'Blog RSS feed'} href={'/feed.xml'}>
            RSS Feed
          </Link>
        </SmallLinks>
      </FooterContent>
    </StyledFooter>
  );
};
