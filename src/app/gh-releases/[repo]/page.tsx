import type { Metadata, Route } from 'next';
import { notFound } from 'next/navigation';

// import { Heading } from '@/components/core/heading';
// import { Link } from '@/components/core/link/link';
// import { Section } from '@/components/core/section';
import { RequestContext } from '@/types/request';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import { getRepoReleaseData } from './data';
import { Downloader } from './downloader';

const releasesRepos = ['Frames', 'Blueprint', 'Kuper', 'ChipView', 'FABsMenu'];

type ReleasePageContext = RequestContext<{ repo?: string }>;

export default async function ReleasePage(context: ReleasePageContext) {
  const repo = releasesRepos.find(
    (it) => it.toLowerCase() === context.params.repo?.toLowerCase(),
  );
  if (!repo) return notFound();

  const data = await getRepoReleaseData(repo).catch();
  return null;
  // <Section id={'github-release'}>
  //   <Heading>{data?.success ? '🎉' : '😮'}</Heading>
  //   <Heading $as={'h3'}>
  //     {data?.success ? 'Download started!' : 'Oh no!'}
  //   </Heading>
  //   <p>
  //     {data?.success
  //       ? 'Feel free to close this tab 😉'
  //       : 'Direct download is not available right now 😕'}
  //   </p>
  //   {data?.success ? null : (
  //     <p>
  //       Please follow this link to&nbsp;
  //       <Link
  //         title={'GitHub releases link'}
  //         href={(data?.download || '#') as Route}
  //       >
  //         GitHub Releases
  //       </Link>{' '}
  //       …
  //     </p>
  //   )}
  //   <Downloader url={data?.success ? data?.download : null} />
  // </Section>
}

export const generateStaticParams = () =>
  releasesRepos.map((it) => ({ repo: it.toLowerCase() }));

export async function generateMetadata(
  context: ReleasePageContext,
): Promise<Metadata | undefined> {
  const repo = releasesRepos.find(
    (it) => it.toLowerCase() === context.params.repo,
  );
  if (!repo) return undefined;

  return getStaticMetadata({
    title: `${repo} Release Download – Jahir Fiquitiva`,
    description: `Download the latest release artifacts from the ${repo} repository on GitHub`,
    image: buildOgImageUrl(),
    exactUrl: `https://jahir.dev/gh-releases/${repo}`,
  });
}
