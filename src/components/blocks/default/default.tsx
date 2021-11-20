import styled from '@emotion/styled';
import { ReactElement } from 'react';

import {
  Link,
  LinkButton,
  CenteredSection,
  Heading,
  Image,
} from '~/components/atoms/simple';
import {
  Component,
  ComponentProps,
  TextShadowOptions,
  GradientOptions,
} from '~/types';

const DefaultContainer = styled(CenteredSection)`
  align-items: center;
  text-align: center;

  & h2 {
    margin-bottom: 1.2rem;
  }

  & p:last-of-type,
  & > a:last-of-type {
    margin-bottom: 2rem;
  }
`;
const FourOhFourContainer = styled(DefaultContainer)`
  justify-content: space-between;
`;
const FourOhFourWrapper = styled(DefaultContainer)`flex: 1;`;

const GifImage = styled(Image)`max-width: 425px;`;

type ContentType = 'under-construction' | 'four-hundred-four' | 'error';

export interface Content {
  type?: ContentType;
  title: string;
  message: string;
  gif: string;
  alt: string;
  shadowColor?: TextShadowOptions;
  gradientColors?: GradientOptions;
}

interface ContentProps extends ComponentProps, Content {}

export const DefaultContent: Component<ContentProps> = (props) => {
  const {
    type = 'error',
    title,
    message,
    gif,
    alt,
    shadowColor,
    gradientColors,
  } = props;

  const isFourOhFour = type === 'four-hundred-four';

  const renderContactMessage = () => {
    if (type !== 'error') return <></>;
    return (
      <p>
        Feel free to{' '}
        <Link href={'/contact'} title={'Link to contact page'}>
          contact me
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
          shadowColor={shadowColor || 'red'}
          gradientColor={gradientColors || 'orange-to-red'}
        >
          {title}
        </Heading>
        <p>{message}</p>
        {renderContactMessage()}
        <LinkButton title={'Link to go to home page'} href={'/'}>
          Go back home
        </LinkButton>
      </>
    );
  };

  const renderContainer = (children?: ReactElement): ReactElement => {
    return isFourOhFour ? (
      <FourOhFourContainer>{children}</FourOhFourContainer>
    ) : (
      <DefaultContainer>{children}</DefaultContainer>
    );
  };

  return renderContainer(
    <>
      {type === 'four-hundred-four' ? (
        <FourOhFourWrapper>{renderContent()}</FourOhFourWrapper>
      ) : renderContent()}
      <GifImage
        src={gif}
        alt={alt}
        objectFit={isFourOhFour ? 'cover' : 'contain'}
      />
    </>,
  );
};
