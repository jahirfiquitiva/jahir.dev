import type { Route } from 'next';

import { Logo } from '@/components/atoms/logo';
import {
  buildColoredLinkClasses,
  getColoredTextClasses,
} from '@/utils/colored-text';
import type { TWComponentProps } from '@/utils/cx';

import { NavToggle } from './nav-toggle';
import {
  ButtonsGroup,
  LinksList,
  Nav,
  NavLink,
  NavPageLink,
} from './navbar.styles';
import { ThemeToggle } from './theme-toggle';

const toolbarLinksList = [
  {
    title: 'About',
    href: '/about',
    className: buildColoredLinkClasses('blue', 'green'),
  },
  {
    title: 'Blog',
    href: '/blog',
    className: buildColoredLinkClasses('yellow', 'orange'),
  },
  {
    title: 'Projects',
    href: '/projects',
    className: buildColoredLinkClasses('red', 'purple'),
  },
  {
    title: 'Uses',
    href: '/uses',
    className: buildColoredLinkClasses('brand', 'blue'),
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
        className={'gap-2 saturate-125 dark:saturate-150'}
        aria-current={props.path === '/' ? 'page' : undefined}
      >
        <Logo />
        <span
          className={getColoredTextClasses(
            'brand',
            'brand',
            'blue',
            'dark:saturate-100',
            true,
          )}
        >
          Jahir Fiquitiva
        </span>
      </NavLink>
      <LinksList>
        {toolbarLinksList.map((link) => {
          return (
            <li key={link.href}>
              <NavPageLink
                title={`${link.title} page`}
                href={link.href as Route}
                aria-current={
                  props.path?.startsWith(link.href) ? 'page' : undefined
                }
                className={link.className}
              >
                {link.title}
              </NavPageLink>
            </li>
          );
        })}
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
