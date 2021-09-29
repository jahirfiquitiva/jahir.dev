/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import { Page } from '~/blocks/page';
import { Release, ReleaseProps } from '~/sections/release';

const releasesRepos = ['Frames', 'Blueprint', 'Kuper', 'ChipView', 'FABsMenu'];

const ReleasePage: FC = ({ repo }: ReleaseProps) => {
  return (
    <Page title={`${repo} Download ~ Jahir Fiquitiva 💎`}>
      <Release repo={repo} />
    </Page>
  );
};

export default ReleasePage;

export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  // @ts-ignore
  const { repo } = ctx.params;
  return { props: { repo } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = releasesRepos.map(
    (slug) => `/gh-releases/${slug.toLowerCase()}`,
  );
  return { paths, fallback: false };
};
