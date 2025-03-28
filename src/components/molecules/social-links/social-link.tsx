import { Icon } from '@/components/atoms/icon';
import { Link } from '@/components/atoms/link';
import { tw, type TWComponentProps } from '@/utils/cx';

const StyledSocialLink = tw(Link)`
  flex
  items-center
  justify-center
  min-h-10
  min-w-10
  p-1.5
  rounded-1.5
  no-underline
  transition-colors
  text-secondary-txt
  bg-transparent
  hocus:bg-brand-600/10
  dark:hocus:bg-brand-300/15
`;

const ExtendedSocialLink = tw(StyledSocialLink)`
  w-full
  gap-2
  justify-start
  px-2 my-0.5
`;

interface SocialLinkProps extends TWComponentProps<typeof StyledSocialLink> {
  iconPath?: string;
  className?: string;
  extended?: boolean;
  extendedLabel?: string;
  username?: string;
}

export const SocialLink = ({
  iconPath,
  extended,
  extendedLabel,
  username,
  ...props
}: SocialLinkProps) => {
  const LinkComponent = extended ? ExtendedSocialLink : StyledSocialLink;
  return (
    <LinkComponent
      {...props}
      data-umami-event={'Social link'}
      data-umami-event-site={props.title}
    >
      {props.children || (
        <Icon
          className={'transition-colors delay-[-100ms] size-5.5'}
          path={iconPath || ''}
        />
      )}
      {extended ? (
        <>
          <p className={'leading-none text-inherit'}>
            {extendedLabel || props.title}
          </p>
          {username ? (
            <span className={'leading-none ml-auto text-2xs text-tertiary-txt'}>
              {username}
            </span>
          ) : null}
        </>
      ) : null}
    </LinkComponent>
  );
};
