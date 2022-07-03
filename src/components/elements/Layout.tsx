import { Toolbar } from '@/components/molecules';
import { FC } from '@/types';

export const Layout: FC = (props) => {
  return (
    <>
      <Toolbar />
      {props.children}
    </>
  );
};
