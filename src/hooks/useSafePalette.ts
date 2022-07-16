import { useMemo } from 'react';
import { usePalette, PaletteState } from 'react-palette';

import { useHasMounted } from '@/hooks';

const defaultPaletteData: PaletteState = {
  data: {},
  loading: false,
  error: Error('Missing image url'),
};

export const useSafePalette = (
  imageUrl: string | null | undefined,
): PaletteState => {
  const hasMounted = useHasMounted();

  const internalImageUrl = useMemo<string>(() => {
    if (!hasMounted) return '';
    return imageUrl || '';
  }, [hasMounted, imageUrl]);

  const paletteData = usePalette(internalImageUrl);

  return paletteData || defaultPaletteData;
};
