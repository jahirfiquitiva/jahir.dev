import { ComputedFields, defineDocumentType } from 'contentlayer/source-files';

import { getWebsiteFavicon } from './../src/lib/favicons';

const getItemFavicon = async (link: string) =>
  new Promise(
    // eslint-disable-next-line no-async-promise-executor
    async (resolve) => {
      let favicon = '';
      try {
        favicon = await getWebsiteFavicon(link);
      } catch (e) {}
      resolve(favicon);
    },
  );

const computedInspirationFields: ComputedFields = {
  favicon: {
    type: 'string',
    resolve: async (doc) => {
      const favicon = await getItemFavicon(doc.link);
      return favicon;
    },
  },
};

const InspirationItem = defineDocumentType(() => ({
  name: 'InspirationItem',
  filePathPattern: 'inspiration/*.json',
  fields: {
    title: { type: 'string', required: true },
    link: { type: 'string', required: true },
    favicon: { type: 'string' },
  },
  computedFields: computedInspirationFields,
}));

export default InspirationItem;
