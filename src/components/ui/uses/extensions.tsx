import type { Route } from 'next';

import { Link } from '@/components/atoms/link';
import extensions from '@/data/extensions.json';

const extensionsHalfIndex = Math.round(extensions.length / 2);
const firstExtensionsHalf = extensions.slice(0, extensionsHalfIndex);
const secondExtensionsHalf = extensions.slice(extensionsHalfIndex);

export const ExtensionsGrid = () => (
  <div className={'flex flex-col gap-5'}>
    <p>
      I use the{' '}
      <Link title={'Arc browser'} href={'https://arc.net/gift/cb3f518f'}>
        Arc browser
      </Link>{' '}
      along with the following extensions:
    </p>
    <article className={'grid grid-cols-1 tablet-sm:grid-cols-2 gap-2'}>
      {[firstExtensionsHalf, secondExtensionsHalf].map((extensions, index) => (
        <div key={`ext-group-${index}`} className={'flex flex-col w-full'}>
          <ul>
            {extensions.map((ext) => (
              <li key={ext.title}>
                <Link href={ext.url as Route} title={ext.title}>
                  {ext.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  </div>
);
