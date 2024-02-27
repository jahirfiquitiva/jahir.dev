/* eslint-disable max-len */
'use client';

import { reactionsNames, type Counters } from '@/types/db';

import { ReactionButton } from './reaction-button';
import { useReactions } from './use-reactions';

interface ReactionsButtonsProps {
  slug: string;
  initialCounters?: Counters;
}

const ReactionsButtons = (props: ReactionsButtonsProps) => {
  const { counters, reacted, submitting, onButtonClick } = useReactions(
    props.slug,
    props.initialCounters,
  );

  return (
    <div
      className={'flex flex-wrap flex-row items-center gap-2.5 tablet-md:gap-3'}
    >
      {reactionsNames.map((reaction) => (
        <ReactionButton
          key={reaction}
          reaction={reaction}
          count={counters[reaction] || 0}
          loading={submitting === reaction}
          reacted={reacted[reaction] === true}
          onClick={async (event) => {
            onButtonClick(event, reaction);
          }}
        />
      ))}
    </div>
  );
};

export default ReactionsButtons;
