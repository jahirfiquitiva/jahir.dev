import { Icon } from '@/components/atoms/icon';
import { Logo } from '@/components/atoms/logo';
import type { TWComponentProps } from '@/utils/cx';
import cx from '@/utils/cx';

import { SocialLinks } from '../social-links';

import { NavToggle } from './nav-toggle';
import {
  ButtonsGroup,
  LinksList,
  Nav,
  NavItem,
  NavLink,
  ExtraNavLinks,
  NavPageLink,
  NavPageLinkText,
  ContactButton,
  ContactButtonContainer,
} from './navbar.styles';
import { ThemeSelector } from './theme-selector';

const toolbarLinksList = [
  {
    title: 'About',
    href: '/about',
    className: 'text-green',
  },
  {
    title: 'Blog',
    href: '/blog',
    className: 'text-orange',
  },
  {
    title: 'Projects',
    href: '/projects',
    className: 'text-purple',
  },
  {
    title: 'Uses',
    href: '/uses',
    className: 'text-blue',
  },
];

interface NavbarProps extends TWComponentProps<typeof Nav> {
  path?: string;
  expanded?: boolean;
  onNavToggleClick?: () => void;
}

export const Navbar = (props: NavbarProps) => {
  const { expanded, className } = props;
  return (
    <Nav id={'navigation'} className={className}>
      <NavLink
        title={'Jahir Fiquitiva - Home Page'}
        href={'/'}
        className={'gap-2 hocus:bg-toolbar-highlight'}
        aria-current={props.path === '/' ? 'page' : undefined}
      >
        <Logo className={'saturate-125 dark:saturate-150'} />
        <span className={'text-accent saturate-125 dark:saturate-150'}>
          Jahir Fiquitiva
        </span>
      </NavLink>
      <LinksList
        className={
          expanded
            ? 'max-h-full opacity-100 select-auto pointer-events-auto visible'
            : ''
        }
      >
        {toolbarLinksList.map((link) => {
          const isActive = props.path?.startsWith(link.href) || false;
          return (
            <NavItem
              key={link.href}
              className={isActive ? 'before:bg-toolbar-highlight' : ''}
            >
              <NavPageLink
                title={`${link.title} page`}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cx(
                  `hocus:${link.className}`,
                  isActive ? link.className : '',
                  isActive ? 'saturate-125 dark:saturate-150' : '',
                )}
                prefetch={!isActive}
              >
                <NavPageLinkText>{link.title}</NavPageLinkText>
              </NavPageLink>
            </NavItem>
          );
        })}
        <ExtraNavLinks aria-hidden={'true'} />
        <ExtraNavLinks className={'mx-auto'}>
          <SocialLinks />
        </ExtraNavLinks>
      </LinksList>
      <ButtonsGroup>
        <ContactButtonContainer>
          <ContactButton
            title={'Get in Touch'}
            href={'/contact'}
            data-umami-event={'Contact Nav Link'}
          >
            <Icon
              path={
                // eslint-disable-next-line @stylistic/max-len
                'm20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z'
              }
              className={'size-5'}
            />
          </ContactButton>
        </ContactButtonContainer>
        <li>
          <ThemeSelector />
        </li>
        <li>
          <NavToggle
            title={`${expanded ? 'Collapse' : 'Expand'} menu`}
            aria-label={`${expanded ? 'Collapse' : 'Expand'} menu`}
            aria-expanded={expanded}
            aria-controls={'header'}
            onClick={props.onNavToggleClick}
          />
        </li>
      </ButtonsGroup>
    </Nav>
  );
};
