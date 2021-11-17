/* eslint-disable import/no-extraneous-dependencies */
import { writeFileSync } from 'fs';

import cheerio from 'cheerio';
import entities from 'entities';
import { escape } from 'html-escaper';
import js2xml from 'js2xmlparser';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import RSS from 'rss';
import { unified } from 'unified';
import xml from 'xml';

import { allBlogs } from '.contentlayer/data';

const markdownToHtml = async (markdown) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown);
  return result.toString();
};

const formatImageUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('/')) return `https://jahir.dev${url}`;
  return url;
};

const formatPostDescriptionForRss = (post) => {
  let description = '';
  if (post.longExcerpt) {
    description += `${post.longExcerpt}\n\n<br/>`;
  } else if (post.excerpt) {
    description += `${post.excerpt}\n\n<br/>`;
  }
  description += `[Read more...](https://jahir.dev/blog/${post.slug})\n\n-----\n`;
  if (post.hero) {
    description += `![${post.title}](${formatImageUrl(post.hero)})`;
  }
  return description;
};

const getAllPostRssData = async (post) => {
  const descriptionMd = formatPostDescriptionForRss(post);
  const rssDescriptionHtml = await markdownToHtml(descriptionMd).catch(
    () => '',
  );

  return {
    title: post.title,
    url: post.link || `https://jahir.dev/blog/${post.slug}`,
    date: post.date,
    description: post.excerpt,
    html: rssDescriptionHtml, // `<![CDATA[ ${rssDescriptionHtml} ]]>`, // entities.encodeHTML(rssDescriptionHtml),
    slug: post.slug,
    hero: post.hero,
  };
};

const buildFeed = (posts) => {
  const sortedPosts = posts.sort(function (first, second) {
    return new Date(second.date).getTime() - new Date(first.date).getTime();
  });
  const feedItems = [];

  feedItems.push(
    ...sortedPosts.map(function (post) {
      const description = post.html ? post.html : { _cdata: post.description };
      const feedItem = {
        item: [
          { title: post.title },
          {
            pubDate: new Date(post.date).toUTCString(),
          },
          { url: `https://jahir.dev/blog/${post.slug}` },
          {
            guid: [
              { _attr: { isPermaLink: true } },
              `https://jahir.dev/blog/${post.slug}`,
            ],
          },
          {
            description: [{ _attr: { type: 'html' } }, description],
          },
          {
            featured_image: formatImageUrl(post.hero),
          },
        ],
      };

      return feedItem;
    }),
  );

  return feedItems;
};

// <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">

(async () => {
  const baseRss = {
    title: 'Jahir Fiquitiva',
    description:
      'Passionate and creative full-stack developer from Colombia &#x1f1e8;&#x1f1f4;',
    site_url: 'https://jahir.dev',
    feed_url: 'https://jahir.dev/feed.xml',
    language: 'en',
  };
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
        channel: [
          {
            'atom:link': {
              _attr: {
                href: 'https://jahir.dev/feed.xml',
                rel: 'self',
                type: 'application/rss+xml',
              },
            },
          },
          { image_url: 'https://jahir.dev/static/images/brand/logo-def.png' },
          {
            title: 'Jahir Fiquitiva',
          },
          {
            link: 'https://jahir.dev',
          },
          {
            description:
              'Passionate and creative full-stack developer from Colombia',
          },
          { language: 'en-US' },
          { lastBuildDate: new Date().toUTCString() },
          {
            image: [
              {
                title: 'Jahir Fiquitiva',
              },
              {
                link: 'https://jahir.dev',
              },
              { url: 'https://jahir.dev/static/images/brand/logo-def.png' },
            ],
          },
          {
            copyright: `All rights reserved ${new Date().getFullYear()}, Jahir Fiquitiva`,
          },
          ...buildFeed(feedItems),
        ],
      },
    ],
  };

  const feed = `<?xml version="1.0" encoding="UTF-8"?>\n${xml(feedObject, {
    indent: '  ',
  })}`;
  writeFileSync('./public/feed.xml', feed);
})();
