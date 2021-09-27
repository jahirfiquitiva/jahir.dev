import styled from '@emotion/styled';

import { SocialLinks } from '~/blocks/social-links';
import { ExtLink } from '~/elements/ext-link';
import { Component } from '~/elements/fc';
import { Logo } from '~/elements/logo';
import { gradientToClassName } from '~/elements/props';
import { mediaQueries } from '~/types/viewports';

const FooterHomeLink = styled(ExtLink)`
  position: relative;
  display: flex;
  align-items: center;
  font-size: var(--base-font-size);

  & svg {
    max-width: 28px;
    margin-right: 0.6rem;
  }

  & > span {
    position: absolute;
    white-space: nowrap;
    left: 36px;
    flex: 1;
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

  & a {
    margin: 0.4rem 0;
    font-size: calc(var(--base-font-size) * 1.1);

    &:hover,
    &:focus {
      -webkit-text-decoration-style: solid;
      -webkit-text-decoration-color: var(
        --start-grad-color,
        var(--accent-dark)
      );
      text-decoration: underline solid
        var(--start-grad-color, var(--accent-dark));
      text-decoration-skip: edges;

      & span {
        -webkit-text-decoration-style: solid;
        -webkit-text-decoration-color: var(
          --start-grad-color,
          var(--accent-dark)
        );
        text-decoration: underline solid
          var(--start-grad-color, var(--accent-dark));
        text-decoration-skip: edges;
      }
    }
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
  max-width: var(--max-site-width);
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
  margin: 0.6rem 0 0.4rem;

  & > *:not(:last-child) {
    margin: 0.3rem 0.6rem 0.3rem 0;
  }

  ${mediaQueries.mobile.md} {
    margin: 0.6rem 0 0.6rem;

    & > *:not(:last-child) {
      margin: 0.6rem 0.6rem 0.6rem 0;
    }
  }

  ${mediaQueries.tablet.sm} {
    margin: 1rem 0 0.8rem;

    & > *:not(:last-child) {
      margin: 0.6rem 0.6rem 0.6rem 0;
    }
  }
`;

export const Footer: Component = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterGridSection>
          <FooterHomeLink to={'/'}>
            <Logo className={'logosvg'} />{' '}
            <span className={gradientToClassName('brand-to-blue', true)}>
              Jahir Fiquitiva
            </span>
          </FooterHomeLink>
          <FooterSocialLinks />
          <p className="small">Copyright © {new Date().getFullYear()}</p>
          <p className="small">All Rights Reserved</p>
        </FooterGridSection>
        <FooterGridSectionTwo>
          <ExtLink to={'/blog'}>
            📝&nbsp;&nbsp;
            <span className={gradientToClassName('blue-to-green', true)}>
              Blog
            </span>
          </ExtLink>
          <ExtLink to={'/uses'}>
            ⚡️&nbsp;&nbsp;
            <span className={gradientToClassName('yellow-to-orange', true)}>
              Uses
            </span>
          </ExtLink>
          <ExtLink to={'/donate'}>
            🧡&nbsp;&nbsp;
            <span className={gradientToClassName('red-to-purple', true)}>
              Donate
            </span>
          </ExtLink>
          <ExtLink to={'/contact'}>
            📬&nbsp;&nbsp;
            <span className={gradientToClassName('brand-to-blue', true)}>
              Contact
            </span>
          </ExtLink>
        </FooterGridSectionTwo>
        <FooterGridSectionThree>
          <ExtLink to={'/music'}>
            🎧&nbsp;&nbsp;
            <span className={gradientToClassName('blue-to-green', true)}>
              Music
            </span>
          </ExtLink>
          <ExtLink to={'/inspiration'}>
            🍀&nbsp;&nbsp;
            <span className={gradientToClassName('green-to-yellow', true)}>
              Inspiration
            </span>
          </ExtLink>
        </FooterGridSectionThree>
        <FooterGridSectionFour>
          <ExtLink to={'/thanks'}>
            🧡&nbsp;&nbsp;
            <span className={gradientToClassName('red-to-purple', true)}>
              Supporters
            </span>
          </ExtLink>
          <ExtLink to={'/coding'}>
            👨‍💻&nbsp;&nbsp;
            <span className={gradientToClassName('orange-to-red', true)}>
              Challenges
            </span>
          </ExtLink>
        </FooterGridSectionFour>
      </FooterGrid>
    </FooterContainer>
  );
};
