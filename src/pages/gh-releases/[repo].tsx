/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import { Page } from '~/new-components/blocks';
import { Release, ReleaseProps } from '~/new-components/sections';

const releasesRepos = ['Frames', 'Blueprint', 'Kuper', 'ChipView', 'FABsMenu'];

const ReleasePage: FC = ({ repo }: ReleaseProps) => {
  return (
    <Page title={`${repo} Download ~ Jahir Fiquitiva 💎`}>
      <Release repo={repo} />
    </Page>
  );
};

export default ReleasePage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
