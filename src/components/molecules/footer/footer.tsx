import { cx } from 'classix';

import { LogoAnimoji } from '@/components/core/logo-animoji';
// import { SocialLinks } from '@/old/components/compounds';

import {
  StyledFooter,
  InnerFooter,
  BrandLink,
  BrandLinkSpan,
  LinksContainer,
} from './footer.styles';
import { FooterLinksList, type FooterLinkProps } from './links-list';

const primaryLinks: Array<FooterLinkProps> = [
  {
    title: 'About',
    href: '/about',
    className: 'from-gradient-blue to-gradient-green',
    underlineColor: 'blue',
  },
  {
    title: 'Blog',
    href: '/blog',
    className: 'from-gradient-yellow to-gradient-orange',
    underlineColor: 'yellow',
  },
  {
    title: 'Projects',
    href: '/projects',
    className: 'from-gradient-red to-gradient-purple',
    underlineColor: 'red',
  },
];

const secondaryLinks: Array<FooterLinkProps> = [
  {
    title: 'Uses',
    href: '/uses',
    className: 'from-gradient-blue to-gradient-green',
    underlineColor: 'blue',
  },
  {
    title: 'Donate',
    href: '/donate',
    className: 'from-gradient-brand to-gradient-blue',
    underlineColor: 'brand',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    className: 'from-gradient-purple to-gradient-brand',
    underlineColor: 'purple',
  },
];

const metaLinks: Array<FooterLinkProps> = [
  {
    title: 'RSS',
    href: '/feed.xml',
    className: 'from-gradient-yellow to-gradient-orange',
    underlineColor: 'yellow',
    a11yTitle: 'RSS Feed',
    openInNewTab: true,
  },
  {
    title: 'Source',
    href: 'https://github.com/jahirfiquitiva/jahir.dev',
    className: 'from-gradient-brand to-gradient-blue',
    underlineColor: 'brand',
    a11yTitle: 'View source code on GitHub',
    openInNewTab: true,
  },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <LinksContainer>
        <FooterLinksList title={'Primary pages links'} links={primaryLinks} />
        <FooterLinksList
          title={'Secondary pages links'}
          links={secondaryLinks}
        />
        <FooterLinksList meta title={'Meta pages links'} links={metaLinks} />
      </LinksContainer>
      <InnerFooter>
        <BrandLink
          href={'/'}
          title={'Home page'}
          className={cx(
            'hocus:decoration-gradient-brand group/link group/animoji',
          )}
        >
          <LogoAnimoji />
          <BrandLinkSpan>Jahir Fiquitiva</BrandLinkSpan>
        </BrandLink>
        {/* <SocialLinks /> */}
      </InnerFooter>
    </StyledFooter>
  );
};
