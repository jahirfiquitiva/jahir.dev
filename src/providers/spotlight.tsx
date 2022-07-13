import { Icon } from '@mdi/react';
import { Action } from 'kbar';
import { useRouter } from 'next/router';
import { createContext, useContext } from 'react';

import { Spotlight } from '@/components/molecules';
import type { SpotlightOptionsSection } from '@/components/molecules/spotlight/options';
import { spotlightOptions } from '@/components/molecules/spotlight/options';
import type { FC } from '@/types';

export interface SpotlightContextValue {
  spotlightActions: Array<Action>;
}

const defaultContextState: SpotlightContextValue = {
  spotlightActions: [],
};

const SpotlightContext =
  createContext<SpotlightContextValue>(defaultContextState);

const isLocalLink = (href?: string) =>
  href && (href.startsWith('/') || href.startsWith('#'));

export const SpotlightProvider: FC = (props) => {
  const { push } = useRouter();

  const SpotlightContextValue: SpotlightContextValue = {
    spotlightActions: Object.keys(spotlightOptions)
      .map((section) => {
        return (spotlightOptions[section as SpotlightOptionsSection] || [])
          .map((option) => {
            return {
              id: option.id,
              name: option.title,
              keywords: option.keywords,
              section,
              shortcut: option.shortcuts,
              icon: option.icon ? (
                <Icon path={option.icon} size={0.9} />
              ) : undefined,
              perform: option.url
                ? isLocalLink(option.url)
                  ? () => push(option.url || '')
                  : () => window.open(option.url)
                : undefined,
            } as Action;
          })
          .flat();
      })
      .flat(),
  };

  return (
    <SpotlightContext.Provider value={SpotlightContextValue}>
      <Spotlight>{props.children}</Spotlight>
    </SpotlightContext.Provider>
  );
};

export const useSpotlight = (): SpotlightContextValue => {
  return useContext(SpotlightContext) || defaultContextState;
};
