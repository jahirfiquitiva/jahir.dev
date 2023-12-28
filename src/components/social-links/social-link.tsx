import { tw, type TWComponentProps } from '@/utils/cx';

import { Icon } from '../icon';
import { Link } from '../link';

const StyledSocialLink = tw(Link)`
  flex
  items-center
  justify-center
  min-h-11
  min-w-11
  p-2
  rounded-1.5
  no-underline
  transition-colors
  text-secondary-txt
  hocus:bg-brand-600/[0.08]
  dark:hocus:bg-brand-300/[0.16]
`;

interface SocialLinkProps extends TWComponentProps<typeof StyledSocialLink> {
  iconPath?: string;
  className?: string;
}

export const SocialLink = ({ iconPath, ...props }: SocialLinkProps) => (
  <StyledSocialLink {...props}>
    {props.children || (
      <Icon
        className={'transition-colors delay-[-100ms]'}
        path={iconPath || ''}
      />
    )}
  </StyledSocialLink>
);
