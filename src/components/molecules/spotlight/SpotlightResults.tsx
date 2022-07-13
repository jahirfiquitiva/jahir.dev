import { Action, KBarResults, useMatches } from 'kbar';

import type { FC } from '@/types';
import { styled } from '~/stitches';

import { Kbd } from './Kbd';

const ResultsList = styled('div', {
  px: '.4rem',
  pt: '.3rem',
  pb: '.5rem',
});

const SectionTitle = styled('div', {
  color: '$text-tertiary',
  fontSize: '$3xs',
  pt: '1rem',
  pb: '.4rem',
  px: '.8rem',
  useFont: 'manrope',
  fontWeight: 700,
  letterSpacing: '0.035rem',
});

const Result = styled('div', {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '.6rem',
  pl: '.8rem',
  pr: '.6rem',
  py: '.6rem',
  borderRadius: '6px',
  color: '$text-secondary',
  '[aria-selected="true"] > &': {
    color: '$text-primary',
    backgroundColor: 'rgba($colors$toolbar-glow / .1)',
  },
  hover: {
    cursor: 'pointer',
  },
  variants: {
    active: {
      true: {
        backgroundColor: 'red',
      },
    },
  },
});

const ResultText = styled('span', {
  flex: 1,
  fontWeight: 500,
});

const ResultCommands = styled('div', {
  display: 'flex',
});

export const SpotlightResults: FC = () => {
  const { results } = useMatches();
  return (
    <ResultsList>
      <KBarResults
        items={results}
        onRender={({ item, active }) => {
          if (typeof item === 'string') {
            return <SectionTitle>{item}</SectionTitle>;
          }
          const actionItem = item as Action;
          return (
            <Result active={active}>
              {item.icon}
              <ResultText>{actionItem.name}</ResultText>
              {item.shortcut?.length && (
                <ResultCommands>
                  {(item.shortcut || []).map((shortcut) => (
                    <Kbd key={shortcut}>{shortcut}</Kbd>
                  ))}
                </ResultCommands>
              )}
            </Result>
          );
        }}
      />
    </ResultsList>
  );
};
