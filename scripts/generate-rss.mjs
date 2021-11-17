/* eslint-disable import/no-extraneous-dependencies */
import { writeFileSync } from 'fs';

import { escape } from 'html-escaper';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import RSS from 'rss';
import { unified } from 'unified';

import { allBlogs } from '.contentlayer/data';

const markdownToHtml = async (markdown) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown);
  return result.toString();
};

const getAllPostRssData = async (post) => {
  const html = await markdownToHtml(post.body.raw).catch(() => '');
  return {
    title: post.title,
    url: post.link || `https://jahir.dev/blog/${post.slug}`,
    date: post.date,
    description: escape(html) || post.excerpt,
  };
};

(async () => {
  const feed = new RSS({
    title: 'Jahir Fiquitiva',
    description:
      'Passionate and creative full-stack developer from Colombia &#x1f1e8;&#x1f1f4;',
    site_url: 'https://jahir.dev',
    feed_url: 'https://jahir.dev/feed.xml',
    language: 'en',
  });

  const feedItems = await Promise.all(allBlogs.map(getAllPostRssData));

  feedItems.forEach((post) => {
    feed.item(post);
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
})();
