// import { LogoAnimoji } from '@/components/core/logo-animoji/logo-animoji';
import { Link } from '@/components/core/link/link';
import { LogoAnimoji } from '@/components/core/logo-animoji/logo-animoji';
import { SocialLinks } from '@/components/molecules/social-links/social-links';
import cx from '@/utils/cx';

import { BackToTopLink } from './back-to-top';
import { LinksGroup, LinksGroupTitle, StyledFooter } from './footer.styles';
import { FooterLinksList, type FooterLinkProps } from './links-list/links-list';

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
  {
    title: 'Donate',
    href: '/donate',
    className: 'from-gradient-purple to-gradient-brand',
    underlineColor: 'purple',
  },
  {
    title: 'Uses',
    href: '/uses',
    className: 'from-gradient-brand to-gradient-blue',
    underlineColor: 'brand',
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
    title: 'Colophon',
    href: '/uses#website',
    className: 'from-gradient-purple to-gradient-brand',
    underlineColor: 'brand',
    a11yTitle: 'Website Colophon',
  },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <LinksGroup title={'Website pages links'}>
        <LinksGroupTitle>Index</LinksGroupTitle>
        <FooterLinksList title={'Website pages links'} links={primaryLinks} />
      </LinksGroup>
      <LinksGroup title={'Meta links'} className={'tablet-sm:items-end'}>
        <LinksGroupTitle>Meta</LinksGroupTitle>
        <FooterLinksList
          title={'Meta pages links'}
          links={metaLinks}
          className={'tablet-sm:justify-end'}
        >
          <BackToTopLink />
        </FooterLinksList>
      </LinksGroup>
      <div
        className={cx(
          'flex flex-row items-center h-full',
          '[grid-row:2] tablet-sm:[grid-column:1]',
        )}
      >
        <Link
          href={'/'}
          title={'Home page'}
          className={cx(
            'self-center p-5 rounded-6',
            'mobile-lg:-ml-6',
            'hocus:bg-accent-dark/[0.06]',
            'dark:hocus:bg-accent-dark/[0.24]',
          )}
        >
          <LogoAnimoji />
        </Link>
      </div>
      <LinksGroup
        title={'Social links'}
        className={'tablet-sm:[grid-column:2]'}
      >
        <LinksGroupTitle>Social</LinksGroupTitle>
        <SocialLinks
          className={cx(
            'flex-col items-start justify-start mx-0',
            'mobile-lg:mx-0 tablet-sm:flex-row tablet-sm:justify-end',
          )}
          textOnly
        />
      </LinksGroup>
    </StyledFooter>
  );
};
