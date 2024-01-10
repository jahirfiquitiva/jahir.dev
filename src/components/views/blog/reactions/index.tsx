/* eslint-disable max-len */
'use client';

import type { CSSProperties } from 'react';

import { reactionsNames, type ReactionsCounters } from '@/lib/planetscale';
import { hexToRgb } from '@/utils/color';

import { ReactionButton } from './reaction-button';
import { reactionsSetup } from './reaction-button.config';
import { useReactions } from './use-reactions';

interface ReactionsButtonsProps {
  slug: string;
  initialCounters?: ReactionsCounters;
}

export const ReactionsButtons = (props: ReactionsButtonsProps) => {
  const { counters, reacted, submitting, onButtonClick } = useReactions(
    `blog--${props.slug}`,
    props.initialCounters,
  );

  return (
    <div
      className={'flex flex-wrap flex-row items-center gap-2.5 tablet-md:gap-3'}
    >
      {reactionsNames.map((reaction) => (
        <ReactionButton
          key={reaction}
          title={reactionsSetup[reaction].title}
          count={counters[reaction] || 0}
          iconPath={
            reacted[reaction]
              ? reactionsSetup[reaction].icon.filled
              : reactionsSetup[reaction].icon.outlined
          }
          loading={submitting === reaction}
          reacted={reacted[reaction] === true}
          onClick={async (event) => {
            onButtonClick(event, reaction);
          }}
          style={
            {
              '--reaction-color': hexToRgb(
                reactionsSetup[reaction].color,
                1,
                true,
              ),
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
};
