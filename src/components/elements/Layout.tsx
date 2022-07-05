import { Toolbar } from '@/components/molecules';
import type { FC } from '@/types';

export const Layout: FC = (props) => {
  return (
    <>
      <Toolbar />
      {props.children}
    </>
  );
};
