import bookCover from '@/assets/images/reading.jpg';
import { Img } from '@/components/atoms/img';
import cx from '@/utils/cx';

import {
  ActivityCard,
  Content,
  Header,
  Texts,
  TrackArtist,
  TrackName,
} from './activity.styles';

const book = {
  title: 'Talking to Strangers',
  authors: 'Malcolm Gladwell',
  currentPage: 144,
  totalPages: 389,
  link: 'https://literal.club/jahirfiquitiva/book/talking-to-strangers-e99c4',
};

const readProgress = ((book.currentPage * 100) / book.totalPages).toFixed(2);

export const Book = () => {
  return (
    <ActivityCard
      title={`"${book.title}" by ${book.authors}`}
      href={book.link}
      target={'_blank'}
      data-umami-event={'Reading'}
      data-umami-event-book={book.title}
      className={'hocus:border-brand-600/35 dark:hocus:border-brand-200/35'}
    >
      <Content>
        <Img
          src={bookCover}
          alt={`"${book.title}" book cover`}
          className={cx(
            'rounded-l-0.5 rounded-r-1.5',
            'aspect-auto w-auto h-auto',
            'max-w-full max-h-[72px] tablet-sm:max-h-[78px]',
            'border border-divider transition',
            'scale-95 group-hocus/track:scale-100',
          )}
        />
        <Texts>
          <Header>
            <span>Reading ({readProgress}%)</span>
          </Header>
          <TrackName className={'group-hocus/track:text-accent-dark'}>
            {book.title}
          </TrackName>
          <TrackArtist>{book.authors}</TrackArtist>
        </Texts>
      </Content>
    </ActivityCard>
  );
};
