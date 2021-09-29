import { GetStaticProps } from 'next';
import { FC } from 'react';

import { Page } from '~/blocks/page';
import { getWebsiteFavicon } from '~/lib/favicons';
import { Inspiration, InspirationProps } from '~/sections/inspiration';
import { InspirationSite, inspirationSites } from '~/types';

const InspirationPage: FC<InspirationProps> = (props) => {
  return (
    <Page title={'Inspiration ~ Jahir Fiquitiva 💎'}>
      <Inspiration inspirationItems={props.inspirationItems} />
    </Page>
  );
};

export default InspirationPage;

const getItemFavicon = async (item: InspirationSite) =>
  new Promise(
    // eslint-disable-next-line no-async-promise-executor
    async (resolve) => {
      let favicon = '';
      try {
        favicon = await getWebsiteFavicon(item.link);
      } catch (e) {}
      resolve({ ...item, favicon });
    },
  );

export const getStaticProps: GetStaticProps = async () => {
  const mappedInspo = await Promise.all(
    (inspirationSites || []).map(getItemFavicon),
  ).catch(() => []);

  return {
    props: {
      inspirationItems: mappedInspo,
    },
  };
};
