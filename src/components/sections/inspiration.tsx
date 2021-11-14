import { mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';
import tw, { theme } from 'twin.macro';

import {
  MasonryGrid,
  MasonryBreakpoints,
  SectionHeading,
} from '~/components/atoms/complex';
import {
  Heading,
  Image,
  LinkCard,
  CenteredSection,
} from '~/components/atoms/simple';
import { Component, ComponentProps, InspirationSite } from '~/types';

const InspirationCard = tw(LinkCard)`
  py-8 px-10
  truncate
`;

const FaviconLinkContainer = tw.div`
  mt-2
  flex
  items-center

  [>img, >svg]:(width[24px] height[24] mr-8 object-contain object-center)
`;

export interface InspirationProps extends ComponentProps {
  inspirationItems?: Array<InspirationSite>;
}

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[theme`screens.sm`] = 2;
masonryBreakpoints[theme`screens.lg`] = 3;

const formatLink = (link?: string): string => {
  if (!link) return '';
  return link
    .replace(/(^\w+:|^)\/\//, '')
    .replace(/\//g, '')
    .replace('www.', '');
};

const validFavicon = (favicon?: string): boolean => {
  if (!favicon) return false;
  return favicon.length > 0 && !favicon.includes('data:image');
};

export const Inspiration: Component<InspirationProps> = (props) => {
  const { inspirationItems } = props;

  return (
    <CenteredSection id={'inspiration'}>
      <SectionHeading
        size={'3'}
        shadowColor={'brand'}
        gradientColor={'brand-to-blue'}
        emoji={'🌎'}
      >
        Inspiration
      </SectionHeading>
      <p tw={'my-8'}>
        These are some people and websites that have been inspiration to build
        this website and some of my projects 👏 <i>(In no particular order).</i>
      </p>

      <MasonryGrid breakpoints={masonryBreakpoints} gap={'1rem'} tw={'my-16'}>
        {(inspirationItems || []).map((item, i) => {
          return (
            <InspirationCard
              key={i}
              href={item.link}
              title={`Link to ${item.title}'s website`}
            >
              <Heading size={'4'} fontSize={'6'}>
                {item.title}
              </Heading>
              {(item.description?.length || 0) > 0 && <p>{item.description}</p>}
              <FaviconLinkContainer>
                {validFavicon(item.favicon) ? (
                  <Image
                    alt={item.title.split('')[0] || 'F'}
                    src={item.favicon ?? ''}
                    avoidNextImage
                  />
                ) : (
                  <Icon path={mdiWeb} size={0.8} />
                )}
                <small>{formatLink(item.link)}</small>
              </FaviconLinkContainer>
            </InspirationCard>
          );
        })}
      </MasonryGrid>
    </CenteredSection>
  );
};
