const RSS = require('rss');
const { writeFileSync } = require('fs');
const { buildPostsData } = require('./build-posts-data');

(async () => {
  const feed = new RSS({
    title: 'Jahir Fiquitiva',
    site_url: 'https://jahir.dev',
    feed_url: 'https://jahir.dev/feed.xml',
  });

  await buildPostsData()
    .then((matters) => {
      matters.forEach((matter) => {
        feed.item({
          title: matter.title,
          url: matter.link || `https://jahir.dev/blog/${matter.slug}`,
          date: matter.date,
          description: matter.excerpt,
        });
      });
    })
    .catch();

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
})();
