import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactElement } from 'react';

import { Heading } from '~/elements/simple/heading';
import { Image, LinkButton } from '~/new-components/atoms/simple';
import {
  Component,
  ComponentProps,
  GradientOptions,
  TextShadowOptions,
} from '~/types';

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

const GifImage = styled(Image)`
  max-width: 425px;
`;

interface Content {
  title: string;
  message: string;
  gif: string;
  alt: string;
  shadowColor?: TextShadowOptions;
  gradientColors?: GradientOptions;
}

interface ContentOptions {
  error: Content;
  'four-hundred-four': Content;
  'under-construction': Content;
  sent: Content;
}

const contentOptions: ContentOptions = {
  error: {
    title: 'Woops! ~ Something went wrong',
    message: 'Unfortunately an unexpected error occurred. 😥',
    gif: '/static/gifs/monkey.gif',
    alt: 'Monkey throwing laptop aggressively',
  },
  'four-hundred-four': {
    title: 'Woops! ~ Page not found',
    message:
      'Unfortunately the site you were trying to reach does not exist or has been moved. 😥',
    gif: '/static/gifs/404.gif',
    alt: 'John Travolta GIF',
  },
  'under-construction': {
    title: 'Site under (re)construction!',
    message:
      'Please bear with me as I work really hard to bring this site (back) to life 😬',
    shadowColor: 'yellow',
    gradientColors: 'yellow-to-orange',
    gif: '/static/gifs/construction.gif',
    alt: 'Person building a house',
  },
  sent: {
    title: 'Thanks for your message!',
    message: 'I will get back to you as soon as possible 🙌',
    gif: '/static/gifs/mail.gif',
    alt: 'Dog checking mail',
    shadowColor: 'green',
    gradientColors: 'blue-to-green',
  },
};

interface ErrorProps extends ComponentProps {
  errorType?: 'under-construction' | 'four-hundred-four' | 'error' | 'sent';
}

export const Error: Component<ErrorProps> = (props) => {
  const { errorType = 'error' } = props;
  const isFourHundredFour = errorType === 'four-hundred-four';

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
          shadowColor={contentOptions[errorType]?.shadowColor || 'red'}
          gradientColor={
            contentOptions[errorType]?.gradientColors || 'red-to-purple'
          }
        >
          {contentOptions[errorType]?.title}
        </Heading>
        <p>{contentOptions[errorType]?.message}</p>
        {renderContactMessage()}
        <LinkButton title={'Link to home page'} href={'/'}>
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
      <GifImage
        src={contentOptions[errorType]?.gif}
        alt={contentOptions[errorType]?.alt}
        objectFit={isFourHundredFour ? 'cover' : 'contain'}
      />
    </>,
  );
};
