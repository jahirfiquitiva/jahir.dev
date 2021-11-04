/* eslint-disable max-lines */
import styled from '@emotion/styled';

import { SocialLinks } from '~/blocks/social-links';
import { ExtLink } from '~/elements/base/ext-link';
import { Component } from '~/elements/base/fc';
import { Logo } from '~/elements/simple/logo';
import { gradientToClassName } from '~/elements/props';
import { mediaQueries } from '~/types';
import buildStyles from '~/utils/build-styles';

const gradientUnderlineStyles = `
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color: var(--start-grad-color, var(--accent-dark));
  text-decoration: underline solid var(--start-grad-color, var(--accent-dark));
  text-decoration-skip: edges;
`;

const FooterHomeLink = styled(ExtLink)`
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

const FooterGridSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column-start: 1;
  grid-column-end: 2;

  ${mediaQueries.mobile.md} {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  ${mediaQueries.tablet.sm} {
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const FooterGridLink = styled(ExtLink)`
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

const FooterGridSectionTwo = styled(FooterGridSection)`
  display: none;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  align-items: flex-end;

  ${mediaQueries.mobile.md} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row: 1;
  }

  ${mediaQueries.tablet.lg} {
    display: flex;
    visibility: visible;
    pointer-events: auto;
    opacity: 1;
    align-items: center;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const FooterGridSectionThree = styled(FooterGridSectionTwo)`
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

const FooterGridSectionFour = styled(FooterGridSectionTwo)`
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

const FooterGrid = styled.div`
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  max-width: calc(var(--max-site-width) - 0.8rem);
  margin: 0 auto;
  grid-column-gap: 0.8rem;
  grid-row-gap: 0;

  ${mediaQueries.mobile.md} {
    grid-template-columns: 1fr auto;
  }

  ${mediaQueries.tablet.lg} {
    grid-template-columns: repeat(3, 1fr);
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

const FooterSocialLinks = styled(SocialLinks)`
  margin: 1.2rem 0 0.4rem;

  ${mediaQueries.mobile.md} {
    margin: 1.2rem 0 0.6rem;
    & > * {
      margin-bottom: 0.5rem;
    }
    & > *:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  ${mediaQueries.tablet.sm} {
    margin: 1.2rem 0 0.8rem;
    & > * {
      margin-bottom: 0.8rem;
    }
    & > *:not(:last-child) {
      margin-right: 0.8rem;
    }
  }
`;

export const Footer: Component = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterGridSection>
          <FooterHomeLink
            to={'/'}
            newTab={false}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-a)' })}
          >
            <Logo className={'logosvg'} />{' '}
            <span className={gradientToClassName('brand-to-blue', true)}>
              Jahir Fiquitiva
            </span>
          </FooterHomeLink>
          <FooterSocialLinks />
          <p className={'small'}>Copyright © {new Date().getFullYear()}</p>
          <p className={'small'}>All Rights Reserved</p>
        </FooterGridSection>
        <FooterGridSectionTwo>
          <FooterGridLink
            to={'/blog'}
            newTab={false}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-b)' })}
          >
            <span className={gradientToClassName('blue-to-green', true)}>
              Blog
            </span>
          </FooterGridLink>
          <FooterGridLink
            to={'/dashboard'}
            newTab={false}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-d)' })}
          >
            <span className={gradientToClassName('yellow-to-orange', true)}>
              Dashboard
            </span>
          </FooterGridLink>
          <FooterGridLink
            to={'/donate'}
            newTab={false}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-e)' })}
          >
            <span className={gradientToClassName('orange-to-red', true)}>
              Donate
            </span>
          </FooterGridLink>
          <FooterGridLink
            to={'/contact'}
            newTab={false}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-f)' })}
          >
            <span className={gradientToClassName('red-to-purple', true)}>
              Contact
            </span>
          </FooterGridLink>
        </FooterGridSectionTwo>
        <FooterGridSectionThree>
          <FooterGridLink
            to={'/uses'}
            newTab={false}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-c)' })}
          >
            <span className={gradientToClassName('green-to-yellow', true)}>
              Uses
            </span>
          </FooterGridLink>
          <FooterGridLink
            to={'/inspiration'}
            newTab={false}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-a)' })}
          >
            <span className={gradientToClassName('brand-to-blue', true)}>
              Inspiration
            </span>
          </FooterGridLink>
        </FooterGridSectionThree>
        <FooterGridSectionFour>
          <FooterGridLink
            to={'/thanks'}
            newTab={false}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-e)' })}
          >
            <span className={gradientToClassName('orange-to-red', true)}>
              Supporters
            </span>
          </FooterGridLink>
          <FooterGridLink
            to={'/#projects'}
            newTab={false}
            style={buildStyles({ '--start-grad-color': 'var(--gradients-c)' })}
          >
            <span className={gradientToClassName('green-to-yellow', true)}>
              Projects
            </span>
          </FooterGridLink>
        </FooterGridSectionFour>
      </FooterGrid>
    </FooterContainer>
  );
};
