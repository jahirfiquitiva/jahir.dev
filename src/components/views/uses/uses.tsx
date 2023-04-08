import { Link } from '@/components/core';
import gaming from '@/data/gaming.json';
import hardware from '@/data/hardware.json';
import software from '@/data/software.json';

import { AnchorLink, HardwareGrid, AppsGrid, Colophon } from './components';
import { ExtensionsGrid } from './uses.extensions';

export const Uses = () => {
  return (
    <>
      <AnchorLink as={'h3'} id={'hardware'} title={'Hardware'} />
      <>
        <AnchorLink as={'h4'} id={'general'} title={'General'} />
        <HardwareGrid items={hardware} />
        <AnchorLink as={'h4'} id={'gaming-pc'} title={'Gaming PC'} />
        <HardwareGrid items={gaming} />
      </>

      <AnchorLink as={'h3'} id={'software'} title={'Software'} />
      <AppsGrid items={software} />

      <AnchorLink
        as={'h3'}
        id={'browser-extensions-arc'}
        title={'Browser Extensions (Arc)'}
      />
      <ExtensionsGrid />

      <AnchorLink as={'h3'} id={'colophon'} title={'Website (colophon)'} />
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
        <p>
          This site is inspired and featured on{' '}
          <Link href={'https://uses.tech'} title={'uses.tech'}>
            uses.tech
          </Link>
        </p>
      </blockquote>
    </>
  );
};
