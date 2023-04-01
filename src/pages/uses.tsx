import type { NextPage } from 'next';

import { Link } from '@/components/atoms';
import { MdxContent } from '@/components/mdx';
import { AppsGrid } from '@/components/mdx/custom/apps';
import { Colophon } from '@/components/mdx/custom/Colophon';
import { HardwareGrid } from '@/components/mdx/custom/hardware';
import { Grid, GridColumn } from '@/components/mdx/Grid';
import { Layout, Seo } from '@/components/molecules';
import extensions from '@/data/extensions.json';
import gaming from '@/data/gaming.json';
import hardware from '@/data/hardware.json';
import software from '@/data/software.json';

const extensionsHalfIndex = Math.round(extensions.length / 2);
const firstExtensionsHalf = extensions.slice(0, extensionsHalfIndex);
const secondExtensionsHalf = extensions.slice(extensionsHalfIndex);

const usesPageKeywords = [
  'hardware',
  'software',
  'apps',
  'tools',
  'extensions',
  'stack',
  'website',
  'tech',
  'uses',
];

const ExtensionsGrid = () => (
  <Grid>
    <GridColumn>
      <ul>
        {firstExtensionsHalf.map((ext, index) => (
          <li key={`f-ext-${index}`}>
            <Link href={ext.url} title={ext.title}>
              {ext.title}
            </Link>
          </li>
        ))}
      </ul>
    </GridColumn>
    <GridColumn>
      <ul>
        {secondExtensionsHalf.map((ext, index) => (
          <li key={`s-ext-${index}`}>
            <Link href={ext.url} title={ext.title}>
              {ext.title}
            </Link>
          </li>
        ))}
      </ul>
    </GridColumn>
  </Grid>
);

const PostPage: NextPage = () => (
  <Layout>
    <Seo
      title={'Uses – Jahir Fiquitiva'}
      description={
        'Get to know the hardware, software and tools I use on a daily basis'
      }
      exactUrl={'https://jahir.dev/uses'}
      keywords={usesPageKeywords}
    />
    <MdxContent
      title={'What do I use?'}
      hero={'/static/images/blog/uses/setup-2022.jpeg'}
    >
      <h3 id={'hardware'}>Hardware</h3>
      <h4 id={'general'}>General</h4>
      <HardwareGrid items={hardware} />
      <h4 id={'gaming-pc'}>Gaming PC</h4>
      <HardwareGrid items={gaming} />
      <h3 id={'apps'}>Apps</h3>
      <AppsGrid items={software} />
      <h3 id={'browser-extensions-arc'}>Browser Extensions (Arc)</h3>
      <ExtensionsGrid />
      <h3 id={'colophon'}>Website (colophon)</h3>
      <p>This website is built using the following tech stack:</p>
      <Colophon />
      <small>
        <Link
          title={'View website source code on GitHub'}
          href={'https://github.com/jahirfiquitiva/jahir.dev'}
        >
          View source code
        </Link>
      </small>
      <blockquote>
        This site is inspired and featured on{' '}
        <Link href={'https://uses.tech'} title={'uses.tech'}>
          uses.tech
        </Link>
      </blockquote>
    </MdxContent>
  </Layout>
);

export default PostPage;
