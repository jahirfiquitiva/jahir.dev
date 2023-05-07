'use client';

import { cx } from 'classix';
import type { ComponentProps } from 'react';
import { useZact } from 'zact/client';

import { Ring } from '@/components/core/loaders';
import type { ReactionName } from '@/lib/planetscale';

import { incrementReaction } from './action';
import { StyledReactionButton, ReactionIcon as Icon } from './reactions.styles';

const titles: Record<ReactionName, string> = {
  likes: 'Like',
  loves: 'Love',
  awards: 'Award',
  bookmarks: 'Bookmark',
};

interface ReactionButtonProps {
  slug: string;
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
  return <span>{count || 1}</span>;
};

export const ReactionButton = (props: ReactionButtonProps) => {
  const {
    mutate: increment,
    data,
    isLoading: actionRunning,
  } = useZact(incrementReaction);
  const { type, count = 0, reacted, loading, submitting } = props;
  const isLoading = loading && actionRunning;
  const disabled = isLoading || submitting === type;

  console.error(data);
  return (
    <StyledReactionButton
      outlined
      $reacted={reacted}
      data-reacted={reacted}
      disabled={disabled || reacted}
      title={titles[type]}
      onClick={() => {
        increment({ slug: props.slug, reaction: type })
          .then((data) => {
            console.error({ result: data });
          })
          .catch(console.error);
      }}
      className={cx(props.className, isLoading && 'cursor-progress')}
    >
      <Icon path={reacted ? props.reactedIcon : props.normalIcon} size={0.75} />
      {renderLoaderOrCount(disabled, count)}
    </StyledReactionButton>
  );
};
