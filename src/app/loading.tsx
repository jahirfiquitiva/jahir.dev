import { Ring } from '@/components/atoms/loaders/ring';
import cx from '@/utils/cx';

const Loading = (props: { sm?: boolean }) => (
  <div
    className={cx(
      'flex flex-col w-full items-center justify-center',
      !props.sm && 'h-[calc(100vh_-_9rem)] tablet-md:h-[calc(100vh_-_10rem)]',
      !props.sm ? 'desktop:h-[calc(100vh_-_28rem)]' : 'h-full',
    )}
  >
    <Ring
      size={48}
      lineWeight={6}
      speed={2}
      color={'var(--color-accent, #88a4e6)'}
    />
    <span className={'sr-only'}>Loading...</span>
  </div>
);

export default Loading;
