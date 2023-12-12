import { Heading } from '@/components/core/heading';
import { LogoAnimoji } from '@/components/core/logo-animoji/logo-animoji';
import { SocialLinks } from '@/components/molecules/social-links/social-links';
import cx from '@/utils/cx';

import {
  StyledFooter,
  InnerFooter,
  BrandLink,
  BrandLinkSpan,
  LinksContainer,
} from './footer.styles';
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
    className: 'from-gradient-brand to-gradient-blue',
    underlineColor: 'brand',
  },
  {
    title: 'Uses',
    href: '/uses',
    className: 'from-gradient-purple to-gradient-brand',
    underlineColor: 'purple',
  },
];

const secondaryLinks: Array<FooterLinkProps> = [
  {
    title: 'Donate',
    href: '/donate',
    className: 'from-gradient-brand to-gradient-blue',
    underlineColor: 'brand',
  },
  {
    title: 'Uses',
    href: '/uses',
    className: 'from-gradient-purple to-gradient-brand',
    underlineColor: 'purple',
  },
  {
    title: 'Now',
    href: '/now',
    className: 'from-gradient-blue to-gradient-green',
    underlineColor: 'blue',
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
    className: 'from-gradient-brand to-gradient-blue',
    underlineColor: 'brand',
    a11yTitle: 'View source code on GitHub',
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
        <details title={'Index pages links'} className={'w-full'} open>
          <summary
            className={cx(
              'font-manrope font-bold text-primary-txt',
              '-py-2 mb-12 cursor-pointer',
              '[&::marker]:block [&::marker]:mr-12',
              "[&::marker]:content-['']",
              "[details[open]_&::marker]:content-['']",
              "after:content-['↘'] after:ml-6",
              "[details[open]_&::after]:content-['↖']",
            )}
          >
            Index
          </summary>
          <FooterLinksList title={'Primary pages links'} links={primaryLinks} />
        </details>
        <div className={'flex flex-col gap-12'}>
          <Heading $as={'p'} className={'font-manrope font-bold'}>
            Social
          </Heading>
          <FooterLinksList
            title={'Secondary pages links'}
            links={secondaryLinks}
          />
        </div>
        <div className={'flex flex-col gap-12'}>
          <Heading $as={'p'} className={'font-manrope font-bold'}>
            Meta
          </Heading>
          <FooterLinksList meta title={'Meta pages links'} links={metaLinks} />
        </div>
      </LinksContainer>
      <InnerFooter>
        <BrandLink
          href={'/'}
          title={'Home page'}
          className={'hocus:decoration-gradient-brand group/link group/animoji'}
        >
          <LogoAnimoji />
          <BrandLinkSpan>Jahir Fiquitiva</BrandLinkSpan>
        </BrandLink>
        <SocialLinks withBackToTop />
      </InnerFooter>
    </StyledFooter>
  );
};
