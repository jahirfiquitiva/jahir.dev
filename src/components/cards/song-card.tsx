import styled from '@emotion/styled';
import { mdiSpotify } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import { usePalette } from 'react-palette';

import { Component, ComponentProps } from '~/elements/base/fc';
import { ExtLinkCard } from '~/elements/simple/card';
import { Heading } from '~/elements/simple/heading';
import { useTheme } from '~/providers/theme';
import { TrackData } from '~/types';
import buildShadowColors from '~/utils/build-shadow-colors';
import buildStyles from '~/utils/build-styles';
import getReadableColor from '~/utils/get-readable-color';
import hexToRGB from '~/utils/hex-to-rgb';

interface SongCardProps extends ComponentProps, TrackData {
  isForNowPlaying?: boolean;
}

const BaseSongCard = styled(ExtLinkCard)`
  --border-radius: 8px;
  border: none;
  text-decoration-color: currentColor;
  overflow-x: hidden;
  max-width: 100%;
  color: var(--text-secondary);

  &.not-playing {
    pointer-events: none;
  }

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
  }

  .album {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .album img {
    border-radius: 4px;
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

  .details h5,
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: inherit;
    border-radius: 0;
  }

  .details h5 {
    font-size: calc(var(--base-font-size) * 1.05);
    opacity: 1;
  }

  p {
    font-size: calc(var(--base-font-size) * 0.95);
    font-weight: 400;
    opacity: 0.9;
    -webkit-text-decoration: none !important;
    text-decoration: none !important;
    text-decoration-color: rgba(0, 0, 0, 0) !important;
  }

  &:focus,
  &:hover {
    color: var(--text-primary);
    & .details h5,
    & .details h5 {
      text-decoration: underline;
    }
  }
`;

const CurrentlyPlayingTitle = styled.p`
  font-size: calc(var(--base-font-size) * 0.95);
  font-weight: 400;
  opacity: 0.9;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-decoration-color: rgba(0, 0, 0, 0) !important;
  margin-bottom: 0.4rem;
`;

export const SongCard: Component<SongCardProps> = (props) => {
  const { isForNowPlaying, isPlaying = false } = props;
  const shouldRenderDetails = !isForNowPlaying || isPlaying;

  const { isDark } = useTheme();
  const { data: paletteData } = usePalette(
    shouldRenderDetails ? props.image?.url ?? '' : '',
  );

  const backgroundColor: string | undefined = shouldRenderDetails
    ? paletteData
      ? isDark
        ? paletteData?.darkMuted || undefined
        : paletteData?.vibrant || undefined
      : undefined
    : undefined;

  const textColor: string | null | undefined = shouldRenderDetails
    ? getReadableColor(
        paletteData
          ? isDark
            ? paletteData?.vibrant || undefined
            : paletteData?.darkMuted || undefined
          : undefined,
        isDark,
      )
    : undefined;

  const shadowColors = buildShadowColors(backgroundColor, 0.25, 0.45, isDark);

  const renderAlbumImage = () => {
    if (shouldRenderDetails && props.image) {
      return (
        <Image
          alt={props.title}
          src={props.image?.url ?? ''}
          width={64}
          height={64}
          objectFit={'cover'}
          objectPosition={'center'}
        />
      );
    }
    return (
      <Icon
        path={mdiSpotify}
        size={2}
        color={'#1ED760'}
        style={{ opacity: 0.85 }}
      />
    );
  };

  const renderActualCard = () => {
    return (
      <BaseSongCard
        className={
          ['nodeco', !shouldRenderDetails ? 'not-playing' : '']
            .join(' ')
            .trim() || undefined
        }
        title={props.title}
        to={props.url || '#'}
        style={buildStyles({
          ...shadowColors,
          backgroundColor: hexToRGB(backgroundColor, isDark ? 0.2 : 0.1),
          color: textColor,
          borderColor: textColor,
        })}
      >
        <div className={'overlay'}>
          <div
            className={'album'}
            style={{ minWidth: shouldRenderDetails ? 64 : 0 }}
          >
            {renderAlbumImage()}
          </div>
          <div
            className={'details'}
            style={buildStyles({ color: textColor, borderColor: textColor })}
          >
            <Heading size={'5'} fontSize={'6'}>
              {(props.title?.length ?? 0) > 0 && shouldRenderDetails
                ? props.title
                : 'Silence'}
            </Heading>
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

  if (!isForNowPlaying) return renderActualCard();

  return (
    <div>
      <CurrentlyPlayingTitle style={buildStyles({ color: textColor })}>
        🎧&nbsp;&nbsp;Currently listening to...
      </CurrentlyPlayingTitle>
      {renderActualCard()}
    </div>
  );
};
