/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getDomainFromUrl } from '@/utils';

/* eslint-disable camelcase */
const dbApiUrl = 'https://api.notion.com/v1';
const {
  NOTION_INTEGRATION_TOKEN: notionToken = '',
  NOTION_BOOKMARKS_DB_ID: bookmarksDbId = '',
} = process.env;
const NOTION_API_VERSION = '2022-06-28';
const authHeaders =
  notionToken && notionToken.length > 0
    ? {
        Authorization: `Bearer ${notionToken}`,
        'Notion-Version': NOTION_API_VERSION,
        'Content-Type': 'application/json',
      }
    : {};

const hiddenCategories = ['Tools', 'Blog Posts', 'Private'];

const buildAndFilter = () => {
  const filters = [];
  for (const category of hiddenCategories) {
    filters.push({
      property: 'Type',
      multi_select: {
        does_not_contain: category,
      },
    });
  }
  return filters;
};

const raw = JSON.stringify({
  filter: {
    and: buildAndFilter(),
  },
  sorts: [
    {
      property: 'Title',
      timestamp: 'created_time',
      direction: 'ascending',
    },
  ],
});

export const requestOptions = {
  method: 'POST',
  headers: authHeaders,
  body: raw,
};

export const databaseQueryEndpoint = `${dbApiUrl}/databases/${bookmarksDbId}/query`;

const fetchSinglePageProperty = (pageId: string, propertyId: string) => {
  const endpoint = `${dbApiUrl}/pages/${pageId}/properties/${propertyId}`;
  return fetch(endpoint, {
    method: 'GET',
    // @ts-ignore
    headers: { ...authHeaders, Accept: 'application/json' },
  }).then((response) => response.json());
};

const fetchPageProperties = (pageId: string, propertiesIds: Array<string>) =>
  propertiesIds.map((propertyId) =>
    fetchSinglePageProperty(pageId, propertyId),
  );

interface ExternalIconProperty {
  type: 'external';
  external: {
    url: string;
  };
}

interface FileIconProperty {
  type: 'file';
  file: {
    url: string;
    expiry_time: `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;
  };
}

type IconProperty = ExternalIconProperty | FileIconProperty;

interface PageProperty {
  id: string;
}

interface BookmarkApiResult {
  id: string;
  icon: IconProperty;
  properties: {
    Title: PageProperty;
    Link: PageProperty;
    Type: PageProperty;
  };
}

export interface InspirationItem {
  title?: string;
  domain?: string;
  link?: string;
}

export const fetchBookmarkPromise = (
  result: BookmarkApiResult,
): Promise<InspirationItem> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    try {
      const { id, properties } = result;
      const { Title, Link, Type } = properties;

      const propertiesResponse = await Promise.all(
        fetchPageProperties(id, [Title.id, Link.id, Type.id]),
      ).catch(() => []);

      if (!propertiesResponse || !propertiesResponse.length) return null;

      const [typeObject] = (propertiesResponse || []).filter(
        (it) => it.id == Type.id,
      );
      const isHidden = (typeObject['multi_select'] || [])
        // @ts-ignore
        .some((type) => {
          return hiddenCategories.includes(type.name);
        });
      if (isHidden) return null;

      const [titleObject] =
        propertiesResponse.filter(
          (it) => it.object == 'list' || it.id == Title.id,
        )?.[0]?.results || [];
      const [urlObject] = propertiesResponse.filter((it) => it.id == Link.id);

      const title = titleObject?.title?.text?.content;
      const domain = getDomainFromUrl(urlObject?.url || '') || '';

      return resolve({
        link: urlObject?.url,
        title,
        domain,
      });
    } catch (e) {
      return resolve({});
    }
  });
};
