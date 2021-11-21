import styled from '@emotion/styled';
import { Fragment, useMemo } from 'react';

import { SectionHeading, ChipGroup } from '~/components/atoms/complex';
import {
  Heading,
  Image,
  Link,
  ImageChip,
  Divider,
} from '~/components/atoms/simple';
import useSafePalette from '~/hooks/useSafePalette';
import { useTheme } from '~/providers/theme';
import {
  Component,
  ComponentProps,
  mediaQueries,
  Supporter,
  supporters,
} from '~/types';
import getColorFromPalette from '~/utils/colors/get-color-from-palette';
import { buildChipStyles } from '~/utils/styles/build-chip-styles';

const SupportersHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  margin: 2rem 0 0.8rem;
  overflow: hidden;
  gap: 1rem;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 0.8rem;
  order: 2;
  ${mediaQueries.tablet.sm} {
    order: 1;
  }
`;

const ThanksGif = styled(Image)`
  margin: 0;
  min-width: 256px;
  max-width: 300px;
  order: 1;
  ${mediaQueries.tablet.sm} {
    margin: 0 0 0 auto;
    order: 2;
  }
`;

const SupportersSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0.4rem 0 0.8rem;
`;

const NoSupporters = styled.small`
  margin: 0.4rem 0 1.6rem;
`;

const SupportersChipGroup = styled(ChipGroup)`
  margin-bottom: 0.8rem;
  padding-top: 0.8rem;
`;

interface SupporterChipProps extends ComponentProps, Supporter {}

const SupporterChip: Component<SupporterChipProps> = (props) => {
  const { link, name, photo } = props;
  const { isDark, themeReady } = useTheme();
  const { data: paletteData } = useSafePalette(photo);

  const color = useMemo<string | null>(() => {
    if (!themeReady) return null;
    return getColorFromPalette(paletteData, isDark);
  }, [themeReady, isDark, paletteData]);

  return (
    <Link
      title={`Link to ${name}'s website`}
      href={link || '#'}
      underline={false}
    >
      <ImageChip style={buildChipStyles(color)}>
        <Image
          src={photo || ''}
          alt={name}
          objectFit={'cover'}
          objectPosition={'center'}
          size={28}
        />
        &nbsp;{name}
      </ImageChip>
    </Link>
  );
};

export const Supporters: Component = () => {
  return (
    <>
      <section id={'thanks'}>
        <Divider gradientColor={'red-to-purple'} />
        <SupportersHeader>
          <HeaderContent>
            <SectionHeading
              size={'3'}
              emoji={'🙌'}
              shadowColor={'purple'}
              gradientColor={'purple-to-brand'}
            >
              Thanks!
            </SectionHeading>
            <p>
              I&apos;m really grateful to all the awesome people that support my
              work.
            </p>
          </HeaderContent>
          <ThanksGif
            objectFit={'contain'}
            src={'/static/gifs/thanks.gif'}
            alt={
              'Adventure Time characters hugging each other and saying thanks'
            }
          />
        </SupportersHeader>
      </section>
      <SupportersSection id={'supporters'}>
        {supporters.map((category, categoryIndex) => {
          const [emoji, ...name] = category.name.split(' ');
          return (
            <Fragment key={categoryIndex}>
              <Heading size={'5'}>
                <Link
                  title={`Link to GitHub Sponsors ${name
                    .join(' ')
                    .trim()} Tier Page`}
                  href={`https://github.com/sponsors/jahirfiquitiva/sponsorships?tier_id=${category.id}`}
                >
                  {emoji}&nbsp;&nbsp;&nbsp;{name.join(' ').trim()}&nbsp;Sponsor
                </Link>
              </Heading>
              {category?.description && <small>{category?.description}</small>}
              {(category?.supporters?.length || 0) <= 0 ? (
                <NoSupporters>None</NoSupporters>
              ) : (
                <SupportersChipGroup>
                  {category?.supporters?.map((supporter, supporterIndex) => {
                    return (
                      <li key={`${categoryIndex}-${supporterIndex}`}>
                        <SupporterChip {...supporter} />
                      </li>
                    );
                  })}
                </SupportersChipGroup>
              )}
            </Fragment>
          );
        })}
      </SupportersSection>
    </>
  );
};
