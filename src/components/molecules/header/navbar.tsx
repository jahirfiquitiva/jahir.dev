import { Logo } from '@/components/atoms/logo';
import { getColoredTextClasses } from '@/utils/colored-text';
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
    className: ['from-blue', 'to-green'],
  },
  {
    title: 'Blog',
    href: '/blog',
    className: ['from-yellow', 'to-orange'],
  },
  {
    title: 'Projects',
    href: '/projects',
    className: ['from-red', 'to-purple'],
  },
  {
    title: 'Uses',
    href: '/uses',
    className: ['from-brand', 'to-blue'],
  },
];

interface NavbarProps extends TWComponentProps<typeof Nav> {
  path?: string;
  isExpanded?: boolean;
  onNavToggleClick?: () => void;
}

export const Navbar = (props: NavbarProps) => {
  const { isExpanded, className } = props;
  return (
    <Nav id={'navigation'} className={className}>
      <NavLink
        title={'Jahir Fiquitiva - Home Page'}
        href={'/'}
        className={'gap-2 hocus:bg-toolbar-highlight'}
        aria-current={props.path === '/' ? 'page' : undefined}
        prefetch={false}
      >
        <Logo className={'saturate-125 dark:saturate-150'} />
        <span
          className={getColoredTextClasses(
            'brand',
            'brand',
            'blue',
            'saturate-125',
            true,
          )}
        >
          Jahir Fiquitiva
        </span>
      </NavLink>
      <LinksList>
        {toolbarLinksList.map((link) => {
          const isActive = props.path?.startsWith(link.href) || false;
          return (
            <NavItem key={link.href}>
              <NavPageLink
                title={`${link.title} page`}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isActive
                    ? link.className.join(' ')
                    : link.className.map((c) => `hocus:${c}`)
                }
                prefetch={false}
              >
                <NavPageLinkText className={'gradient'}>
                  {link.title}
                </NavPageLinkText>
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
            title={`${isExpanded ? 'Collapse' : 'Expand'} menu`}
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} menu`}
            aria-expanded={isExpanded}
            aria-controls={'header'}
            onClick={props.onNavToggleClick}
          />
        </li>
      </ButtonsGroup>
    </Nav>
  );
};
