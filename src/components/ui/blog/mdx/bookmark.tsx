import { Suspense } from 'react';

import { getMetadata } from '@/actions/mdx';
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import cx from '@/utils/cx';
import { getUrlDomain } from '@/utils/domain';

const AsyncBookmark = async ({ url }: { url: string }) => {
  const data = await getMetadata(url);
  if (!data) return null;

  const domain = getUrlDomain(url);

  const faviconURL =
    `https://unavatar.io/microlink/${domain}` +
    `?fallback=https://unavatar.io/duckduckgo/${domain}` +
    `?fallback=https://source.boringavatars.com/beam/20/${encodeURI(
      domain || '',
    )}`;

  return (
    <Link
      title={data.title}
      href={url}
      className={cx(
        'text-inherit bg-brand-500/[0.024] dark:bg-brand-100/5',
        'hocus:bg-brand-300/5 dark:hocus:bg-brand-100/10',
        'border border-divider rounded-2.5 font-normal',
        'no-underline group/link w-full max-w-full',
        'flex flex-row overflow-hidden',
      )}
    >
      <div className={'flex flex-col gap-1 p-4'}>
        <p
          className={cx(
            'text-primary-txt text-2xs text-pretty',
            'line-clamp-1 font-medium group-hocus/link:underline',
          )}
        >
          {data.title}
        </p>
        <p className={'text-secondary-txt text-3xs line-clamp-2 text-pretty'}>
          {data.description}
        </p>
        <div className={'flex flex-row items-center gap-2.5 w-full mt-1'}>
          <Img
            src={faviconURL}
            alt={data.title}
            width={16}
            height={16}
            className={'max-w-4 !rounded-0 !my-0'}
          />
          <span className={'text-3xs line-clamp-1'}>{domain}</span>
        </div>
      </div>
      <div className={'flex-1 min-h-0'}>
        <Img
          src={data.image || ''}
          alt={data.title}
          width={192}
          height={108}
          className={cx(
            'w-full h-full aspect-video',
            'pointer-events-none select-none',
            'min-w-24 mobile-md:min-w-36 mobile-lg:min-w-48',
          )}
          unoptimized
        />
      </div>
    </Link>
  );
};

export const Bookmark = ({ url }: { url: string }) => (
  <Suspense fallback={<div className={'w-full min-h-11'} />}>
    <AsyncBookmark url={url} />
  </Suspense>
);
