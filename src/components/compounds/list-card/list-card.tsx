import { useMemo } from 'react';

import { usePalette, type Palette, type SwatchName } from '@/hooks/use-palette';
import { useTheme } from '@/providers/theme';
import type { FC } from '@/types';
import { getReadableColor } from '@/utils/color/get-readable-color';
import { hexToRGB } from '@/utils/color/hex-to-rgb';

import { StyledListCard } from './list-card.styles';

const getColorFromPalette = (
  palette?: Palette | null,
  isDark?: boolean,
  darkColor?: string | null,
  colorVariant: 'Vibrant' | 'Muted' = 'Vibrant',
): string | null => {
  if (!palette) return null;
  if (isDark && darkColor) return darkColor;
  const color = palette[`dark${colorVariant}`] || null;
  return (
    (isDark ? palette[colorVariant.toLowerCase() as SwatchName] : color) ||
    color
  );
};

interface ListCardProps {
  title: string;
  href: string;
  imageUrl: string;
  color?: string;
}

export const ListCard: FC<ListCardProps> = (props) => {
  const { title, href, imageUrl, color: defaultColor } = props;

  const { isDark, themeReady } = useTheme();
  const { palette: heroPalette = {} } = usePalette(imageUrl);

  const color = useMemo<string>(() => {
    if (!themeReady) return '';
    const color = hexToRGB(
      getReadableColor(
        defaultColor || getColorFromPalette(heroPalette, isDark),
        isDark,
      ),
      undefined,
      true,
    );
    if (!color || color === 'rgba(0 0 0 / 0)') return '';
    return color;
  }, [defaultColor, isDark, themeReady, heroPalette]);

  return (
    <StyledListCard
      title={title}
      href={href}
      underline={false}
      css={{ $$color: color || '$colors$accent-shadow' }}
    >
      {props.children}
    </StyledListCard>
  );
};
