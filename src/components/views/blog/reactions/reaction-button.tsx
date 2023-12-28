import type { ComponentProps } from 'react';

import { Icon } from '@/components/icon';
import { Ring } from '@/components/loaders/ring';
import cx from '@/utils/cx';

import { StyledReactionButton } from './reaction-button.styles';

interface ReactionButtonProps
  extends Omit<ComponentProps<'button'>, 'loading'> {
  title: string;
  count: number;
  iconPath: string;
  loading?: boolean;
  reacted?: boolean;
}

export const ReactionButton = (props: ReactionButtonProps) => {
  const { title, count, iconPath, loading, reacted, ...otherProps } = props;

  return (
    <StyledReactionButton
      {...otherProps}
      title={title}
      aria-pressed={reacted}
      disabled={loading === true || reacted === true}
    >
      <Icon
        className={cx(
          'size-5 transition-colors',
          reacted ? 'fill-[rgba(var(--reaction-color)/1)]' : 'fill-current',
          'group-hocus/reaction:fill-[rgba(var(--reaction-color)/1)]',
        )}
        path={iconPath}
      />
      {loading ? (
        <Ring
          size={16}
          lineWeight={6}
          speed={2}
          color={'var(--color-tertiary-txt)'}
        />
      ) : (
        <span className={'font-manrope font-bold'}>{count}</span>
      )}
    </StyledReactionButton>
  );
};
