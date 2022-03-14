import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Link, GradientSpan } from '~/components/atoms/simple';
import { GradientOptions, mediaQueries } from '~/types';

const FooterLinkComponent = styled(Link)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0.4rem 0;

  & > span.emoji {
    display: none;
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    font-weight: normal;

    ${mediaQueries.mobile.lg} {
      display: inline-block;
      visibility: visible;
      pointer-events: auto;
      opacity: 1;
      margin-right: 0.6rem;
    }
  }
`;

export interface FooterLink {
  title: string;
  href: string;
  text: string;
  gradientColor: GradientOptions;
  emoji?: string;
}

const getStylesForUnderline = (gradientColor: GradientOptions) => {
  let gradientColorName = 'brand';
  switch (gradientColor) {
    case 'blue-to-green': {
      gradientColorName = 'blue';
      break;
    }
    case 'green-to-yellow': {
      gradientColorName = 'green';
      break;
    }
    case 'yellow-to-orange': {
      gradientColorName = 'yellow';
      break;
    }
    case 'orange-to-red': {
      gradientColorName = 'orange';
      break;
    }
    case 'red-to-purple': {
      gradientColorName = 'red';
      break;
    }
    case 'purple-to-brand': {
      gradientColorName = 'purple';
      break;
    }
    default: {
      gradientColorName = 'brand';
      break;
    }
  }
  return css`
    &:hover,
    &:focus {
      & > span {
        text-decoration: underline;
        text-decoration: underline solid var(--gradient-${gradientColorName});
      }
    }
  `;
};

export const transformLink = (link: FooterLink, itemIndex: number = 0) => {
  const { title, href, emoji, text, gradientColor } = link;
  return (
    <FooterLinkComponent
      title={title}
      href={href}
      underline={false}
      css={[getStylesForUnderline(gradientColor)]}
      key={`footer-item-${itemIndex || title.toLowerCase()}`.trim()}
    >
      <span className={'emoji'}>{emoji}</span>
      <GradientSpan gradientColor={gradientColor} forceGradient>
        {text}
      </GradientSpan>
    </FooterLinkComponent>
  );
};
