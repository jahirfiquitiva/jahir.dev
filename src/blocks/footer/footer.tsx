/* eslint-disable max-lines */
import styled from '@emotion/styled';
import { text } from 'stream/consumers';

import { Link, GradientSpan, Logo } from '~/new-components/atoms/simple';
import {
  Footer as FooterContent,
  FooterGrid,
  FooterSectionOne,
  FooterSectionTwo,
  FooterSectionThree,
  FooterSectionFour,
  FooterLink,
} from '~/new-components/blocks';
import { SocialLinks, Stack } from '~/new-components/elements';
import { Component, mediaQueries } from '~/types';
import buildStyles from '~/utils/build-styles';

const gradientUnderlineStyles = `
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color: var(--start-grad-color, var(--accent-dark));
  text-decoration: underline solid var(--start-grad-color, var(--accent-dark));
  text-decoration-skip: edges;
`;

const FooterHomeLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  font-size: var(--font-size-xs);

  &:hover,
  &:focus {
    ${gradientUnderlineStyles}

    & * {
      ${gradientUnderlineStyles}
    }
  }

  & svg {
    min-width: 24px;
    max-width: 28px;
    margin-right: 0.6rem;
  }

  & > span {
    position: absolute;
    display: inline-block;
    white-space: nowrap;
    left: 36px;
  }

  ${mediaQueries.mobile.md} {
    font-size: calc(var(--base-font-size) * 1.15);
    & > span {
      position: relative;
      left: 0;
    }
  }

  ${mediaQueries.tablet.sm} {
    font-size: calc(var(--base-font-size) * 1.25);
  }
`;

const FooterContainer = styled.footer`
  overflow: hidden;
  display: block;
  border-top: 1px solid var(--divider);
  background-color: var(--primary);
  padding: 2rem 1rem;

  ${mediaQueries.tablet.sm} {
    padding: 3rem 1rem;
  }
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

export const Footer: Component = () => {
  return (
    <FooterContainer>
      <FooterContent
        sectionTwoLinks={sectionTwoLinks}
        sectionThreeLinks={sectionThreeLinks}
        sectionFourLinks={sectionFourLinks}
      >
        <FooterHomeLink
          title={'Link to home page'}
          href={'/'}
          underline={false}
          style={buildStyles({
            textDecoration: 'underline solid var(--gradient-brand)',
          })}
        >
          <Logo className={'logosvg'} />{' '}
          <GradientSpan gradientColor={'brand-to-blue'} forceGradient>
            Jahir Fiquitiva
          </GradientSpan>
        </FooterHomeLink>
        <SocialLinks />
        <p className={'small'}>Built with </p>
        <Stack
          stack={['nextjs', 'typescript', 'styled components', 'tailwind']}
        />
        <p className={'small'}>
          <Link
            title={'Link to view website source code on GitHub'}
            href={'https://github.com/jahirfiquitiva/jahir.dev'}
            underline
          >
            View source code
          </Link>
        </p>
      </FooterContent>
    </FooterContainer>
  );
};
