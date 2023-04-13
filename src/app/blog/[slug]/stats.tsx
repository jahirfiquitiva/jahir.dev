import { Stat } from '@/components/views/mdx/ui/stat';
import type { Post } from '@/types';
import { formatDate } from '@/utils/format/format-date';

interface StatsProps {
  slug: Post['slug'];
  date?: Post['date'];
  readingTime?: Post['readingTime'];
  devToId?: Post['devToId'];
  inProgress?: Post['inProgress'];
}

const Stats = (props: StatsProps) => {
  const { date, readingTime } = props;
  const readableDate = formatDate(date);
  return (
    <p className={'flex flex-wrap items-center gap-12 mt-8 mb-20'}>
      {Boolean(readableDate) && (
        <Stat
          title={`Blog post published on ${readableDate}`}
          aria-label={`Blog post published on ${readableDate}`}
        >
          {readableDate}
        </Stat>
      )}
      {Boolean(readingTime?.text?.length) && (
        <Stat
          title={`Blog post takes ${readingTime?.minutes} minutes to read`}
          aria-label={`Blog post takes ${readingTime?.minutes} minutes to read`}
        >
          {readingTime?.text}
        </Stat>
      )}
    </p>
  );
};

export default Stats;
