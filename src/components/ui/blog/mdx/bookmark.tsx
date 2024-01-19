import type { Route } from 'next';

import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import cx from '@/utils/cx';
import { getUrlDomain } from '@/utils/domain';

export const Bookmark = async ({ url }: { url: string }) => {
  const req = await fetch(`https://api.dub.co/metatags?url=${url}`).catch(null);
  if (!req.ok) return null;

  const data: { title: string; description?: string; image?: string } =
    await req.json();
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
      href={url as Route}
      className={cx(
        'text-inherit bg-brand-500/[0.024] dark:bg-brand-100/5',
        'border border-divider rounded-2.5 font-normal',
        'no-underline group/link w-full max-w-full',
        'grid grid-cols-[auto_1fr] overflow-hidden',
      )}
    >
      <div className={'flex flex-col flex-1 gap-1 p-4'}>
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
            size={16}
            className={'max-w-4 !rounded-0 !my-0'}
          />
          <span className={'text-3xs line-clamp-1'}>{domain}</span>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Img
        src={data.image || ''}
        alt={data.title}
        width={192}
        height={108}
        className={cx(
          'w-auto h-full',
          'aspect-video',
          'pointer-events-none select-none',
          'min-w-24 mobile-md:min-w-36 mobile-lg:min-w-48',
        )}
        unoptimized
      />
    </Link>
  );
};
