import { Link } from '@/components/core/link';
import extensions from '@/data/extensions.json';

import { Grid, GridColumn } from '../mdx/components';

const extensionsHalfIndex = Math.round(extensions.length / 2);
const firstExtensionsHalf = extensions.slice(0, extensionsHalfIndex);
const secondExtensionsHalf = extensions.slice(extensionsHalfIndex);

export const ExtensionsGrid = () => (
  <Grid className={'mdx-article'}>
    <GridColumn>
      <ul className={'list-disc ml-16'}>
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
      <ul className={'list-disc ml-16'}>
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
