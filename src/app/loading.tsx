import { Ring } from '@uiball/loaders';

const Loading = () => {
  return (
    <div className={'flex flex-col w-full flex-1 items-center justify-center'}>
      <Ring size={48} lineWeight={6} speed={2} color={'var(--color-accent)'} />
    </div>
  );
};

export default Loading;
