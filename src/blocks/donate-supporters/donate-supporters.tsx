import styled from '@emotion/styled';
import { Fragment, useMemo } from 'react';
import { usePalette } from 'react-palette';

import { SectionHeading, ChipGroup } from '~/new-components/atoms/complex';
import {
  Heading,
  Image,
  Link,
  ImageChip,
  Divider,
} from '~/new-components/atoms/simple';
import { useTheme } from '~/providers/theme';
import {
  Component,
  ComponentProps,
  mediaQueries,
  Supporter,
  supporters,
} from '~/types';
import { buildChipStyles } from '~/utils/build-chip-styles';
import getColorFromPalette from '~/utils/get-color-from-palette';

const DonateSupportersHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
  align-items: center;

  & p {
    margin: 0.8rem 0;
  }

  ${mediaQueries.tablet.sm} {
    margin-top: 0.6rem;
    flex-direction: row;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
`;

const ThanksGifContainer = styled.div`
  position: relative;
  height: 170px;
  width: auto;
  max-width: 300px;
  margin: 0 auto;
  width: 100%;
  min-width: 256px;
  text-align: end;
`;

const NoSupportersText = styled.p`
  margin-top: 0.4rem;
  margin-bottom: 1.6rem;
`;

const SupportersContainer = styled.div`
  margin-top: 0.4rem;
  margin-bottom: calc(var(--content-bottom-margin) - 1rem);
`;

interface SupporterChipProps extends ComponentProps, Supporter {}

const SupporterChip: Component<SupporterChipProps> = (props) => {
  const { link, name, photo } = props;
  const { isDark, themeReady } = useTheme();
  const { data: paletteData } = usePalette(photo || '');

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
      <ImageChip tw={'cursor-pointer'} style={buildChipStyles(color)}>
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

export const DonateSupporters: Component = () => {
  return (
    <section id={'thanks'}>
      <Divider gradientColor={'red-to-purple'} />
      <DonateSupportersHeader>
        <TitleContainer>
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
        </TitleContainer>
        <ThanksGifContainer>
          <Image
            objectFit={'contain'}
            src={'/static/gifs/thanks.gif'}
            alt={
              'Adventure Time characters hugging each other and saying thanks'
            }
          />
        </ThanksGifContainer>
      </DonateSupportersHeader>
      <SupportersContainer id={'supporters'}>
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
              {category?.description && <><br/><small>{category?.description}</small></>}
              {(category?.supporters?.length || 0) <= 0 ? (
                <NoSupportersText className={'small'}>None</NoSupportersText>
              ) : (
                <ChipGroup>
                  {category?.supporters?.map((supporter, supporterIndex) => {
                    return (
                      <li key={`${categoryIndex}-${supporterIndex}`}>
                        <SupporterChip {...supporter} />
                      </li>
                    );
                  })}
                </ChipGroup>
              )}
            </Fragment>
          );
        })}
      </SupportersContainer>
    </section>
  );
};
