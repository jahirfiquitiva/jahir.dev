import styled from '@emotion/styled';
import { mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';

import { SectionHeading } from '~/components/atoms/complex';
import {
  Heading,
  Image,
  LinkCard,
  CenteredSection,
} from '~/components/atoms/simple';
import { Masonry, MasonryBreakpoints } from '~/components/elements';
import {
  Component,
  ComponentProps,
  InspirationSite,
  mediaQueries,
  viewports,
} from '~/types';

const Subtitle = styled.p`
  margin: 0.8rem 0;
`;

const InspirationMasonry = styled(Masonry)`
  margin: 1.6rem 0;
`;

const InspirationCard = styled(LinkCard)`
  padding: 0.6rem 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${mediaQueries.mobile.lg} {
    padding: 0.8rem 1rem;
  }

  & > h4 {
    font-size: var(--font-2xs);
    ${mediaQueries.mobile.lg} {
      font-size: var(--font-xs);
    }
  }

  & > p {
    font-size: var(--font-3xs);
    ${mediaQueries.mobile.lg} {
      font-size: var(--font-2xs);
    }
  }

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const FaviconLinkContainer = styled.div`
  margin-top: 0.2rem;
  display: flex;
  align-items: center;

  & > img,
  & > svg {
    width: 24px;
    height: 24px;
    margin-right: 0.8rem;
    object-fit: contain;
    object-position: center;
  }
`;

export interface InspirationProps extends ComponentProps {
  inspirationItems?: Array<InspirationSite>;
}

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[viewports.mobile.sm] = 2;
masonryBreakpoints[viewports.tablet.sm] = 3;

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
      <Subtitle>
        These are some people and websites that have been inspiration to build
        this website and some of my projects 👏 <i>(In no particular order).</i>
      </Subtitle>

      <InspirationMasonry breakpoints={masonryBreakpoints} gap={'1rem'}>
        {(inspirationItems || []).map((item, i) => {
          return (
            <InspirationCard
              key={i}
              href={item.link}
              title={`Link to ${item.title}'s website`}
            >
              <Heading size={'4'}>{item.title}</Heading>
              {(item.description?.length || 0) > 0 && <p>{item.description}</p>}
              <FaviconLinkContainer>
                {validFavicon(item.favicon) ? (
                  <Image
                    alt={item.title.split('')[0] || 'F'}
                    src={item.favicon ?? ''}
                    width={24}
                    height={24}
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
      </InspirationMasonry>
    </CenteredSection>
  );
};
