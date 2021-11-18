import { mdiSpotify } from '@mdi/js';
import Icon from '@mdi/react';
import cn from 'classnames';
import { useMemo, CSSProperties } from 'react';
import tw from 'twin.macro';

import { Heading, Image, LinkCard } from '~/components/atoms/simple';
import useSafePalette from '~/hooks/useSafePalette';
import { useTheme } from '~/providers/theme';
import { Component, ComponentProps, TrackData } from '~/types';
import getReadableColor from '~/utils/colors/get-readable-color';
import hexToRGB from '~/utils/colors/hex-to-rgb';
import buildShadowStyles from '~/utils/styles/build-shadow-styles';
import buildStyles from '~/utils/styles/build-styles';

const BaseSongCard = tw(LinkCard)`
  p-8
  flex
  flex-row
  items-center
  gap-8
  rounded-md
  overflow-hidden
  text-text-primary
  text-decoration-color[currentColor]
  [&.not-playing]:(border border-divider pointer-events-none)
  [h5]:(text-inherit)
  [img]:(rounded-sm)
  hocus:([h5]:(underline))
`;

const SongDetails = tw.div`
  flex
  flex-col
  flex-1
  rounded-none
  truncate
`;

const CurrentlyPlayingTitle = tw.p`
  text-tiny
  font-normal
  no-underline
  mb-4
`;

interface SongCardProps extends ComponentProps, TrackData {
  isForNowPlaying?: boolean;
}

export const SongCard: Component<SongCardProps> = (props) => {
  const { isForNowPlaying, isPlaying = false } = props;
  const shouldRenderDetails = !isForNowPlaying || isPlaying;

  const { isDark, themeReady } = useTheme();
  const { data: paletteData } = useSafePalette(
    shouldRenderDetails ? props.image?.url : '',
  );

  const cardColors = useMemo<CSSProperties>(() => {
    if (!themeReady || !shouldRenderDetails || !paletteData) return {};
    const backgroundColor = isDark
      ? paletteData.darkMuted
      : paletteData.vibrant;
    const shadowColors = buildShadowStyles(backgroundColor, 0.25, 0.45, isDark);
    return {
      ...shadowColors,
      backgroundColor: hexToRGB(backgroundColor, isDark ? 0.2 : 0.1),
    };
  }, [themeReady, isDark, paletteData, shouldRenderDetails]);

  const textColor = useMemo<string | null>(() => {
    if (!themeReady || !shouldRenderDetails || !paletteData) return null;
    const desiredTextColor = isDark
      ? paletteData.vibrant
      : paletteData.darkMuted;
    return getReadableColor(desiredTextColor, isDark);
  }, [themeReady, isDark, paletteData, shouldRenderDetails]);

  const renderAlbumImage = () => {
    if (shouldRenderDetails && props.image) {
      return (
        <Image
          src={props.image?.url ?? ''}
          alt={props.title}
          size={64}
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
        underline={false}
        className={cn({ 'not-playing': !shouldRenderDetails })}
        title={`Link to spotify song: ${props.title || 'unknown'}`}
        href={props.url || '#'}
        style={buildStyles({
          ...cardColors,
          color: textColor,
          borderColor: textColor ? hexToRGB(textColor, 0.4) : undefined,
        })}
      >
        {renderAlbumImage()}
        <SongDetails
          style={buildStyles({ color: textColor, borderColor: textColor })}
        >
          <Heading size={'5'} fontSize={'xs'} tw={'truncate'}>
            {(props.title?.length ?? 0) > 0 && shouldRenderDetails
              ? props.title
              : 'Silence'}
          </Heading>
          {shouldRenderDetails && (
            <p tw={'text-tiny truncate opacity-90'}>
              {props.artist}
              {props.album && (
                <>
                  {' • '}
                  {props.album}
                </>
              )}
            </p>
          )}
        </SongDetails>
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
