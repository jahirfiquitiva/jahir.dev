/* eslint-disable max-lines-per-function */
import { Heading, Img } from '@/components/atoms';
import { Loading } from '@/components/compounds';
import { useSponsors } from '@/providers/sponsors';
import { styled } from '~/stitches';

import { DonateSponsor } from './DonateSponsor';

const TextsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column-reverse',
  '& > img': {
    maxWidth: 48,
    filter: 'drop-shadow(0 0 2px #fff)',
  },
  '@mobile-lg': {
    flexDirection: 'row',
    mb: '$12',
    gap: '$8',
    '& > div:first-of-type': {
      flex: 1,
      '& > p': { mb: 0 },
    },
    '& > img': {
      alignSelf: 'flex-end',
      transform: 'scaleX(-1)',
      maxWidth: 56,
    },
  },
  '@tablet-sm': {
    '& > img': {
      maxWidth: 64,
    },
  },
  '@tablet-lg': {
    '& > img': {
      maxWidth: 72,
    },
  },
});

const Paragraph = styled('p', {
  mt: '$8',
  mb: '$14',
});

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
    <div>
      <TextsContainer>
        <div>
          <Heading as={'h3'}>Sponsors</Heading>
          {loading ? (
            <Loading />
          ) : error || !categories.length ? (
            <Paragraph>
              No sponsors found at this time.
              <br />
              Please check back later.
            </Paragraph>
          ) : (
            <Paragraph>
              I&apos;m forever grateful to all the awesome people that support
              my work
            </Paragraph>
          )}
        </div>
        <Img
          src={'/static/images/donate/pixel-mona-heart.gif'}
          alt={'GitHub Mona pixelated animation with hearts'}
          size={72}
        />
      </TextsContainer>
      {!!categories.length && (
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
    </div>
  );
};
