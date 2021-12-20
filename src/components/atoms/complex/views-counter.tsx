import { useEffect } from 'react';

import useHasMounted from '~/hooks/useHasMounted';
import useRequest from '~/hooks/useRequest';
import { Component, ComponentProps, Views } from '~/types';

interface ViewsCounterProps extends ComponentProps {
  slug: string;
}

export const ViewsCounter: Component<ViewsCounterProps> = (props) => {
  const { slug } = props;

  const hasMounted = useHasMounted();
  const { data } = useRequest<Views>(`/api/views/${slug}`);
  const views = Number(data?.total || 0);

  useEffect(() => {
    if (!hasMounted) return;

    const hostname = window?.location?.hostname || 'localhost';
    // Count views in production website only
    if (!hostname.includes('jahir.dev')) return;

    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    registerView();
  }, [hasMounted, slug]);

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
};
