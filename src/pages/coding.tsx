import { GetStaticProps } from 'next';

import { Page } from '~/blocks/page';
import { Component, ComponentProps } from '~/elements/base/fc';
import { Challenges } from '~/sections/challenges';
import { CodingChallenge } from '~/types';
import { getAllPosts } from '~/utils/get-posts';

interface CodingProps extends ComponentProps {
  challenges?: Array<CodingChallenge>;
}

const CodingPage: Component<CodingProps> = (props) => {
  const { challenges } = props;
  return (
    <Page title={'Coding ~ Jahir Fiquitiva 💎'}>
      <Challenges challenges={challenges} />
    </Page>
  );
};

export default CodingPage;

export const getStaticProps: GetStaticProps = async () => {
  const allChallenges = getAllPosts(
    ['title', 'date', 'slug', 'inProgress', 'stack'],
    'challenges',
  );
  return {
    props: { challenges: allChallenges },
  };
};
