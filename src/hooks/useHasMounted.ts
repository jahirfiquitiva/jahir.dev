// Code from: https://www.joshwcomeau.com/snippets/react-hooks/use-has-mounted/
import { useState, useEffect } from 'react';

export default function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}
