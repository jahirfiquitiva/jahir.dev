import { SocialLinks } from '@/old/components/compounds';
import { LogoAnimoji, logoAnimojiHoveredStyles } from '@/old/components/core';
import type { FC } from '@/old/types';

import { FooterLinksGroup, type FooterLinkProps } from './footer-links-group';
import {
  StyledFooter,
  LinksContainer,
  InnerFooter,
  BrandLink,
} from './footer.styles';

const primaryLinks: Array<FooterLinkProps> = [
  {
    title: 'About',
    href: '/about',
    gradient: 'blue-to-green',
  },
  {
    title: 'Blog',
    href: '/blog',
    gradient: 'yellow-to-orange',
  },
  {
    title: 'Projects',
    href: '/projects',
    gradient: 'red-to-purple',
  },
];

const secondaryLinks: Array<FooterLinkProps> = [
  {
    title: 'Uses',
    href: '/uses',
    gradient: 'blue-to-green',
  },
  {
    title: 'Donate',
    href: '/donate',
    gradient: 'brand-to-blue',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    gradient: 'purple-to-brand',
  },
];

const metaLinks: Array<FooterLinkProps> = [
  {
    title: 'RSS',
    href: '/feed.xml',
    gradient: 'yellow-to-orange',
    a11yTitle: 'RSS Feed',
    openInNewTab: true,
  },
  {
    title: 'Source',
    href: 'https://github.com/jahirfiquitiva/jahir.dev',
    gradient: 'brand-to-blue',
    a11yTitle: 'View source code on GitHub',
    openInNewTab: true,
  },
];

export const Footer: FC = (props) => {
  return (
    <StyledFooter css={props.css}>
      <LinksContainer>
        <FooterLinksGroup title={'Primary pages links'} links={primaryLinks} />
        <FooterLinksGroup
          title={'Secondary pages links'}
          links={secondaryLinks}
        />
        <FooterLinksGroup meta title={'Meta pages links'} links={metaLinks} />
      </LinksContainer>
      <InnerFooter css={{ mx: '-$2' }}>
        <BrandLink
          href={'/'}
          title={'Home page'}
          gradient={'brand-to-blue'}
          forceGradient
          css={{
            hocus: {
              '& > span:first-of-type': logoAnimojiHoveredStyles,
            },
          }}
        >
          <LogoAnimoji />
          <span>Jahir Fiquitiva</span>
        </BrandLink>
        <SocialLinks />
      </InnerFooter>
    </StyledFooter>
  );
};
