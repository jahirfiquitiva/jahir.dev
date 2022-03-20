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
  margin: 0.6rem 0;
`;

const StackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  margin: 0.4rem 0;
`;

const sectionTwoLinks: Array<FooterLink> = [
  {
    text: 'About',
    title: 'Link to about page',
    href: '/about',
    gradientColor: 'blue-to-green',
  },
  {
    text: 'Blog',
    title: 'Link to blog posts page',
    href: '/blog',
    gradientColor: 'yellow-to-orange',
  },
  {
    text: 'Projects',
    title: 'Link to projects page',
    href: '/projects',
    gradientColor: 'red-to-purple',
  },
  {
    text: 'Contact',
    title: 'Link to contact page',
    href: '/contact',
    gradientColor: 'brand-to-blue',
  },
];

const sectionThreeLinks: Array<FooterLink> = [
  {
    title: 'Link to now page',
    href: '/now',
    text: 'Now',
    gradientColor: 'purple-to-brand',
  },
  {
    title: 'Link to uses page',
    href: '/blog/uses',
    text: 'Uses',
    gradientColor: 'yellow-to-orange',
  },
];

const sectionFourLinks: Array<FooterLink> = [
  {
    title: 'Link to donate page',
    href: '/donate',
    text: 'Donate',
    gradientColor: 'orange-to-red',
  },
  {
    title: 'Link to inspiration page',
    href: '/inspiration',
    text: 'Inspiration',
    gradientColor: 'brand-to-blue',
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
        <FooterLogoLink title={'Link to go back to home page'} href={'/'}>
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
        <small>
          <Link
            title={'Link to view website source code on GitHub'}
            href={'https://github.com/jahirfiquitiva/jahir.dev'}
          >
            View source code
          </Link>
          {' • '}
          <Link title={'Link to blog RSS feed'} href={'/feed.xml'}>
            RSS Feed
          </Link>
        </small>
      </FooterContent>
    </StyledFooter>
  );
};
