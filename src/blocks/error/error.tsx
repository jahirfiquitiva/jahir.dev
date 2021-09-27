import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactElement } from 'react';

import { Component, ComponentProps } from '~/elements/base/fc';
import { OptImage } from '~/elements/base/opt-image';
import { GradientOptions, TextShadowOptions } from '~/elements/props';
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
const errorMessage = 'Unfortunately an unexpected error occurred. 😥';

const constructionError = 'Site under (re)construction!';
const constructionMessage =
  'Please bear with me as I work really hard to bring this site (back) to life 😬';

interface ErrorProps extends ComponentProps {
  errorType?: 'under-construction' | 'four-hundred-four' | 'error';
}

export const Error: Component<ErrorProps> = (props) => {
  const { errorType = 'error' } = props;
  const isFourHundredFour = errorType === 'four-hundred-four';
  const isConstruction = errorType === 'under-construction';

  const getErrorTitle = (): string => {
    if (isFourHundredFour) return fhfError;
    if (isConstruction) return constructionError;
    return errorError;
  };

  const getErrorMessage = (): string => {
    if (isFourHundredFour) return fhfMessage;
    if (isConstruction) return constructionMessage;
    return errorMessage;
  };

  const getShadowColor = (): TextShadowOptions => {
    if (isConstruction) return 'yellow';
    return 'red';
  };

  const getGradientColor = (): GradientOptions => {
    if (isConstruction) return 'yellow-to-orange';
    return 'red-to-purple';
  };

  const getImage = (): string => {
    if (isFourHundredFour) return '/static/gifs/404.gif';
    if (isConstruction) return '/static/gifs/construction.gif';
    return '/static/gifs/monkey.gif';
  };

  const getImageAlt = (): string => {
    if (isFourHundredFour) return 'John Travolta GIF';
    if (isConstruction) return 'Person building a house';
    return 'Monkey throwing laptop aggressively';
  };

  const renderContactMessage = () => {
    if (errorType !== 'error') return <></>;
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
        <Heading
          size={'2'}
          shadowColor={getShadowColor()}
          gradientColor={getGradientColor()}
        >
          {getErrorTitle()}
        </Heading>
        <p>{getErrorMessage()}</p>
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
      {errorType === 'four-hundred-four' ? (
        <FourHundredFourContent>{renderContent()}</FourHundredFourContent>
      ) : (
        <ErrorContent>{renderContent()}</ErrorContent>
      )}
      <OptImage
        h={isFourHundredFour ? '476px' : '180px'}
        src={getImage()}
        alt={getImageAlt()}
      />
    </>,
  );
};
