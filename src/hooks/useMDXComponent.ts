import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

export const useMDXComponent = (
  code?: string,
  globals: Record<string, unknown> = {},
) => {
  const Component = useMemo(() => {
    if (!code) return null;
    try {
      return getMDXComponent(code, globals);
    } catch (e) {
      return null;
    }
  }, [code, globals]);
  return Component;
};
