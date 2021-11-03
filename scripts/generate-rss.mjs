/* eslint-disable import/no-extraneous-dependencies */
import { writeFileSync } from 'fs';

import RSS from 'rss';

import { allBlogs } from '.contentlayer/data';

(async () => {
  const feed = new RSS({
    title: 'Jahir Fiquitiva',
    site_url: 'https://jahir.dev',
    feed_url: 'https://jahir.dev/feed.xml',
  });

  allBlogs.forEach((post) => {
    feed.item({
      title: post.title,
      url: post.link || `https://jahir.dev/blog/${post.slug}`,
      date: post.date,
      description: post.excerpt,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
})();
