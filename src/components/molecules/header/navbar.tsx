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
  NavPageLink,
  NavPageLinkText,
} from './navbar.styles';
import { ThemeToggle } from './theme-toggle';

const toolbarLinksList = [
  {
    title: 'About',
    href: '/about',
    className: ['text-green'],
  },
  {
    title: 'Blog',
    href: '/blog',
    className: ['text-orange'],
  },
  {
    title: 'Projects',
    href: '/projects',
    className: ['text-purple'],
  },
  {
    title: 'Uses',
    href: '/uses',
    className: ['text-blue'],
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
                  isActive
                    ? link.className.join(' ')
                    : link.className.map((c) => `hocus:${c}`),
                  isActive ? 'saturate-125 dark:saturate-150' : '',
                )}
                prefetch={!isActive}
              >
                <NavPageLinkText>{link.title}</NavPageLinkText>
              </NavPageLink>
            </NavItem>
          );
        })}
        <li
          className={cx(
            'min-h-11',
            'tablet-sm:hidden tablet-sm:invisible',
            'tablet-sm:pointer-events-none tablet-sm:select-none',
          )}
          aria-hidden={'true'}
        />
        <li
          className={cx(
            'mx-auto',
            'tablet-sm:hidden tablet-sm:invisible',
            'tablet-sm:pointer-events-none tablet-sm:select-none',
          )}
        >
          <SocialLinks />
        </li>
      </LinksList>
      <ButtonsGroup>
        <li>
          <ThemeToggle />
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
