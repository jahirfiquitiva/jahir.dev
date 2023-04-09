import type { GetServerSideProps } from 'next';

import { allBlogs } from 'contentlayer/generated';

interface Site {
  slug: string;
  lastModified?: string;
  priority?: number;
}

const siteToSitemapItem = (site: Site) => `<url>
  <loc>${`https://jahir.dev/${site.slug}`}</loc>
  <lastmod>${
    // eslint-disable-next-line newline-per-chained-call
    site.lastModified || new Date().toISOString().split('T')[0]
  }</lastmod>
  <priority>${site.priority || 0.2}</priority>
</url>
`;

const createSitemap = (
  sites: Array<Site>,
) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${sites.map(siteToSitemapItem).join('')}
</urlset>
`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const allPages: Array<Site> = [
    ...allBlogs.map((blog) => ({
      slug: `blog/${blog.slug}`,
      lastModified: blog.date.split('T')[0],
      priority: 0.6,
    })),
    ...['', 'about', 'blog', 'dashboard', 'donate', 'projects', 'uses'].map(
      (slug) => ({ slug, priority: slug ? 0.8 : 1 }),
    ),
  ];
  allPages.sort((a, b) => (b.priority || 0) - (a.priority || 0));

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600',
  );
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
