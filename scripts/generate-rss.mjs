/* eslint-disable import/no-extraneous-dependencies */
import { writeFileSync } from 'fs';

import xml from 'xml';

import { allBlogs } from 'contentlayer/generated';

const formatImageUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('/')) return `https://jahir.dev${url}`;
  return url;
};

const buildDescriptionHtml = (post) => {
  let description = '';
  if (post.longExcerpt) {
    description += `<p>${post.longExcerpt}</p><br/>`;
  } else if (post.excerpt) {
    description += `<p>${post.excerpt}</p><br/>`;
  }
  description += `<b><a href="https://jahir.dev/blog/${post.slug}">Read more...</a></b><br/><br/>`;
  if (post.hero) {
    description += `<p><img src="${formatImageUrl(post.hero)}" `;
    description += `alt="${post.title}"></p>`;
  }
  return description;
};

const getAllPostRssData = async (post) => {
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

const buildItemForFeed = (elem, parentKey = null) => {
  const newArray = [];
  for (const key of Object.keys(elem)) {
    const value = elem[key];
    if (key === parentKey) {
      newArray.push(value);
      continue;
    }

    const newObject = {};
    if (typeof value === 'object' && Object.keys(value).length > 1) {
      newObject[key] = buildItemForFeed(value, key);
    } else {
      newObject[key] = elem[key];
    }
    newArray.push(newObject);
  }
  return newArray;
};

const buildFeed = (posts) => {
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
        url: `https://jahir.dev/blog/${post.slug}`,
        guid: {
          _attr: { isPermaLink: true },
          guid: `https://jahir.dev/blog/${post.slug}`,
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
  image_url: 'https://jahir.dev/static/images/brand/logo-def.png',
  image: {
    title: 'Jahir Fiquitiva',
    link: 'https://jahir.dev',
    url: 'https://jahir.dev/static/images/brand/logo-def.png',
  },
  copyright: `All rights reserved ${new Date().getFullYear()}, Jahir Fiquitiva`,
};

(async () => {
  const feedItems = await Promise.all(allBlogs.map(getAllPostRssData));

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

  const feed = `<?xml version="1.0" encoding="UTF-8"?>\n${xml(feedObject, {
    indent: '  ',
  })}`;
  writeFileSync('./public/feed.xml', feed);
})();
