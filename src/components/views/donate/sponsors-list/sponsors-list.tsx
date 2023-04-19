import { Fragment } from 'react';

import { SponsorItem } from '../sponsor';

import { StyledList } from './sponsors-list.styles';

interface SponsorsListProps {
  categories: Array<SponsorsCategory>;
}

export const SponsorsList = (props: SponsorsListProps) => {
  const { categories } = props;
  return (
    <StyledList>
      {categories.map((category) => {
        const { name, key, sponsors } = category;
        return (
          <Fragment key={key}>
            {sponsors.map((sponsor) => {
              return (
                <SponsorItem
                  key={sponsor.name}
                  sponsor={sponsor}
                  category={name}
                  tier={key}
                />
              );
            })}
          </Fragment>
        );
      })}
    </StyledList>
  );
};
