import type { ComponentProps } from 'react';

import { Icon } from '@/components/atoms/icon';
import { loading as loadingIcon } from '@/components/icons';
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
          'size-4 mobile-md:size-5',
          'transition-colors',
          reacted ? 'text-[rgb(var(--reaction-color))]' : 'text-current',
          'group-hocus/reaction:text-[rgb(var(--reaction-color))]',
        )}
        path={iconPath}
      />
      {loading ? (
        <Icon className={cx('size-4 animate-spin')} path={loadingIcon} />
      ) : (
        <span className={'font-manrope font-bold'}>{count}</span>
      )}
    </StyledReactionButton>
  );
};
