import type{ GradientOption,
} from '@/stitches/utils/gradient';
import type { FC } from '@/types';

import { FooterNowPlaying } from './../footer-now-playing';
import { FooterLink, List } from './footer-links-group.styles';

export interface FooterLinkProps {
  title: string;
  href: string;
  gradient?: GradientOption;
  a11yTitle?: string;
  openInNewTab?: boolean;
}

interface FooterLinksGroupProps {
  title?: string;
  links?: Array<FooterLinkProps>;
  meta?: boolean;
}

export const FooterLinksGroup: FC<FooterLinksGroupProps> = (props) => {
  const { title, links, meta } = props;
  return (
    <List aria-label={title} meta={meta}>
      {links?.map((link) => {
        return (
          <li key={link.title}>
            <FooterLink
              href={link.href}
              title={link.a11yTitle ? link.a11yTitle : `${link.title} page`}
              gradient={link.gradient}
              openInNewTab={link.openInNewTab}
            >
              <span>{link.title}</span>
            </FooterLink>
          </li>
        );
      })}
      {meta && <FooterNowPlaying />}
    </List>
  );
};
