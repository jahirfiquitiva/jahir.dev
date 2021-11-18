import { Fragment, useMemo } from 'react';
import tw from 'twin.macro';

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
import { Component, ComponentProps, Supporter, supporters } from '~/types';
import getColorFromPalette from '~/utils/colors/get-color-from-palette';
import { buildChipStyles } from '~/utils/styles/build-chip-styles';

const SupportersHeader = tw.div`
  flex
  flex-col
  my-20
  overflow-hidden
  items-start
  gap-16

  md:(flex-row items-center)
`;

const ThanksGif = tw(Image)`
  order-1
  min-width[256px]
  max-width[300px]
  md:(order-2)
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

export const Supporters: Component = () => {
  return (
    <>
      <section id={'thanks'}>
        <Divider gradientColor={'red-to-purple'} />
        <SupportersHeader>
          <div tw={'flex flex-col w-full items-start order-2 md:(order-1)'}>
            <SectionHeading
              size={'3'}
              emoji={'🙌'}
              shadowColor={'purple'}
              gradientColor={'purple-to-brand'}
            >
              Thanks!
            </SectionHeading>
            <p tw={'mt-8 md:(pr-32)'}>
              I&apos;m really grateful to all the awesome people that support my
              work.
            </p>
          </div>
          <ThanksGif
            objectFit={'contain'}
            src={'/static/gifs/thanks.gif'}
            alt={
              'Adventure Time characters hugging each other and saying thanks'
            }
          />
        </SupportersHeader>
      </section>
      <section id={'supporters'} tw={'flex flex-col mt-4 mb-8'}>
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
                <small tw={'mt-4 mb-16'}>None</small>
              ) : (
                <ChipGroup tw={'mb-8 pt-8'}>
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
      </section>
    </>
  );
};
