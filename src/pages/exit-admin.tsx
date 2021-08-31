import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useEditState } from 'tinacms/dist/edit-state';

import { Component } from '~/elements/fc';

const GoToEditPage: Component = () => {
  const { setEdit } = useEditState();
  const router = useRouter();
  useEffect(() => {
    setEdit(false);
    router.back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Exiting edit mode..</div>;
};

export default GoToEditPage;
