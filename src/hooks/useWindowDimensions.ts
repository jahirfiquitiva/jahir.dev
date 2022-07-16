import { useState, useCallback, useEffect } from 'react';

import { useHasMounted } from './useHasMounted';

interface WindowDimensions {
  width: number;
  height: number;
}

export const useWindowDimensions = (): WindowDimensions => {
  const hasMounted = useHasMounted();
  const [dimens, setDimens] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });

  const handleResize = useCallback(() => {
    if (!hasMounted) return;
    setDimens({ width: window.innerWidth, height: window.innerHeight });
  }, [hasMounted]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (hasMounted) {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasMounted, handleResize]);

  return dimens;
};
