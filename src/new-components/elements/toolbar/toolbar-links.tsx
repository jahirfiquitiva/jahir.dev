import tw from 'twin.macro';

import { ToolbarLink } from './toolbar-link';

import { GradientOptions } from '~/types';

const toolbarLinksList = [
  {
    emoji: '📝',
    title: 'Blog',
    href: '/blog',
    gradient: 'blue-to-green',
  },
  {
    emoji: '🌍',
    title: 'Uses',
    href: '/uses',
    gradient: 'yellow-to-orange',
  },
  {
    emoji: '🧡',
    title: 'Donate',
    href: '/donate',
    gradient: 'red-to-purple',
  },
  {
    emoji: '📬',
    title: 'Contact',
    href: '/contact',
    gradient: 'brand-to-blue',
  },
];

const ToolbarLinksContainer = tw.ul`
  flex
  items-center
  justify-between
  list-none
  col-start-1
  col-end-3
  sm:(justify-start gap-4)
  lg:(justify-end col-start-2)
  [li]:(inline-block m-0 p-0)
`;

export const ToolbarLinks = () => {
  return (
    <ToolbarLinksContainer>
      {toolbarLinksList.map((link, index) => {
        return (
          <li key={index}>
            <ToolbarLink
              title={`Link to ${link.title}`}
              href={link.href}
              emoji={link.emoji}
              gradientColor={link.gradient as GradientOptions}
            >
              {link.title}
            </ToolbarLink>
          </li>
        );
      })}
    </ToolbarLinksContainer>
  );
};
