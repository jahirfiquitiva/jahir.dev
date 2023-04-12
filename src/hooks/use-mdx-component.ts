import {
  useMDXComponent as useContentLayerMDXComponent,
  useLiveReload,
} from 'next-contentlayer/hooks';

export const useMDXComponent = (code?: string) => {
  useLiveReload();
  const Component = useContentLayerMDXComponent(
    code || 'var Component = () => { return null }; return Component',
  );
  return Component;
};
