import { Suspense } from 'react';

import { Img } from '@/components/atoms/img';
import { getReadingProgress } from '@/lib/literal';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';

import {
  ActivityCard,
  Content,
  Header,
  Texts,
  TrackArtist,
  TrackName,
} from './activity.styles';

const getBackground = (colors: Array<string>): string => {
  if (!colors.length) return '';
  if (colors.length === 1)
    return `rgba(${hexToRgb(colors[0], 0, true)} / var(--opacity-tint-bg))`;
  // At least 2 colors
  const steps = 100 / (colors.length - 1);
  let bg = 'linear-gradient(to bottom right, ';
  bg += colors
    .map(
      (c, i) =>
        `rgba(${hexToRgb(c, 0, true)} / var(--opacity-tint-bg)) ${i * steps}%`,
    )
    .join(', ');
  bg += ')';
  return bg;
};

const BookCard = async () => {
  const book = await getReadingProgress();
  if (!book) return null;
  const authors = book.authors.map((a) => a.name).join(', ');
  const readProgress = ((book.progress || 0) * 100) / (book.capacity || 1);
  const state = book.finished ? 'Finished' : 'Reading';
  return (
    <ActivityCard
      title={`"${book.title}" by ${authors}`}
      href={`https://literal.club/jahirfiquitiva/book/${book.slug}`}
      target={'_blank'}
      data-umami-event={state}
      data-umami-event-book={book.title}
      className={'hocus:border-brand-600/35 dark:hocus:border-brand-200/35'}
    >
      <Content style={{ background: getBackground(book.gradientColors) }}>
        <Img
          src={book.cover}
          alt={`"${book.title}" book cover`}
          className={cx(
            'rounded-l-0.5 rounded-r-1.5',
            'aspect-auto w-auto h-full min-w-11',
            'max-w-full max-h-18 tablet-sm:max-h-20',
            'border border-divider transition',
            'scale-95 group-hocus/track:scale-100',
          )}
          width={78}
          height={78}
        />
        <Texts>
          <Header>
            <span>
              {`${state} ${readProgress > 0 ? `(${readProgress.toFixed(2)}%)` : ''}`.trim()}
            </span>
          </Header>
          <TrackName className={'group-hocus/track:text-accent-dark'}>
            {book.title}
          </TrackName>
          <TrackArtist>{authors}</TrackArtist>
        </Texts>
      </Content>
    </ActivityCard>
  );
};

export const Book = () => (
  <Suspense
    fallback={
      <ActivityCard
        title={''}
        href={''}
        aria-disabled
        className={'pointer-events-none'}
      />
    }
  >
    <BookCard />
  </Suspense>
);
