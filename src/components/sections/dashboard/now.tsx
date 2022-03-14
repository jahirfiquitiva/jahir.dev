import styled from '@emotion/styled';

import { Heading, Image, Link } from '~/components/atoms/simple';
import { Component, mediaQueries } from '~/types';
import formatDate from '~/utils/format/format-date';

const NowHeading = styled(Heading)`
  margin-top: 1.2rem;
  grid-row: 2;
  grid-column: 1/3;
  ${mediaQueries.tablet.sm} {
    grid-row: 1;
    margin-top: 0;
  }
`;

const NowContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);

  ${mediaQueries.tablet.sm} {
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 2.4rem;
    align-items: center;
  }
`;

const Animoji = styled(Image)`
  border-radius: 50%;
  background-color: var(--accent-animoji);
  grid-row: 1;
  grid-column: 1;

  ${mediaQueries.tablet.sm} {
    grid-row: 2;
    grid-column: 2;
  }
`;

const NowList = styled.ul`
  margin: 1.2rem 0;
  grid-row: 3;
  grid-column: 1;

  ${mediaQueries.tablet.sm} {
    grid-row: 2;
    grid-column: 1;
  }
`;

const NowRow = styled.div`
  display: flex;
  margin: 0.2rem 0;
  & > span {
    font-weight: normal;
    user-select: none;
    margin-right: 0.8rem;
    opacity: 1;
    color: #000;
  }
`;

export const Now: Component = () => {
  return (
    <>
      <NowContainer>
        <NowHeading
          size={'3'}
          shadowColor={'purple'}
          gradientColor={'purple-to-brand'}
          emoji={'🔮'}
        >
          Now
        </NowHeading>
        <NowList>
          <li>
            <NowRow>
              <span>👨‍💻</span>
              <p>
                Working at{' '}
                <Link
                  href={'https://mattersupply.co/'}
                  title={'Link to MatterSupply Co. website'}
                >
                  MatterSupply Co.
                </Link>{' '}
                building an android app for{' '}
                <b style={{ textDecoration: 'line-through' }}>[REDACTED]</b>
              </p>
            </NowRow>
          </li>
          <li>
            <NowRow>
              <span>🤖</span>
              <p>
                Maintaining my android dashboards:{' '}
                <Link
                  href={'https://github.com/jahirfiquitiva/Blueprint'}
                  title={'Link to Blueprint repository on GitHub'}
                >
                  Blueprint
                </Link>
                ,{' '}
                <Link
                  href={'https://github.com/jahirfiquitiva/Frames'}
                  title={'Link to Frames repository on GitHub'}
                >
                  Frames
                </Link>{' '}
                and{' '}
                <Link
                  href={'https://github.com/jahirfiquitiva/Kuper'}
                  title={'Link to Kuper repository on GitHub'}
                >
                  Kuper
                </Link>
              </p>
            </NowRow>
          </li>
          <li>
            <NowRow>
              <span>🤓</span>
              <p>
                Taking{' '}
                <Link
                  href={'https://wesbos.com/'}
                  title={'Link to Wes Bos page'}
                >
                  Wes Bos
                </Link>
                &apos;s{' '}
                <Link
                  href={'https://beginnerjavascript.com/'}
                  title={'Link to Beginner JavaScript course'}
                >
                  Beginner JavaScript
                </Link>{' '}
                course: going back to basics aiming to understand things better
              </p>
            </NowRow>
          </li>
          {/* <li>
            <NowRow>
              <span>📚</span>
              <p>Reading Clean Code by Robert C. Martin</p>
            </NowRow>
          </li> */}
        </NowList>
        <Animoji
          src={'/static/images/jahir/animoji.png'}
          alt={'Image of Jahir as an Animoji'}
          size={144}
          quality={100}
          priority
        />
      </NowContainer>
      <small>Last update: {formatDate('2022-01-02T05:00:00.000Z')}</small>
    </>
  );
};
