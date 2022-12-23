import Vibrant from 'node-vibrant';
import { useEffect, useState } from 'react';

import { useHasMounted } from '@/hooks';

export type SwatchName =
  | 'darkMuted'
  | 'darkVibrant'
  | 'lightMuted'
  | 'lightVibrant'
  | 'muted'
  | 'vibrant';

export type Palette = { [name in SwatchName]?: string };

interface PaletteState {
  loading?: boolean;
  palette?: Palette;
}

export const usePalette = (imageUrl?: string | null): PaletteState => {
  const hasMounted = useHasMounted();
  const [palette, setPalette] = useState<Palette | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!imageUrl || !hasMounted) return;
    try {
      Vibrant.from(imageUrl)
        .getPalette()
        .then((palette) => {
          setLoading(false);
          const parsedPalette: Palette = {};
          Object.keys(palette).forEach((swatchName) => {
            const swatch = palette[swatchName];
            if (swatch) {
              const swatchNameInCamelCase = [
                swatchName[0].toLowerCase(),
                swatchName.substring(1),
              ].join('') as SwatchName;
              parsedPalette[swatchNameInCamelCase] = swatch.hex;
            }
          });
          setPalette(parsedPalette);
        });
    } catch (e) {
      setLoading(false);
    }
  }, [imageUrl, hasMounted]);

  return { loading, palette };
};
