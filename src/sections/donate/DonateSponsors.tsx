import { Heading } from '@/components/atoms';
import type {
  SponsorCategory,
  SponsorsCategoriesResponse,
} from '@/lib/sponsors';
import { styled } from '~/stitches';

import { DonateSponsor } from './DonateSponsor';

const categories: Array<SponsorCategory> = [
  {
    key: 'ball',
    name: 'Crystal Ball',
    sponsors: [
      {
        name: 'Jahir',
        link: 'https://jahir.dev',
      },
    ],
  },
  {
    key: 'unicorn',
    name: 'Unicorn',
    sponsors: [
      {
        name: 'Jahir',
        link: 'https://jahir.dev',
      },
    ],
  },
  {
    key: 'lightning',
    name: 'Lightning',
    sponsors: [
      {
        name: 'Jahir',
        link: 'https://jahir.dev',
      },
    ],
  },
  {
    key: 'diamond',
    name: 'Diamond',
    sponsors: [
      {
        name: 'Jahir',
        link: 'https://jahir.dev',
      },
    ],
  },
  {
    key: 'rocket',
    name: 'Rocket',
    sponsors: [
      {
        name: 'Jahir',
        link: 'https://jahir.dev',
      },
    ],
  },
];

const SponsorsList = styled('ul', {
  display: 'block',
  borderRadius: '$space$8',
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
  return (
    <>
      <Heading as={'h3'}>Sponsors</Heading>
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
                    tierName={category.name}
                  />
                );
              })}
            </>
          );
        })}
      </SponsorsList>
    </>
  );
};
