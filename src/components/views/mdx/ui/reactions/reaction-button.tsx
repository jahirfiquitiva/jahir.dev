'use client';

import { Ring } from '@uiball/loaders';
import { cx } from 'classix';
import type { ComponentProps } from 'react';

import type { ReactionName } from '@/lib/planetscale';

import { StyledReactionButton, ReactionIcon as Icon } from './reactions.styles';

const titles: Record<ReactionName, string> = {
  likes: 'Like',
  loves: 'Love',
  awards: 'Award',
  bookmarks: 'Bookmark',
};

interface ReactionButtonProps {
  type: ReactionName;
  normalIcon: string;
  reactedIcon: string;
  count?: number;
  reacted?: boolean;
  loading?: boolean;
  submitting?: ReactionName;
  className?: ComponentProps<typeof StyledReactionButton>['className'];
  onClick?: ComponentProps<typeof StyledReactionButton>['onClick'];
}

const renderLoaderOrCount = (loading?: boolean, count: number = 0) => {
  if (loading) {
    return (
      <Ring
        size={16}
        lineWeight={6}
        speed={2}
        color={'var(--color-tertiary-txt)'}
      />
    );
  }
  return <span>{count}</span>;
};

export const ReactionButton = (props: ReactionButtonProps) => {
  const { type, count = 0, reacted, loading, submitting } = props;
  const disabled = loading || submitting === type;

  return (
    <StyledReactionButton
      outlined
      $reacted={reacted}
      data-reacted={reacted}
      disabled={disabled || reacted}
      title={titles[type]}
      onClick={props.onClick}
      className={cx(props.className, loading && 'cursor-progress')}
    >
      <Icon path={reacted ? props.reactedIcon : props.normalIcon} size={0.75} />
      {renderLoaderOrCount(disabled, count)}
    </StyledReactionButton>
  );
};
