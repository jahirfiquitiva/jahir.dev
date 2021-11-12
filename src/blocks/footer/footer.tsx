/* eslint-disable max-lines */
import styled from '@emotion/styled';

import { Link, GradientSpan, Logo } from '~/new-components/atoms/simple';
import { FooterGrid, FooterSectionOne, FooterSectionTwo } from '~/new-components/blocks';
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

const FooterGridLink = styled(Link)`
  margin: 0.4rem 0;
  font-size: calc(var(--base-font-size) * 1.1);

  &:hover,
  &:focus {
    ${gradientUnderlineStyles}

    & * {
      ${gradientUnderlineStyles}
    }
  }
`;

const FooterGridSectionThree = styled(FooterSectionTwo)`
  display: flex;
  visibility: visible;
  pointer-events: auto;
  opacity: 1;
  align-items: flex-end;
  justify-content: flex-end;

  ${mediaQueries.mobile.md} {
    align-items: flex-end;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row: 1;
  }

  ${mediaQueries.tablet.sm} {
    align-items: flex-end;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row: 1;
  }
`;

const FooterGridSectionFour = styled(FooterSectionTwo)`
  display: flex;
  visibility: visible;
  pointer-events: auto;
  opacity: 1;
  align-items: flex-end;
  justify-content: flex-start;

  ${mediaQueries.mobile.md} {
    align-items: flex-end;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row: 2;
  }

  ${mediaQueries.tablet.sm} {
    align-items: flex-end;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row: 2;
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

export const Footer: Component = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterSectionOne>
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
        </FooterSectionOne>
        <FooterSectionTwo>
          <FooterGridLink
            title={'Link to blog page'}
            href={'/blog'}
            style={buildStyles({
              textDecoration: 'underline solid var(--gradient-blue)',
            })}
            underline={false}
          >
            <span>📝&nbsp;&nbsp;</span>
            <GradientSpan gradientColor={'blue-to-green'} forceGradient>
              Blog
            </GradientSpan>
          </FooterGridLink>
          <FooterGridLink
            title={'Link to uses page'}
            href={'/uses'}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-d)' })}
          >
            <span>⚡️&nbsp;&nbsp;</span>
            <GradientSpan gradientColor={'yellow-to-orange'} forceGradient>
              Uses
            </GradientSpan>
          </FooterGridLink>
          <FooterGridLink
            title={'Link to donate page'}
            href={'/donate'}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-f)' })}
          >
            <span>🧡&nbsp;&nbsp;</span>
            <GradientSpan gradientColor={'red-to-purple'} forceGradient>
              Donate
            </GradientSpan>
          </FooterGridLink>
          <FooterGridLink
            title={'Link to page page'}
            href={'/contact'}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-a)' })}
          >
            <span>📬&nbsp;&nbsp;</span>
            <GradientSpan gradientColor={'brand-to-blue'} forceGradient>
              Contact
            </GradientSpan>
          </FooterGridLink>
        </FooterSectionTwo>
        <FooterGridSectionThree>
          <FooterGridLink
            title={'Link to dashboard page'}
            href={'/dashboard'}
            style={buildStyles({
              textDecoration: 'underline solid var(--gradient-yellow)',
            })}
            underline={false}
          >
            <span>✨&nbsp;&nbsp;</span>
            <GradientSpan gradientColor={'yellow-to-orange'} forceGradient>
              Dashboard
            </GradientSpan>
          </FooterGridLink>
          <FooterGridLink
            title={'Link to inpsiration page'}
            href={'/inspiration'}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-a)' })}
          >
            <span>🌎&nbsp;&nbsp;</span>
            <GradientSpan gradientColor={'brand-to-blue'} forceGradient>
              Inspiration
            </GradientSpan>
          </FooterGridLink>
        </FooterGridSectionThree>
        <FooterGridSectionFour>
          <FooterGridLink
            title={'Link to supporters page'}
            href={'/thanks'}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-f)' })}
          >
            <span>🧡&nbsp;&nbsp;</span>
            <GradientSpan gradientColor={'red-to-purple'} forceGradient>
              Supporters
            </GradientSpan>
          </FooterGridLink>
          <FooterGridLink
            title={'Link to projects page'}
            href={'/#projects'}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-c)' })}
          >
            <span>👨‍💻&nbsp;&nbsp;</span>
            <GradientSpan gradientColor={'green-to-yellow'} forceGradient>
              Projects
            </GradientSpan>
          </FooterGridLink>
        </FooterGridSectionFour>
      </FooterGrid>
    </FooterContainer>
  );
};
