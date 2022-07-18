/* eslint-disable dot-notation */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextApiRequest, NextApiResponse } from 'next';

import { NextApiFunc } from '~/types';

const dbApiUrl = 'https://api.notion.com/v1/databases';
const {
  NOTION_INTEGRATION_TOKEN: notionToken = '',
  NOTION_BOOKMARKS_DB_ID: bookmarksDbId = '',
} = process.env;
const authHeaders =
  notionToken && notionToken.length > 0
    ? {
        Authorization: `Bearer ${notionToken}`,
        'Notion-Version': '2021-08-16',
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

const requestOptions = {
  method: 'POST',
  headers: authHeaders,
  body: raw,
};

export default async (
  _: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  try {
    const databaseRequest = await fetch(
      `${dbApiUrl}/${bookmarksDbId}/query`,
      // @ts-ignore
      requestOptions,
    );
    const { results = [] } = await databaseRequest.json();

    const bookmarks = results
      // @ts-ignore
      .map((result) => {
        const { icon, properties } = result;
        const { Title, Link, Type } = properties;
        const isHidden = (Type['multi_select'] || [])
          // @ts-ignore
          .some((type) => {
            return hiddenCategories.includes(type.name);
          });
        if (isHidden) return null;

        const title = Title?.title?.[0]?.text?.content;
        const iconUrl = icon?.[icon?.type || 0]?.url;
        const domain = (Link?.url || '')
          .replace(/(^\w+:|^)\/\//, '')
          .replace(/\//g, '');

        return { link: Link?.url, title, icon: iconUrl, domain };
      })
      // @ts-ignore
      .filter((it) => !!it && !!it.link);

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=1800',
    );

    return res.status(200).json({
      success: true,
      bookmarks,
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
};
