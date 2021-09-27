import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactElement } from 'react';

import { Component, ComponentProps } from '~/elements/base/fc';
import { OptImage } from '~/elements/base/opt-image';
import { LinkButton } from '~/elements/simple/button';
import { Heading } from '~/elements/simple/heading';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;

  & > .gif,
  & > img {
    margin-top: 0.4rem;
    padding: 0;
    height: auto;
    width: 100%;
    max-width: 400px;
  }
`;

const FourHundredFourContainer = styled(ErrorContainer)`
  justify-content: space-between;
`;

const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h2 {
    margin-bottom: 1.2rem;
  }

  & p:last-of-type,
  & .button:last-of-type {
    margin-bottom: 2rem;
  }
`;

const FourHundredFourContent = styled(ErrorContent)`
  flex: 1;
`;

const fhfError = 'Woops! ~ Page Not Found';
const fhfMessage =
  'Unfortunately the site you were trying to reach does not exist' +
  ' or has been moved. 😥';

const errorError = 'Woops! ~ Something went wrong';
const errorMessage = 'Unfortunately an unexpected error occurred 😥. ';

interface ErrorProps extends ComponentProps {
  isFourHundredFour?: boolean;
}

export const Error: Component<ErrorProps> = (props) => {
  const { isFourHundredFour = false } = props;

  const renderContactMessage = () => {
    if (isFourHundredFour) return <></>;
    return (
      <p>
        Feel free to{' '}
        <Link href={'/contact'}>
          <a>contact me</a>
        </Link>{' '}
        and share some details so I can try to fix it.
      </p>
    );
  };

  const renderContent = (): ReactElement => {
    return (
      <>
        <Heading size={'2'} shadowColor={'red'} gradientColor={'red-to-purple'}>
          {isFourHundredFour ? fhfError : errorError}
        </Heading>
        <p>{isFourHundredFour ? fhfMessage : errorMessage}</p>
        {renderContactMessage()}
        <LinkButton to={'/'} newTab={false}>
          Go back home
        </LinkButton>
      </>
    );
  };

  const renderContainer = (children?: ReactElement): ReactElement => {
    return isFourHundredFour ? (
      <FourHundredFourContainer>{children}</FourHundredFourContainer>
    ) : (
      <ErrorContainer>{children}</ErrorContainer>
    );
  };

  return renderContainer(
    <>
      {isFourHundredFour ? (
        <FourHundredFourContent>{renderContent()}</FourHundredFourContent>
      ) : (
        <ErrorContent>{renderContent()}</ErrorContent>
      )}
      <OptImage
        h={isFourHundredFour ? '476px' : '180px'}
        src={
          isFourHundredFour ? '/static/gifs/404.gif' : '/static/gifs/monkey.gif'
        }
        alt={
          isFourHundredFour
            ? 'John Travolta GIF'
            : 'Monkey throwing laptop aggressively'
        }
      />
    </>,
  );
};
