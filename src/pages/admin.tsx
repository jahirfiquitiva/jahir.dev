import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useEditState } from 'tinacms/dist/edit-state';

import { Component } from '~/elements/base/fc';

const GoToEditPage: Component = () => {
  const { setEdit } = useEditState();
  const router = useRouter();
  useEffect(() => {
    setEdit(true);
    router.back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Entering edit mode..</div>;
};

export default GoToEditPage;
