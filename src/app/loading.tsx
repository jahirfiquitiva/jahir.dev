import { Ring } from '@/components/atoms/loaders/ring';

const Loading = () => (
  <div
    className={
      'flex flex-col w-full flex-1 items-center justify-center bg-transparent'
    }
  >
    <Ring
      size={48}
      lineWeight={6}
      speed={2}
      color={'var(--color-accent, #88a4e6)'}
    />
  </div>
);

export default Loading;
