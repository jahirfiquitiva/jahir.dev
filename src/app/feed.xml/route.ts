import xml from 'xml';

import type { Blog } from '@/lib/blog';
import { getReadableBlogs } from '@/utils/blog';

const allowInProgress = process.env.NODE_ENV === 'development';

const formatImageUrl = (url?: string) => {
  if (!url) return '';
  if (url.startsWith('/')) return `https://jahir.dev${url}`;
  return url;
};

const buildDescriptionHtml = (post: Blog): string => {
  let description = '';
  if (post.excerpt) description += `<p>${post.excerpt}</p><br/>`;

  if (post.link)
    description += `<b><a href="${post.link}">Read more...</a></b><br/><br/>`;
  else
    description += `<b><a href="https://jahir.dev/blog/${post.slug}">Read more...</a></b><br/><br/>`;

  if (post.hero) {
    description += `<p><img src="${formatImageUrl(post.hero)}" `;
    description += `alt="${post.title}"></p>`;
  }
  return description;
};

const getAllPostRssData = (post: Blog) => {
  const descriptionHtml = buildDescriptionHtml(post);
  return {
    title: post.title,
    url: post.link || `https://jahir.dev/blog/${post.slug}`,
    date: post.date,
    description: post.excerpt,
    html: descriptionHtml,
    slug: post.slug,
    hero: post.hero,
  };
};

const buildItemForFeed = (
  elem: Record<string, string | Record<string, unknown> | object> | object,
  parentKey?: string,
) => {
  const newArray = [];
  for (const k of Object.keys(elem)) {
    const key = k as keyof typeof elem;
    const value = elem[key];
    if (key === parentKey) {
      newArray.push(value);
      continue;
    }

    const newObject = {};
    if (typeof value === 'object' && Object.keys(value).length > 1) {
      // @ts-expect-error No specific key
      newObject[k] = buildItemForFeed(value, k);
    } else {
      // @ts-expect-error No specific key
      newObject[k] = elem[k];
    }
    newArray.push(newObject);
  }
  return newArray;
};

const buildFeed = (posts: Array<ReturnType<typeof getAllPostRssData>>) => {
  const sortedPosts = posts.sort(function (first, second) {
    return new Date(second.date).getTime() - new Date(first.date).getTime();
  });
  const feedItems = [];

  feedItems.push(
    ...sortedPosts.map(function (post) {
      const description = post.html ? post.html : { _cdata: post.description };
      const actualItem = {
        title: post.title,
        pubDate: new Date(post.date).toUTCString(),
        url: post.url,
        guid: {
          _attr: { isPermaLink: true },
          guid: post.url,
        },
        description: { _attr: { type: 'html' }, description },
        featured_image: formatImageUrl(post.hero),
      };

      const feedItem = {
        item: buildItemForFeed(actualItem),
      };

      return feedItem;
    }),
  );

  return feedItems;
};

const defaultChannel = {
  'atom:link': {
    _attr: {
      href: 'https://jahir.dev/feed.xml',
      rel: 'self',
      type: 'application/rss+xml',
    },
  },
  lastBuildDate: new Date().toUTCString(),
  language: 'en-US',
  link: 'https://jahir.dev',
  title: 'Jahir Fiquitiva',
  description: 'Passionate and creative full-stack developer from Colombia',
  image_url: 'https://jahir.dev/api/og',
  image: {
    title: 'Jahir Fiquitiva',
    link: 'https://jahir.dev',
    url: 'https://jahir.dev/api/og',
  },
  copyright: `All rights reserved ${new Date().getFullYear()}, Jahir Fiquitiva`,
};

export async function GET() {
  const allBlogs = (await getReadableBlogs())
    .filter((it) => allowInProgress || !it.inProgress)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  const feedItems = await Promise.all(
    allBlogs.filter((it) => !it.inProgress).map(getAllPostRssData),
  );

  const feedObject = {
    rss: [
      {
        _attr: {
          'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
          'xmlns:content': 'http://purl.org/rss/1.0/modules/content/',
          'xmlns:atom': 'http://www.w3.org/2005/Atom',
          version: '2.0',
        },
      },
      {
        channel: [...buildItemForFeed(defaultChannel), ...buildFeed(feedItems)],
      },
    ],
  };

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n${xml(feedObject, {
      indent: '  ',
    })}`,
    {
      status: 200,
      statusText: 'SuperSmashingGreat!',
      headers: {
        'Content-Type': 'application/rss+xml;charset=utf-8',
      },
    },
  );
}
