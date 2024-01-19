import { Icon } from '@/components/atoms/icon';
import { loading } from '@/components/icons';
import cx from '@/utils/cx';

const Loading = (props: { sm?: boolean }) => (
  <div
    className={cx(
      'flex flex-col w-full flex-1 items-center justify-center',
      !props.sm ? 'min-h-screen' : 'h-full',
    )}
  >
    <Icon className={cx('size-12 animate-spin text-accent')} path={loading} />
    <span className={'sr-only'}>Loading...</span>
  </div>
);

export default Loading;
