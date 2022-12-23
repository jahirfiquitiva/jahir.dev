import Vibrant from 'node-vibrant';
import { useEffect, useState } from 'react';

type SwatchNames =
  | 'darkMuted'
  | 'darkVibrant'
  | 'lightMuted'
  | 'lightVibrant'
  | 'muted'
  | 'vibrant';

type Palette = { [name in SwatchNames]?: string };

interface PaletteState {
  loading?: boolean;
  palette?: Palette;
}

export const useSafePalette = (imageUrl?: string | null): PaletteState => {
  const [palette, setPalette] = useState<Palette | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!imageUrl) return;
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
              ].join('') as SwatchNames;
              parsedPalette[swatchNameInCamelCase] = swatch.hex;
            }
          });
          setPalette(parsedPalette);
        });
    } catch (e) {
      setLoading(false);
    }
  }, [imageUrl]);

  return { loading, palette };
};
