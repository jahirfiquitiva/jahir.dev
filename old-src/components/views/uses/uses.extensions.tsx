import { Link } from '@/old/components/core';
import { Grid, GridColumn } from '@/old/components/mdx';
import extensions from '@/old/data/extensions.json';

const extensionsHalfIndex = Math.round(extensions.length / 2);
const firstExtensionsHalf = extensions.slice(0, extensionsHalfIndex);
const secondExtensionsHalf = extensions.slice(extensionsHalfIndex);

export const ExtensionsGrid = () => (
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
