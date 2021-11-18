/* eslint-disable import/no-extraneous-dependencies */
import { writeFileSync } from 'fs';

import { globby } from 'globby';
import prettier from 'prettier';

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'src/pages/*.ts',
    'src/pages/*.tsx',
    '!src/pages/_*.ts',
    '!src/pages/_*.tsx',
    '!src/pages/404.tsx',
    '!src/pages/500.tsx',
    '!src/pages/api',
    'data/**/*.mdx',
    '!data/*.mdx',
  ]);

  const actualRoutes = [];

  pages.forEach((page) => {
    const path = page
      .replace('src/', '')
      .replace('pages', '')
      .replace('data', '')
      .replace('posts', '/blog')
      .replace('.jsx', '')
      .replace('.tsx', '')
      .replace('.mdx', '')
      .replace('.js', '')
      .replace('.ts', '')
      .replace('.md', '');
    path === '/index'
      ? actualRoutes.splice(0, 0, '/')
      : actualRoutes.push(path);
  });
  actualRoutes.push('/uses');
  actualRoutes.push('/feed');

  const now = new Date().toISOString();
  const lastmod = `${now.substring(0, now.lastIndexOf('.'))}+00:00`;
  const xmlRoutes = actualRoutes
    .map((route) => {
      const slashesCount = (route.match(/\//g) || []).length;
      let priority = 1 - 0.2 * slashesCount;
      if (route.length <= 1 || priority > 1.0) priority = 1.0;
      if (priority < 0.2) priority = 0.2;
      return `<url>
  <loc>${`https://jahir.dev${route}`}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${priority}</priority>
</url>`;
    })
    .join('\n');

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${xmlRoutes}
      </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  // eslint-disable-next-line no-sync
  writeFileSync('./public/sitemap.xml', formatted);
})();
