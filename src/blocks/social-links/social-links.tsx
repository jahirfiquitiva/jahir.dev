import {
  TwitterIconButton,
  GitHubIconButton,
  InstagramIconButton,
  LinkedInIconButton,
  PolyworkIconButton,
} from '~/components/buttons';
import { ButtonGroup } from '~/elements/button';
import { Component, ComponentProps } from '~/elements/fc';

interface SocialLinksProps extends ComponentProps {
  iconSize?: number;
}

export const SocialLinks: Component<SocialLinksProps> = (props) => {
  const { iconSize = 0.9, className } = props;
  return (
    <ButtonGroup className={className}>
      <GitHubIconButton iconSize={iconSize} />
      <LinkedInIconButton iconSize={iconSize} />
      <TwitterIconButton iconSize={iconSize} />
      <InstagramIconButton iconSize={iconSize} />
      <PolyworkIconButton iconSize={iconSize} />
    </ButtonGroup>
  );
};
