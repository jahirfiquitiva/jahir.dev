import { Logo } from '@/components/atoms/logo';
import { StarsCounter } from '@/components/ui/projects/item/stars-count';
import cx from '@/utils/cx';

import { SocialLinks } from '../social-links';

import { linksGroups } from './footer.data';
import {
  Description,
  Details,
  FooterLink,
  LinksList,
  StyledFooter,
} from './footer.styles';
import { FooterNowPlaying } from './now-playing';

export const Footer = () => {
  return (
    <StyledFooter>
      <Details>
        <FooterLink
          title={'Jahir Fiquitiva - Home Page'}
          href={'/'}
          className={cx(
            'self-start',
            'flex flex-row items-center text-xs font-bold',
            'no-underline gap-2 saturate-125 dark:saturate-150',
            'hocus:underline hocus:decoration-brand-500',
            'dark:hocus:decoration-brand-300',
          )}
        >
          <Logo />
          <span className={'text-accent'}>Jahir Fiquitiva</span>
        </FooterLink>
        <Description>
          Passionate and creative frontend software engineer from Colombia{' '}
          <span role={'img'} aria-label={'Colombia flag'}>
            🇨🇴
          </span>
        </Description>
        <SocialLinks className={'-ml-1.5'} />
      </Details>
      {linksGroups.map((group) => {
        return (
          <LinksList key={group.title}>
            <p
              className={
                // eslint-disable-next-line @stylistic/max-len
                'font-manrope font-bold text-tertiary-txt uppercase text-3xs select-none tracking-wider'
              }
            >
              {group.title}
            </p>
            <ul
              title={group.a11yTitle}
              aria-label={group.a11yTitle}
              className={'flex flex-col gap-2'}
            >
              {group.links.map((link) => {
                const className = `hocus:${link.className}`;
                return (
                  <li key={link.title}>
                    <FooterLink
                      title={link.a11yTitle || link.title}
                      href={link.href}
                      className={className}
                      {...link.props}
                      prefetch={false}
                    >
                      {link.key === 'code' ? (
                        <StarsCounter
                          repo={'jahir.dev'}
                          style={{ fontSize: '0.8125rem' }}
                          className={
                            // eslint-disable-next-line @stylistic/max-len
                            'font-semibold -ml-1.5 text-inherit bg-inherit bg-clip-text transition-none'
                          }
                        />
                      ) : (
                        link.title
                      )}
                    </FooterLink>
                  </li>
                );
              })}
            </ul>
          </LinksList>
        );
      })}
      <div
        className={
          'flex flex-row items-center justify-start self-start col-span-2 min-h-6'
        }
      >
        <FooterNowPlaying />
      </div>
    </StyledFooter>
  );
};
