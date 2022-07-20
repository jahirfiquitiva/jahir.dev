import { Heading } from '@/components/atoms';
import { Loading } from '@/components/compounds';
import { useSponsors } from '@/providers/sponsors';
import { styled } from '~/stitches';

import { DonateSponsor } from './DonateSponsor';

const SponsorsList = styled('ul', {
  display: 'block',
  borderRadius: '$space$10',
  border: '1px solid $divider',
  listStyle: 'none',
  p: 0,
  '& > li:not(:last-of-type)': {
    borderBottom: '1px solid $divider',
  },
  '& > li:first-of-type > a': {
    borderTopLeftRadius: '$space$8',
    borderTopRightRadius: '$space$8',
  },
  '& > li:last-of-type > a': {
    borderBottomLeftRadius: '$space$8',
    borderBottomRightRadius: '$space$8',
  },
});

export const DonateSponsors = () => {
  const { categories, loading, error } = useSponsors();
  return (
    <>
      <Heading as={'h3'}>Sponsors</Heading>
      {loading ? (
        <Loading />
      ) : error || !categories.length ? (
        <p>
          No sponsors found at this time.
          <br />
          Please check back later.
        </p>
      ) : (
        <div>
          <SponsorsList>
            {categories.map((category) => {
              return (
                <>
                  {category.sponsors?.map((sponsor, index) => {
                    return (
                      <DonateSponsor
                        key={sponsor.username || index}
                        sponsor={sponsor}
                        tier={category.key}
                      />
                    );
                  })}
                </>
              );
            })}
          </SponsorsList>
          <small style={{ margin: '1rem 0 0', display: 'block' }}>
            <sup>*</sup> Unicorn sponsors are special one-time supporters.
          </small>
          <small>
            <sup>**</sup> Star sponsors not listed here.
          </small>
        </div>
      )}
    </>
  );
};
