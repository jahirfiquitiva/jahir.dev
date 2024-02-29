import type { CSSProperties, ComponentProps } from 'react';

import { Icon } from '@/components/atoms/icon';
import { loading as loadingIcon } from '@/components/icons';
import type { ReactionName } from '@/types/db';

import { reactionsSetup } from './reaction-button.config';
import { ReactionIcon, StyledReactionButton } from './reaction-button.styles';

interface ReactionButtonProps
  extends Omit<ComponentProps<'button'>, 'loading'> {
  reaction: ReactionName;
  count: number;
  loading?: boolean;
  reacted?: boolean;
}

export const ReactionButton = (props: ReactionButtonProps) => {
  const { reaction, count, loading, reacted, ...otherProps } = props;
  return (
    <StyledReactionButton
      {...otherProps}
      title={reactionsSetup[reaction].title}
      aria-pressed={reacted}
      disabled={loading === true || reacted === true}
      className={reacted ? 'bg-tint-bg ring-tint-border' : ''}
      style={
        {
          '--tint': reactionsSetup[reaction].tint,
        } as CSSProperties
      }
    >
      <ReactionIcon
        className={reacted ? 'text-[rgb(var(--tint))]' : 'text-current'}
        path={
          reacted
            ? reactionsSetup[reaction].icon.filled
            : reactionsSetup[reaction].icon.outlined
        }
      />
      {loading ? (
        <Icon className={'size-4 animate-spin'} path={loadingIcon} />
      ) : (
        <span className={'font-manrope font-bold'}>{count}</span>
      )}
    </StyledReactionButton>
  );
};
