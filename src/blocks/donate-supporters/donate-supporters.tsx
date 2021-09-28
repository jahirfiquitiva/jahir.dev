import styled from '@emotion/styled';
import Image from 'next/image';
import { usePalette } from 'react-palette';

import { SectionHeading } from '~/components/section-heading';
import { ExtLink } from '~/elements/base/ext-link';
import { Component, ComponentProps } from '~/elements/base/fc';
import {
  buildChipStyles,
  Chip,
  ChipGroup,
  ImageChip,
} from '~/elements/simple/chip';
import { Divider } from '~/elements/simple/divider';
import { Heading } from '~/elements/simple/heading';
import { useTheme } from '~/providers/theme';
import { mediaQueries } from '~/types';
import { Supporter, supporters } from '~/types/supporter';
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

const SupporterLinkChip = styled(ImageChip)`
  cursor: pointer;
`;

const NoSupportersText = styled.p`
  margin-top: 0.4rem;
  margin-bottom: 1.6rem;
`;

const SupportersContainer = styled.div`
  margin-top: 0.4rem;
  margin-bottom: 0.6rem;

  ${mediaQueries.tablet.sm} {
    margin-bottom: 1.6rem;
  }
`;

interface SupporterChipProps extends ComponentProps, Supporter {}

const SupporterChip: Component<SupporterChipProps> = (props) => {
  const { link, name, photo } = props;
  const { isDark } = useTheme();
  const { data: paletteData } = usePalette(photo || '');
  const color = getColorFromPalette(paletteData, isDark);

  return (
    <ExtLink to={link || '#'} underline={false}>
      <SupporterLinkChip style={buildChipStyles(color)}>
        <Image
          src={photo || ''}
          alt={name}
          objectFit={'cover'}
          objectPosition={'center'}
          width={24}
          height={24}
        />
        &nbsp;{name}
      </SupporterLinkChip>
    </ExtLink>
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
            layout={'fill'}
            objectFit={'contain'}
            loading={'lazy'}
            decoding={'async'}
            src={'/static/gifs/thanks.gif'}
            alt={
              'Adventure Time characters hugging each other and saying thanks'
            }
          />
        </ThanksGifContainer>
      </DonateSupportersHeader>
      <SupportersContainer id={'supporters'}>
        {supporters.map((category) => {
          const [emoji, ...name] = category.name.split(' ');
          return (
            <>
              <Heading size={'5'}>
                <ExtLink
                  to={`https://github.com/sponsors/jahirfiquitiva/sponsorships?tier_id=${category.id}`}
                >
                  {emoji}&nbsp;&nbsp;&nbsp;{name.join(' ').trim()}&nbsp;Sponsor
                </ExtLink>
              </Heading>
              {category?.description && (
                <p className={'small'}>{category?.description}</p>
              )}
              {(category?.supporters?.length || 0) <= 0 ? (
                <NoSupportersText className={'small'}>None</NoSupportersText>
              ) : (
                <ChipGroup>
                  {category?.supporters?.map((supporter, i) => {
                    return (
                      <li key={i}>
                        <SupporterChip {...supporter} />
                      </li>
                    );
                  })}
                </ChipGroup>
              )}
            </>
          );
        })}
      </SupportersContainer>
    </section>
  );
};
