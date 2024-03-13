import { Section } from '@/components/atoms/section';

import { Book } from './book';
import { Music } from './music';

export const Activity = () => {
  return (
    <Section id={'activity'}>
      <h2>Activity</h2>
      <div
        className={
          'grid grid-cols-1 gap-3 tablet-sm:grid-cols-2 tablet-sm:gap-4'
        }
      >
        <Music />
        <Book />
      </div>
    </Section>
  );
};
