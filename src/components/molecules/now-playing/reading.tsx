import type { Route } from 'next';

import reading from '@/assets/images/reading.jpg';
import cx from '@/utils/cx';

import {
  NowPlayingCard,
  NowPlayingHeader,
  NowPlayingTexts,
  TrackArtist,
  TrackName,
  AlbumImg,
  NowPlayingContent,
} from './now-playing.styles';

const book = {
  title: 'Talking to Strangers',
  authors: 'Malcolm Gladwell',
  currentPage: 36,
  totalPages: 389,
  link: 'https://literal.club/jahirfiquitiva/book/talking-to-strangers-e99c4',
};
const readProgress = ((book.currentPage * 100) / book.totalPages).toFixed(2);

export const ReadingCard = () => {
  return (
    <NowPlayingCard
      title={`Currently reading: "${book.title}" by ${book.authors}`}
      href={book.link as Route}
      data-umami-event={'Reading'}
    >
      <NowPlayingContent>
        <AlbumImg
          src={reading}
          alt={'Book cover "tunez" playlist'}
          className={cx('aspect-auto rounded-l-2 rounded-r-6')}
        />
        <NowPlayingTexts>
          <NowPlayingHeader>
            <span>Reading ({readProgress}%)</span>
          </NowPlayingHeader>
          <div className={'flex flex-col'}>
            <TrackName>{book.title}</TrackName>
            <TrackArtist>{book.authors}</TrackArtist>
          </div>
        </NowPlayingTexts>
      </NowPlayingContent>
    </NowPlayingCard>
  );
};
