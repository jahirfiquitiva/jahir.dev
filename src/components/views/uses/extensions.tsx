import { Link } from '@/components/core/link';
import { NoPaddingSection } from '@/components/core/section';
import extensions from '@/data/extensions.json';

import { Grid, GridColumn } from '../mdx/components';

const extensionsHalfIndex = Math.round(extensions.length / 2);
const firstExtensionsHalf = extensions.slice(0, extensionsHalfIndex);
const secondExtensionsHalf = extensions.slice(extensionsHalfIndex);

export const ExtensionsGrid = () => (
  <NoPaddingSection $as={'div'}>
    <p>
      I use the{' '}
      <Link title={'Arc browser'} href={'https://arc.net/gift/92a237df'}>
        Arc browser
      </Link>{' '}
      along with the following extensions:
    </p>
    <Grid className={'mdx-article gap-8'}>
      <GridColumn>
        <ul className={'list-disc !mb-0'}>
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
        <ul className={'list-disc !mb-0'}>
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
  </NoPaddingSection>
);
