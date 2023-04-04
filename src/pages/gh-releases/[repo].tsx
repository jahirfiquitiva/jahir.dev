import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';

import { Heading, Section, Link } from '@/components/core';
import { Layout, Seo } from '@/components/molecules';
import { useImmutableRequest } from '@/hooks/useRequest';
import { FourOhFour as FourOhFourSection } from '@/sections';

interface ReleaseData {
  success?: boolean;
  url?: string;
  download?: string;
}

const GitHubRelease: NextPage<{ repo?: string }> = ({ repo }) => {
  const { data, loading } = useImmutableRequest<ReleaseData>(
    `/api/release?repo=${repo}`,
  );

  if (data && data.download) {
    window.location.href = data.download;
  }

  const renderContent = () => {
    if (!repo || (!data && !loading)) return <FourOhFourSection />;
    if (loading) return <Heading as={'h3'}>Loading…</Heading>;
    return (
      <>
        <Heading>{data?.success ? '🎉' : '😮'}</Heading>
        <Heading as={'h3'}>
          {data?.success ? 'Download started!' : 'Oh no!'}
        </Heading>
        <br />
        <p>
          {data?.success
            ? 'Feel free to close this tab 😉'
            : 'Direct download is not available right now 😕'}
        </p>
        {data?.success ? (
          <></>
        ) : (
          <p>
            Please follow this link to&nbsp;
            <Link title={'GitHub releases link'} href={data?.download || '#'}>
              GitHub Releases
            </Link>{' '}
            …
          </p>
        )}
      </>
    );
  };

  return (
    <Layout>
      <Seo
        title={`${repo} Release Download – Jahir Fiquitiva`}
        description={`Download the latest release artifacts from ${repo} repository`}
        exactUrl={`https://jahir.dev/gh-releases/${repo}`}
        keywords={['repository', 'artifacts', 'github', 'release', 'download']}
      />
      <Section id={'github-release'} centered>
        {renderContent()}
      </Section>
    </Layout>
  );
};

export default GitHubRelease;

const releasesRepos = ['Frames', 'Blueprint', 'Kuper', 'ChipView', 'FABsMenu'];

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { repo } = params;
  return { props: { repo } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = releasesRepos.map(
    (slug) => `/gh-releases/${slug.toLowerCase()}`,
  );
  return { paths, fallback: false };
};
