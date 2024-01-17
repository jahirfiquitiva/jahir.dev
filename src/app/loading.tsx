import { Icon } from '@/components/atoms/icon';
import { loading } from '@/components/icons';
import cx from '@/utils/cx';

const Loading = (props: { sm?: boolean }) => (
  <div
    className={cx(
      'flex flex-col w-full items-center justify-center',
      !props.sm && 'h-[calc(100vh_-_9rem)] tablet-md:h-[calc(100vh_-_10rem)]',
      !props.sm ? 'desktop:h-[calc(100vh_-_28rem)]' : 'h-full',
    )}
  >
    <Icon className={cx('size-12 animate-spin text-accent')} path={loading} />
    <span className={'sr-only'}>Loading...</span>
  </div>
);

export default Loading;
