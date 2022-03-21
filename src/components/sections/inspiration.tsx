import styled from '@emotion/styled';

import {
  Heading,
  Image,
  LinkCard,
  CenteredSection,
} from '~/components/atoms/simple';
import { Masonry, MasonryBreakpoints } from '~/components/elements';
import useRequest from '~/hooks/useRequest';
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

const EmptyText = styled.p`
  margin: 1.2rem 0 2.4rem;
`;

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

interface InspirationItemProps extends ComponentProps {
  item: InspirationSite;
}

const InspirationItem: Component<InspirationItemProps> = (props) => {
  const { title, link, icon, domain } = props.item;
  const {
    data = {
      favicon: `https://www.google.com/s2/favicons?domain=${domain}`,
    },
  } = useRequest<{ favicon?: string }>(`/api/favicon?domain=${domain}`);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { favicon = '' } = data;

  return (
    <InspirationCard href={link || '#'} title={`${title}'s website`}>
      <Heading size={'4'}>{title}</Heading>
      <FaviconLinkContainer>
        <Image
          alt={title.split('')[0] || 'F'}
          src={icon || favicon || ''}
          width={24}
          height={24}
          avoidNextImage
        />
        <small>{formatLink(link)}</small>
      </FaviconLinkContainer>
    </InspirationCard>
  );
};

export const Inspiration: Component = () => {
  const { data, loading } =
    useRequest<{ bookmarks: Array<InspirationSite> }>('/api/bookmarks');

  return (
    <CenteredSection id={'inspiration'}>
      <Heading size={'3'} shadowColor={'brand'} gradientColor={'brand-to-blue'}>
        Inspiration
      </Heading>
      <Subtitle>
        These are some people and websites that have been inspiration to build
        this website and some of my projects 👏{' '}
        <em>(In no particular order).</em>
      </Subtitle>

      {loading ? <EmptyText>Loading...</EmptyText> : null}
      {!loading && !data?.bookmarks?.length ? (
        <EmptyText>No inspiration bookmarks found.</EmptyText>
      ) : null}

      <InspirationMasonry breakpoints={masonryBreakpoints} gap={'1rem'}>
        {(data?.bookmarks || []).map((item, i) => {
          return <InspirationItem key={i} item={item} />;
        })}
      </InspirationMasonry>
    </CenteredSection>
  );
};
