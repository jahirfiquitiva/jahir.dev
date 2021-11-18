import { useState, useCallback, useEffect } from 'react';

import useHasMounted from '~/hooks/useHasMounted';

const useWindowWidth = () => {
  const hasMounted = useHasMounted();
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    if (!hasMounted) return;
    setWidth(window.innerWidth);
  }, [hasMounted]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (hasMounted) {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasMounted, handleResize]);

  return width;
};

export default useWindowWidth;
