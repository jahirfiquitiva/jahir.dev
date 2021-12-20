import { useEffect } from 'react';

import useRequest from '~/hooks/useRequest';
import { Views } from '~/types';

export const ViewsCounter = ({ slug }) => {
  const { data } = useRequest<Views>(`/api/views/${slug}`);
  const views = Number(data?.total || 0);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    registerView();
  }, [slug]);

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
};
