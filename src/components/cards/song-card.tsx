import styled from '@emotion/styled';
import { mdiSpotify } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import { usePalette } from 'react-palette';

import { Card, ExtLinkCard } from '~/elements/card';
import { Component, ComponentProps } from '~/elements/fc';
import { TrackData } from '~/types';
import buildShadowColors from '~/utils/build-shadow-colors';

interface SongCardProps extends ComponentProps, TrackData {
  isForNowPlaying?: boolean;
}

const BaseSongCard = styled(Card)`
  border: none;
  text-decoration-color: currentColor;
  overflow-x: hidden;
  max-width: 100%;
  pointer-events: none;
  user-select: none;

  .overlay {
    height: auto;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.8rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--divider);
    max-width: 100%;

    &.valid {
      background-color: var(--music-cards-overlay-color);
    }
  }

  .album {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .album img {
    border-radius: 2px;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-x: hidden;
    max-width: 100%;
    margin-left: 1rem;
    margin-right: 0.2rem;
  }

  .details h6,
  .details p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: inherit;
  }

  .details h6 {
    font-size: calc(var(--base-font-size) * 1.1);
  }

  .details p {
    font-weight: 400;
    opacity: 0.85;
    -webkit-text-decoration: none !important;
    text-decoration: none !important;
    text-decoration-color: rgba(0, 0, 0, 0) !important;
  }
`;

const SongLinkCard = styled(ExtLinkCard)`
  --border-radius: 8px;

  &:focus,
  &:hover {
    & .details h6,
    & .details h6 {
      text-decoration: underline;
      -webkit-text-decoration-style: solid;
    }
  }
`;

export const SongCard: Component<SongCardProps> = (props) => {
  const { isForNowPlaying, isPlaying = false } = props;
  const shouldRenderDetails = !isForNowPlaying || isPlaying;

  const { isDark } = { isDark: false }; // useContext(ThemeContext); TODO: Enable
  const { data: paletteData } = usePalette(
    shouldRenderDetails ? props.image?.url ?? '' : '',
  );

  const preSize: number =
    (props.image?.width ?? 36) + (props.image?.height ?? 36);
  const size: number = preSize > 0 ? (preSize > 128 ? 96 : 72) : 0;

  const backgroundColor: string | undefined = paletteData
    ? isDark
      ? paletteData?.darkMuted || undefined
      : paletteData?.lightVibrant || undefined
    : undefined;

  const textColor: string | undefined = paletteData
    ? isDark
      ? paletteData?.lightVibrant || undefined
      : paletteData?.darkMuted || undefined
    : undefined;

  const renderAlbumImage = () => {
    if (shouldRenderDetails && props.image) {
      return (
        <Image
          alt={props.title}
          src={props.image?.url ?? ''}
          width={size}
          height={size}
          objectFit={'cover'}
          objectPosition={'center'}
        />
      );
    }
    return <Icon path={mdiSpotify} size={2} color={'#1ED760'} />;
  };

  const renderActualCard = () => {
    return (
      <BaseSongCard
        style={{ backgroundColor, color: textColor, borderColor: textColor }}
      >
        <div
          className={[
            'overlay',
            shouldRenderDetails && paletteData ? 'valid' : '',
          ].join(' ')}
        >
          <div
            className={'album'}
            style={{ minWidth: shouldRenderDetails ? size : 0 }}
          >
            {renderAlbumImage()}
          </div>
          <div
            className={'details'}
            style={{ color: textColor, borderColor: textColor }}
          >
            <h6>
              {(props.title?.length ?? 0) > 0 && shouldRenderDetails
                ? props.title
                : 'Nothing'}
            </h6>
            {shouldRenderDetails && (
              <p>
                {props.artist}
                {props.album && (
                  <>
                    {' • '}
                    {props.album}
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      </BaseSongCard>
    );
  };

  if (props.url && shouldRenderDetails) {
    return (
      <SongLinkCard
        className={'nodeco'}
        title={props.title}
        to={props.url}
        style={{
          ...buildShadowColors(backgroundColor, 0.4, 0.5),
          color: textColor,
        }}
      >
        {renderActualCard()}
      </SongLinkCard>
    );
  }
  return renderActualCard();
};
