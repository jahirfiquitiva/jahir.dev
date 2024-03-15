'use client';

import type { EnrichedTweet } from 'react-tweet';

import { useHasMounted } from '@/hooks/use-has-mounted';

type PartsObject = Record<keyof Intl.DateTimeFormatPartTypesRegistry, string>;

const options: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
};

const formatter = new Intl.DateTimeFormat('en-US', options);

const partsArrayToObject = (
  parts: ReturnType<typeof formatter.formatToParts>,
): PartsObject =>
  parts.reduce(
    (prev, curr) => ({ ...prev, [curr.type]: curr.value }),
    {} as PartsObject,
  );

const formatDate = (date: Date) => {
  const parts = partsArrayToObject(formatter.formatToParts(date));
  const formattedTime = `${parts.hour}:${parts.minute} ${parts.dayPeriod}`;
  const formattedDate = `${parts.month} ${parts.day}, ${parts.year}`;
  return `${formattedTime} · ${formattedDate}`;
};

export const TweetInfoCreatedAt = ({ tweet }: { tweet: EnrichedTweet }) => {
  const mounted = useHasMounted();
  const createdAt =
    typeof window !== 'undefined' && mounted
      ? new Date(tweet.created_at)
      : null;
  if (!createdAt) return null;

  const formattedCreatedAtDate = formatDate(createdAt);
  return (
    <a
      href={tweet.url}
      target={'_blank'}
      rel={'noopener noreferrer'}
      aria-label={formattedCreatedAtDate}
    >
      <time dateTime={createdAt.toISOString()}>{formattedCreatedAtDate}</time>
    </a>
  );
};
